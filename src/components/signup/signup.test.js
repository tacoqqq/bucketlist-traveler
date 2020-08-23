import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Signup from './signup';

it ('renders without crashing', () => {
  const div = document.createElement('div')
  window.scrollTo = jest.fn()
  ReactDOM.render(<Router><Signup /></Router>, div)
  ReactDOM.unmountComponentAtNode(div);
})
