import React, { useState } from 'react'

import type { ButtonsConfig } from '~/packages/ketcher-react'
import { Editor } from '~/packages/ketcher-react'
import { StandaloneStructServiceProvider } from '~/packages/ketcher-standalone'

// const { Editor } = require('~/packages/ketcher-react')
const buttons: ButtonsConfig = {
  layout: { hidden: true },
  clean: { hidden: true },
  arom: { hidden: true },
  dearom: { hidden: true },
  cip: { hidden: true },
  check: { hidden: true },
  analyse: { hidden: true },
  recognize: { hidden: true },
  miew: { hidden: true },
  settings: { hidden: true },
  help: { hidden: true },
  about: { hidden: true },
  sgroup: { hidden: true },
  'sgroup-data': { hidden: true },
  'reaction-plus': { hidden: true },
  arrows: { hidden: true },
  'reaction-arrow-open-angle': { hidden: true },
  'reaction-arrow-filled-triangle': { hidden: true },
  'reaction-arrow-filled-bow': { hidden: true },
  'reaction-arrow-dashed-open-angle': { hidden: true },
  'reaction-arrow-failed': { hidden: true },
  'reaction-arrow-both-ends-filled-triangle': { hidden: true },
  'reaction-arrow-equilibrium-filled-half-bow': { hidden: true },
  'reaction-arrow-equilibrium-filled-triangle': { hidden: true },
  'reaction-arrow-equilibrium-open-angle': { hidden: true },
  'reaction-arrow-unbalanced-equilibrium-filled-half-bow': {
    hidden: true,
  },
  'reaction-arrow-unbalanced-equilibrium-open-half-angle': {
    hidden: true,
  },
  'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow': {
    hidden: true,
  },
  'reaction-arrow-unbalanced-equilibrium-filled-half-triangle': {
    hidden: true,
  },
  'reaction-mapping-tools': { hidden: true },
  'reaction-automap': { hidden: true },
  'reaction-map': { hidden: true },
  'reaction-unmap': { hidden: true },
  rgroup: { hidden: true },
  'rgroup-label': { hidden: true },
  'rgroup-fragment': { hidden: true },
  'rgroup-attpoints': { hidden: true },
  shape: { hidden: true },
  'shape-ellipse': { hidden: true },
  'shape-rectangle': { hidden: true },
  'shape-line': { hidden: true },
  text: { hidden: true },
  'enhanced-stereo': { hidden: true },
}
const structServiceProvider = new StandaloneStructServiceProvider()

const Ketcher = ({ onInit }) => {
  console.log('onInit', onInit)
  return (
    <div
      style={{
        height: 400,
      }}
    >
      <Editor
        onInit={onInit}
        buttons={buttons}
        errorHandler={() => ({})}
        staticResourcesUrl=''
        structServiceProvider={structServiceProvider}
      />
    </div>
  )
}

export { Ketcher }
export default Ketcher
