import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import { Link } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Navbar /></Router> , div);
    ReactDOM.unmountComponentAtNode(div);
})