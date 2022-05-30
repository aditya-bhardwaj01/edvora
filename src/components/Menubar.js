import React, { Component } from "react";
import "./Menubar.css";
import { Link, BrowserRouter } from "react-router-dom";
import filter from './filter.png'

export default class Menubar extends Component {
  constructor(props){
    super(props);
    this.state = {
      nearest : [],
      upcoming : [],
      past : []
    }
  }
  addActive1 = () => {
    var element = document.getElementById('l11'); 
    var oth1 = document.getElementById('l22');
    var oth2 = document.getElementById('l33');

    element.classList.add('active');
    oth1.classList.remove('active');
    oth2.classList.remove('active');
  }

  addActive2 = () => {
    var element = document.getElementById('l22'); 
    var oth1 = document.getElementById('l11');
    var oth2 = document.getElementById('l33');

    element.classList.add('active');
    oth1.classList.remove('active');
    oth2.classList.remove('active');
  }
  
  addActive3 = () => {
    var element = document.getElementById('l33'); 
    var oth1 = document.getElementById('l11');
    var oth2 = document.getElementById('l22');

    element.classList.add('active');
    oth1.classList.remove('active');
    oth2.classList.remove('active');
  }

  render() {
    return (
      <div className="Menubar">
        <div className="menu">
          <div className="d-flex justify-content-between menu-bar">
            <div className="list">
                <ul>
                  <li id="l11" className="active l1" onClick={this.addActive1}> <Link to="/">Nearest rides</Link></li>
                  <li id="l22" className="l2" onClick={this.addActive2}><Link to="/upcoming">Upcoming rides (4)</Link></li>
                  <li id="l33" className="l3" onClick={this.addActive3}><Link to="/past">Past rides (2)</Link></li>
                </ul>
              </div>
            <div className="filter">
              <img src={filter} />
              <span>Filters</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
