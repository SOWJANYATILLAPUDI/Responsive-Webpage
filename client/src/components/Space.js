import React from 'react';
import '../styles/Space.css';
import spacex from "../assets/spacex-logo.png";
import boein from "../assets/boein.png";
import nasa from "../assets/nasa.png";
import astroscale from "../assets/astroscale.png";

function Space() {
  return (
        <div className="group-5">
            <img
                className="spacex-logo"
                alt="Spacex logo"
                src={spacex}
            />
            <img
                className="element-NASA-worm"
                alt="Element NASA worm"
                src={nasa}
            />
            <img
                className="boeing-logo"
                alt="Boeing logo"
                src={boein}
            />
            <img
                className="astroscale-main-logo"
                alt="Astroscale main logo"
                src={astroscale}
            />
            </div>

  )
}

export default Space;