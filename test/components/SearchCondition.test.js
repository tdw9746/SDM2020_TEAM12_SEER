import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
// var jsdom = require("mocha-jsdom");

// global.document = jsdom({
//   url: "http://localhost:3000/"
// });

import SearchCondition from "../../src/components/SearchCondition.component";

import {
  Dropdown,
  Grid,
  Button,
  Radio,
  Form,
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

describe("Search Condition Component Testing", () => {
  it("Renders Form", () => {
    const wrapper = shallow(<SearchCondition />);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  it("Renders Form Input", () => {
    const wrapper = shallow(<SearchCondition />);
    expect(wrapper.find(Form.Input)).to.have.length(2);
  });

  it("Renders Radio", () => {
    const wrapper = shallow(<SearchCondition />);
    expect(wrapper.find(Form.Radio)).to.have.length(4);
  });
});