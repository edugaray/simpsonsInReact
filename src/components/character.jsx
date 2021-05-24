import React, { Component } from 'react';
import CharacterName from "./characterName";
import Image from "./image";
import Quote from "./quote";
import { Button } from '@material-ui/core';

class Character extends Component {
  render() {
    return <div className="character">
      <CharacterName name={this.props.charObj.character} />
      <Image image={this.props.charObj.image} altText={this.props.charObj.character}/>
      <Quote quote={this.props.charObj.quote} />
      <Button onClick={()=>this.props.deleteObj(this.props.index)} variant="contained" color="primary">Delete Me!</Button>
    </div>
  }
}
export default Character;