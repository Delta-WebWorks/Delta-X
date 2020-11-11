import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './DrawerToggleButton.css';


const DrawerButton = props => (
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />        
      </button>       
   );

export default DrawerButton;
