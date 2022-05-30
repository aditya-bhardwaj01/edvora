import React, { Component } from 'react'
import Card from './Card';
import './Upcoming.css'
import Spinner from './Spinner';

export default class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      upcoming: []
    }
  }

  updateState = async () => {
    const url = "https://assessment.api.vweb.app/rides"
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      upcoming: parsedData,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div className='Upcoming' style={{ color: 'white' }}>
        {this.state.loading ? (
          <Spinner />
        ) : <div>
          {this.state.upcoming.length > 0 ?

            <div>
              {this.state.upcoming.map((element) => {
              return (
                <div>
                  <Card element={element} key={element.id} />
                </div>
              );
            })}
            </div>: <Spinner />

          }
        </div>
        }
      </div>
    )
  }
}
