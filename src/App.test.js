import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><App /></Router>, div)
  ReactDOM.unmountComponentAtNode(div);
})