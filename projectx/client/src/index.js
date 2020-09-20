import React from 'react';
import ReactDOM from 'react-dom';
import {Auth} from './context/auth';

import App from './App';

ReactDOM.render(
  <Auth><App /></Auth>
    ,
  document.getElementById('root')
);

