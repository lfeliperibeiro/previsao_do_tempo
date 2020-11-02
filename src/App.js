import React from 'react'
import axios from 'axios'

const API = 'https://api.hgbrasil.com/weather?woeid=455827&format=json-cors'

export default class App extends React.Component {
  state = {
    city: ''
  }

  componentDidMount() {
    axios.get(API)
    .then(response => {
      const json = response.data
      this.setState({
        city: json.results.city_name
      })
    })   
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
      </div>
    )
  }
}

