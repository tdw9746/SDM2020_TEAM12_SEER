import React from 'react';
import App, { doIncrement, doDecrement, Counter } from '../src/App';
// var jsdom = require('mocha-jsdom');

describe('App Component', () => {
    // jsdom({ skipWindowCheck: true });
    it('renders h1', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).to.have.length(1);
    });
});