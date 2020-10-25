import React from 'react';
import App, { doIncrement, doDecrement, Counter } from '../src/App';
// var jsdom = require('mocha-jsdom');
import { expect } from "chai";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    // jsdom({ skipWindowCheck: true });
    it('renders h1', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).to.have.length(1);
    });
});