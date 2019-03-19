import React from "react";
import { shallow, mount } from "enzyme";
import Pokecard from "./Pokecard";

const test1 = {id: 4, name: 'TestMon', type: 'test', base_experience: 62}

// Smoke test!
it("renders without crashing", function() {
  shallow(<Pokecard />);
});

// Shallow test!
it("renders using shallow", function() {
    // this test passes
    shallow(<Pokecard 
                id={test1.id}
                name={test1.name}
                type={test1.type}
                base_experience={test1.base_experience}
            />);
  });
  