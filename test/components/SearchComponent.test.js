import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
// var jsdom = require("mocha-jsdom");

// global.document = jsdom({
//   url: "http://localhost:3000/"
// });

import SearchComponent from "../../src/components/Search.component";
import SearchCondition from "../../src/components/SearchCondition.component";
import ListSeerArticle from "../../src/components/ListSeerArticle.component";

import {
  Dropdown,
  Grid,
  Button,
  Radio,
  Form,
  Table
} from 'semantic-ui-react'

let rootContainer;

beforeEach(() => {
  // rootContainer = document.createElement("div");
  // document.body.appendChild(rootContainer);
});

afterEach(() => {
  // document.body.removeChild(rootContainer);
  // rootContainer = null;
});

describe("Search integration test ", () => {
  it('Click the search button', () => {
    const wrapper = mount(<SearchComponent />);
 
    // wrapper.setState({ counter: 0 });
    wrapper.find(SearchCondition).find(Button).at(0).simulate('click');
 
    // const wrapperResult = mount(<ListSeerArticle />);

    expect(wrapper.find(ListSeerArticle).find(Table.Row).length > 0).to.equal(true);

  });

  it('Click the search button - TDD', () => {
    const wrapper = mount(<SearchCondition />);
 
    wrapper.setState({ method: "TDD", claims:["Improve Performance"] });
    wrapper.find(Button).at(0).simulate('click');
 
    const wrapperResult = mount(<ListSeerArticle />);

    expect(wrapperResult.find(Table.Row)).to.have.length(2);

  });
});