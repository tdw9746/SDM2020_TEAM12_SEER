import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
// var jsdom = require("mocha-jsdom");

// global.document = jsdom({
//   url: "http://localhost:3000/"
// });

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

describe("Search result Component Testing", () => {
  it("Renders Table", () => {
    const wrapper = shallow(<ListSeerArticle />);
    expect(wrapper.find(Table)).to.have.length(1);
  });

  it("Renders cells", () => {
    const wrapper = mount(<ListSeerArticle />);
    expect(wrapper.find(Table.Cell)).to.have.length(10);
  });

  // it("Renders className", () => {
  //   const wrapper = mount(<ListSeerArticle />);
  //   expect(wrapper.find(Table.Row).prop('className')).to.have.length(4);
  // });
});