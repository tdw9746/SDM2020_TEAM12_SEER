import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
// var jsdom = require("mocha-jsdom");

// global.document = jsdom({
//   url: "http://localhost:3000/"
// });

import App from "../src/App2";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders SEER", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h1"); //.querySelector("h1");
    expect(h1.textContent).to.equal("SEER");
    // expect(1).to.equal(1);
  });
});