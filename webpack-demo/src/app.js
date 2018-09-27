import Layer from './components/layer/layer.js';
import './css/common.css';

const App = function () {
  let dom = document.getElementById('app');
  let layer = new Layer();
  dom.innerHTML = layer.tpl;
}

new App()