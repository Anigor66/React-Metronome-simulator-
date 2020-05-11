import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Metronome />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
