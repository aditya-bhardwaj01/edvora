import React, { Component } from 'react'
import './Navbar.css'
import profile from './profile.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className="d-flex justify-content-between navigation">
                    <a href='#' style={{color: 'white'}}>
                        <div className='tag'>Edvora</div>
                    </a>
                    <div className='profile'>
                        <span>Aditya Bhardwaj</span>
                        <img src={profile} />
                    </div>
                </div>
            </div>
        )
    }
}
