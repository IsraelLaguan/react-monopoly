import React, { Component } from 'react'

export default class Property extends Component {
  constructor() {

  }

  render() {
    return (
      <div>
        {'A property'}
        { this.props.player ? this.props.player : null }
      </div>
    )
  }
}
