import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import EditDestination from './edit-destination';

const match = {
    params : { 
        destinationId : 1 
        }
   }

it ('renders without crashing', () => {
  const div = document.createElement('div')
  window.scrollTo = jest.fn()
  ReactDOM.render(<Router><EditDestination match={match}/></Router>, div)
  ReactDOM.unmountComponentAtNode(div);
})
