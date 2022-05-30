import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src={loading} alt="loading" style={{height: 100+'vh', width: 100+'%', borderRadius: '10px'}}/>
      </div>
    )
  }
}

// style={{height: 100+'vh', width: 100+'%'}}
