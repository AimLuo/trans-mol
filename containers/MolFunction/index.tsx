import {
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  Input,
  List,
  Modal,
  Progress,
  Table,
  Typography,
} from 'antd'
import { ChangeEventHandler, useState } from 'react'

import { ketcherContext } from '~/containers/Ketcher/context'
import {
  ArrowDropDownSvg,
  ArrowRightSvg,
  CheckSvg,
  Icon,
} from '~/packages/plugin-ui/controls/icons'

// const getFileContent = (file) =>
//   new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.onload = () => {
//       const result = fileReader.result;
//       resolve(result);
//     };
//     fileReader.onerror = () => {
//       reject('error');
//     };
//     fileReader.readAsText(file);
//   });

export const MolFunction = ({ plugin }) => {
  const [data, setData] = useState([])
  const [isExpanded, setIsExpanded] = useState(true)
  const [status, setStatus] = useState({
    m1: 'enable',
    m2: 'enable',
    // n: 'enable',
    // r: 'enable',
  })
  const [current, setCurrent] = useState('')
  const handleToggle = () => {
    setIsExpanded((pre: boolean) => !pre)
  }

  const [showModal, setShowModal] = useState(false)
  const handleConfirmModal = () => {
    setShowModal(false)
    setStatus((pre) => ({
      ...pre,
      [current]: 'done',
    }))
  }

  const handleShowModal = async () => {
    const ketcher = ketcherContext.getKetcher()
    console.log(plugin, ketcher)

    // setData()
    const kethcerRes = await ketcher.getSmiles()
    const kethcerItem = {
      name: '2dMolecule',
      content: kethcerRes,
    }
    const data = [kethcerItem]
    const cells = plugin.state.data.cells

    // Object.values(cells).forEach((cell) => {
    //   console.log('cell', cell)
    // })
    for (const iterator of cells) {
      const [, cell] = iterator
      if (cell.sourceRef === '-=root=-') {
        console.log(cell)
        data.push({
          name: cell.obj.label,
          content: cell.obj.data,
        })
      }
    }
    setData(data)
    setShowModal(true)
  }

  const handleSelectM1: ChangeEventHandler<HTMLInputElement> = async (e) => {
    handleShowModal()

    setCurrent('m1')
  }
  const handleSelectM2: ChangeEventHandler<HTMLInputElement> = async (e) => {
    handleShowModal()
    setCurrent('m2')
  }
  const [showResult, setShowResult] = useState(false)
  const handleApply = () => {
    setShowResult(true)
  }
  const show = () => {
    const n = Math.round(Math.random() * 10 + 1)
    window.viewer.loadStructureFromUrl(`./mock/${n}.mol`, 'mol')
    setShowResult(false)
  }

  const [N, setN] = useState('')
  const [R, setR] = useState('')
  const submitDisabled =
    Object.values(status).some((s) => s === 'enable') || !N || !R

  return (
    <div className='msp-transform-wrapper msp-transform-wrapper-collapsed'>
      <div
        className='msp-transform-header'
        style={{
          display: 'flex',
        }}
      >
        <button
          title='Load one or more files and optionally create default visuals'
          className='msp-btn msp-btn-block'
          onClick={handleToggle}
        >
          <Icon svg={isExpanded ? ArrowDropDownSvg : ArrowRightSvg} />
          Function
        </button>
        <button
          id='dian'
          type='button'
          style={{
            display: 'block',
            width: 120,
            textAlign: 'right',
            // marginTop: 10,
            border: 'none',
            // padding: '4px 0',
            // paddingRight: 6,
            color: '#68BEFD',
            // background: '#0d0e12',
            // marginBottom: 10,
          }}
          onClick={() => setShowResult(true)}
        >
          Task List &#8594;
        </button>
      </div>
      {isExpanded && (
        <>
          <div className='msp-control-row'>
            <span className='msp-control-row-label' title='Source'>
              Molecular 1
            </span>
            <div className='msp-control-row-ctrl'>
              <SelectFile status={status.m1} onChange={handleSelectM1} />
            </div>
          </div>
          <div className='msp-control-row'>
            <span className='msp-control-row-label' title='Source'>
              Molecular 2
            </span>
            <div className='msp-control-row-ctrl'>
              <SelectFile status={status.m2} onChange={handleSelectM2} />
            </div>
          </div>
          <div className='msp-control-row'>
            <span className='msp-control-row-label' title='Source'>
              No. of N
            </span>
            <div className='msp-control-row-ctrl'>
              {/* <SelectFile status={status.n} onChange={handleSelectN} /> */}
              <input
                type='text'
                placeholder='N'
                value={R}
                onChange={(e) => setR(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='msp-control-row'>
            <span className='msp-control-row-label' title='Source'>
              No. of R
            </span>
            <div className='msp-control-row-ctrl'>
              {/* <SelectFile status={status.r} onChange={handleSelectR} /> */}
              <input
                type='text'
                placeholder='R'
                value={N}
                onChange={(e) => setN(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='msp-transform-apply-wrap'>
            <div>
              <button
                disabled={submitDisabled}
                className='msp-btn msp-btn-block msp-btn-commit msp-btn-commit-on'
                onClick={handleApply}
              >
                <Icon svg={CheckSvg} />
                Apply
              </button>
            </div>
          </div>
          <Modal
            width='50%'
            visible={showModal}
            onCancel={() => setShowModal(false)}
            onOk={handleConfirmModal}
            destroyOnClose
          >
            <MockList data={data} />
          </Modal>
          <Drawer
            height={500}
            placement='top'
            visible={showResult}
            onClose={() => setShowResult(false)}
          >
            <MockTable show={show} />
          </Drawer>
        </>
      )}
    </div>
  )
}

function SelectFile({ onChange, status }) {
  return (
    <div
      className='msp-btn msp-btn-block msp-btn-action msp-loader-msp-btn-file'
      style={{
        marginTop: 1,
      }}
    >
      {/* {status === 'done' ? 'Done' : 'Select files...'} */}
      <input
        style={{
          display: 'block',
          border: 'none',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        // readOnly={status === 'done'}
        disabled={status === 'done'}
        accept='.smiles'
        // onChange={onChange}
        onClick={onChange}
        type='button'
        value={status === 'done' ? 'Done' : 'Select files...'}
      />
    </div>
  )
}

function MockList({ data }) {
  return (
    <Collapse defaultActiveKey={['1', '2']}>
      <Collapse.Panel header='manual' key='1'>
        <Input.TextArea placeholder='please input smiles format' />
      </Collapse.Panel>
      <Collapse.Panel header='list' key='2'>
        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.name}>
              <div>
                <Checkbox />{' '}
                <Typography.Text type='success'>{item.name}</Typography.Text>
                <Divider type='vertical' />
                <Typography.Text
                  copyable
                  style={{ width: '33vw' }}
                  ellipsis={{
                    rows: 1,
                  }}
                >
                  {item.content}
                </Typography.Text>
              </div>
            </List.Item>
          )}
        />
      </Collapse.Panel>
    </Collapse>
  )
}

const datatable = [
  {
    name: 'Slecvgd',
    status: getNumber(),
  },
  {
    name: 'Rivgpzqk',
    status: getNumber(),
  },
  {
    name: 'Dobpre',
    status: 100,
  },
  {
    name: 'Bvc',
    status: getNumber(),
  },

  {
    name: 'Fpbwjrfcbs',
    status: -1,
  },
]
function getNumber() {
  return Math.round(Math.random() * 100)
}
function MockTable({ show }) {
  return (
    <Table
      id='name'
      dataSource={datatable}
      columns={[
        {
          title: 'name',
          dataIndex: 'name',
        },
        {
          title: 'status',
          dataIndex: 'status',
          render(value) {
            if (value === -1) {
              return (
                <Progress percent={getNumber()} status='exception'></Progress>
              )
            }
            return <Progress percent={value}></Progress>
          },
        },
        {
          title: 'operate',
          // dataIndex: 'operate',
          render(_, record) {
            const { status } = record
            return (
              <Button onClick={show} size='small' disabled={status !== 100}>
                show
              </Button>
            )
          },
        },
      ]}
    />
  )
}

export default MolFunction
