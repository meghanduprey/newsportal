import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => (
  <div id="myNav" >
    <NavLink to="/" activeClassName="activeRoute" className="link">Top US News </NavLink>
    <span style={{fontSize: 50}}>&#183;</span>
    <NavLink to ="/News/TechNews" activeClassName="activeRoute" className="link"> Tech News </NavLink>
    <span style={{fontSize: 50}}>&#183;</span>
    <NavLink to ="/News/BBCNews" activeClassName="activeRoute" className="link"> BBC News</NavLink>
  </div>
);

export default Navigation;