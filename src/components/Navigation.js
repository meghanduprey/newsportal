import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
  <div id="myNav" >
    <Link to="/News/News">Top US News </Link>
    <span style={{fontSize: 50}}>&#183;</span>
    <Link to ="/News/TechNews"> Tech News </Link>
    <span style={{fontSize: 50}}>&#183;</span>
    <Link to ="/News/BBCNews"> BBC News</Link>
  </div>
);

export default Navigation;