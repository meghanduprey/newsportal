import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => (
  <div id="myNav" >
    <NavLink to="/" activeClassName="activeRoute" className="link" exact>Top US News </NavLink>

    <NavLink to ="/News/TechNews" activeClassName="activeRoute" className="link"> Tech News </NavLink>

    <NavLink to ="/News/BBCNews" activeClassName="activeRoute" className="link"> BBC News</NavLink>
  </div>
);

export default Navigation;