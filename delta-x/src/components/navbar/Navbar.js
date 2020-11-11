import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';


const Navbar = props => (
      <header className="navbar">
        <nav className="navbar-content">
      		<div>
            <DrawerToggleButton click={props.drawerClickHandler}/>  
          </div>
          <div className="nav-logo"><a href="#">THE LOGO</a></div>
          <div className="spacer" />
          <div className="nav-items">
            <ul>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );

export default Navbar;
