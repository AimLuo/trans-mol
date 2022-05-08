import ReactDom from 'react-dom';
// import 'ketcher-react/dist/index.css';
import './global.css';
import Index from './Index';

const app = document.getElementById('app');
ReactDom.render(<Index />, app);
