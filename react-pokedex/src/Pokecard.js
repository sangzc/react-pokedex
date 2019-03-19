import React, { Component } from "react";
import {getPokeImg} from "./helpers/helpers";
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props;
        const imgURL = getPokeImg(id);
      return (
        <div className="Pokecard">
            <h4>{name}</h4>
            <img src={imgURL} alt={name} />
            <div>
                <h6>Type: {type}</h6>
                <h6>EXP: {base_experience}</h6>
            </div>
        </div>
      );
    }
  }
  
  export default Pokecard;