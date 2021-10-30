import React from "react";
import "./Buttons.css";
import { NavLink} from 'react-router-dom'


function Buttons() {
  return (
    
      <div className="button-up">
        <ul>
          <li>
            <NavLink to="/app1">App 1</NavLink>
          </li>
          <li>
            <NavLink to="/app2">App 2</NavLink>
          </li>
          <li>
            <NavLink to="/app3">App 3</NavLink>
          </li>
          <li>
            <NavLink to="/app4">App 4</NavLink>
          </li>
          <li>
            <NavLink to="/app5">App 5</NavLink>
          </li>
          <li>
            <NavLink to="/app6">App 6</NavLink>
          </li>
          <li>
            <NavLink to="/app7">App 7</NavLink>
          </li>
          <li>
            <NavLink to="/app8">App 8</NavLink>
          </li>
          <li>
            <NavLink to="/app9">App 9</NavLink>
          </li>
          <li>
            <NavLink to="/app10">App 10</NavLink>
          </li>
        </ul>
      </div>
  );
}

export default Buttons;
