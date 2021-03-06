import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import HabitPresenter from './Presenter';

const habit = [
  { id: 1, name: 'Reading', count: 0 },
  { id: 2, name: 'Running', count: 0 },
  { id: 3, name: 'Coding', count: 0 },
];

const Presenter = new HabitPresenter(habit);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={Presenter} />
  </React.StrictMode>,
  document.getElementById('root')
);
