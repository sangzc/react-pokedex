import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

// Smoke test!
it("renders without crashing", function() {
  shallow(<App />);
});

// Shallow test!
it("renders using shallow", function() {
    // this test passes
    shallow(<App />);
  });

// Mount test!
it("renders using mount", function() {
    // this test fails!
    mount(<App />);
});
  