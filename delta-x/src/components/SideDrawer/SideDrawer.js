import React, { Component } from 'react';

import './SideDrawer.css';


class SideDrawer extends Component {

	componentDidMount(){
		
	}

	render() {
    return (
    	<>
      <nav className="side-drawer">
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </nav>
      <div className="backdrop" />    
    	</>
      )
  }
}

export default SideDrawer;
