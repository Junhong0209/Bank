import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import 'src/styles/index.scss';
import 'src/styles/font.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
