import ReactDOM from 'react-dom';
import App from './App';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import 'src/styles/index.css';
import 'src/styles/font.css';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);
