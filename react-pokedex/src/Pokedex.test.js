import React from "react";
import { shallow, mount } from "enzyme";
import Pokedex from "./Pokedex";

const pokemons = [
    {id: 4, name: 'CharTest', type: 'fireTest', base_experience: 62},
    {id: 7, name: 'SquirtTest', type: 'waterTest', base_experience: 63},
  ]

// Smoke test!
it("renders without crashing", function() {
  shallow(<Pokedex />);
});

// Shallow test!
it("renders using shallow with defaults", function() {
    // this test passes
    shallow(<Pokedex />);
});

it("renders using shallow with test data", function() {
    // this test passes
    shallow(<Pokedex pokemons={pokemons} />);
});

// Shallow test!
it("renders using mount with defaults", function() {
    // this test passes
    mount(<Pokedex />);
});

it("renders using mount with test data", function() {
    // this test passes
    mount(<Pokedex pokemons={pokemons} />);
});
