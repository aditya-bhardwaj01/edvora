import React, { Component } from 'react'
import Card from './Card';
import './Nearest.css'
import Spinner from './Spinner';

export default class Nearest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      nearest: []
    }
  }
  updateState = async () => {
    const url = "https://assessment.api.vweb.app/rides"
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      nearest: parsedData,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div className='Nearest' style={{ color: 'white' }}>
        {this.state.loading ? (
          <Spinner />
        ) : <div>
          {this.state.nearest.length > 0 ?

            <div>
              {this.state.nearest.map((element) => {
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
