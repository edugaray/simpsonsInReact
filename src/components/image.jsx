import React, { Component } from 'react'
class Image extends Component {
  render() {
    console.log(this.props.character);
    return (<img src={this.props.image} alt={this.props.altText}></img> );
  }
}

export default Image;