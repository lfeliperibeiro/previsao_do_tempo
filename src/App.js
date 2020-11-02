import React from 'react'
import axios from 'axios'
import './style.css'

const API = 'https://api.hgbrasil.com/weather?woeid=455827&format=json-cors'

export default class App extends React.Component {
  state = {
    city: '',
    forecast: []
  }

  componentDidMount() {
    axios.get(API)
    .then(({ data }) => {
      this.setState({
        city: data.results.city_name,
        forecast: data.results.forecast
      })
    })   
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.state.city}</h1>
        <table>
          <thead>
            <tr>
            <th>Data</th>
            <th>Min</th>
            <th>Max</th>
            </tr>            
          </thead>
          <tbody>
            {this.state.forecast.map((day, index) => {
                return (                  
                  <tr key={index}>
                  <td>{day.date}</td>
                  <td>{day.min}</td>
                  <td>{day.max}</td>
                </tr>
                
                )
              })
            }
            

          </tbody>
        </table>
      </div>
    )
  }
}

