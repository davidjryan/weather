import React, { Component } from 'react';

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempurature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
      </table>
    )
  }
}
