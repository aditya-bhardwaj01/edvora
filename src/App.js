import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Nearest from './components/Nearest';
import Upcoming from './components/Upcoming';
import Past from './components/Past';

export default class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     nearest: [],
  //     upcoming: [],
  //     past: []
  //   }
  // }

  // updateState = async () => {
  //   const url = "https://assessment.api.vweb.app/rides"
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     nearest: parsedData,
  //     upcoming: parsedData,
  //     past: parsedData
  //   });
  //   console.log(this.state.nearest);
  // }

  // async componentDidMount() {
  //   this.updateState();
  // }

  // setNearest = (item) => {
  //   if(item.length > 0) this.state.nearest = item;
  //   console.log(this.state.nearest);
  // }
  // setUpcoming = (item) => {
  //   if(item.length > 0) this.state.upcoming = item;
  // }
  // setPast = (item) => {
  //   if(item.length > 0) this.state.past = item;
  // }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <Navbar />
        
        <Menubar />
          <Routes>
            <Route path='/' element={<Nearest />} />
            <Route exact path='/upcoming' element={<Upcoming />} />
            <Route exact path='/past' element={<Past />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
