import React, { Component } from "react"
import GifList from "./../components/GifList"
import GifSearch from "./../components/GifSearch"
import API from "./../adapters/API"

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    query: ""
  }

  onSubmit = e => {
    e.preventDefault()
    API.fetchGifs(this.state.query)
      .then(gifs => this.setState({gifs}))

    this.setState({query: ""})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <GifSearch
          onSubmit={this.onSubmit}
          query={this.state.query}
          handleChange={this.handleChange}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}