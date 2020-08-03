import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrumMachine from "./components/drumMachine/drumMachine";
import 'bootstrap/dist/css/bootstrap.min.css';
import {drumStore} from './drumstore'

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine store={drumStore}/>
  </React.StrictMode>,
  document.getElementById('root')
);
