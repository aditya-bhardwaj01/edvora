import React, { Component } from 'react'
import "./Card.css";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: this.props.element
        }
    }

    printArray = (arr) => {
        var res = '[';
        for(var i=0; i<arr.length; i++){
            res+=arr[i];
            if(i!=arr.length-1) res+=', ';
        }
        res+=']'
        return res;
    }

    getDateAndTime = (date) => {
        var month = ['January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var monthIndex = date[0] + date[1];
        if(monthIndex < 10) monthIndex = date[1];
        var day = date[3]+date[4];
        var year = date[6] + date[7] + date[8] + date[9];

        var hour = 0, minute;
        var time;
        if(date[17] == 'P'){
            if(date[11] + date[12] != 12){
                hour = 12 + parseInt(date[11]) + parseInt(date[12]);
                time = hour+':'+date[14]+date[15];
            }
            else{
                time = 12+':'+date[14]+date[15];
            }
        }
        else{
            if(date[11] + date[12] != 12){
                time = date[11] + date[12] + ':' + date[14]+date[15] ;
            }
            else{
                time = '00' + ':' + date[14]+date[15];
            }
        }

        return (day + 'th ' + month[monthIndex] + ' ' + year + ' ' + time);
    }

    render() {
        return (
            <div className='Card'>
                <div className="d-flex justify-content-between">
                    <div className='left-of-card'>
                        <div className="row">
                            <div className="col card-image">
                                <img src={this.state.element.map_url} alt="map" />
                            </div>
                            <div className="col card-text">
                                <p><span>Ride Id:</span>  {this.state.element.id}</p>
                                <p><span>Origin Station:</span>  {this.state.element.origin_station_code}</p>
                                <p><span>station_path</span>:  {this.printArray(this.state.element.station_path)}</p>
                                <p><span>Date:</span>  {this.getDateAndTime(this.state.element.date)}</p>
                                <p><span>Distance:</span>  {this.state.element.id}</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-of-card">
                        <span className="city">{this.state.element.city}</span>
                        <span className="span state">{this.state.element.state}</span>
                    </div>
                </div>
            </div>
        )
    }
}
