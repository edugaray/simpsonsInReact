import axios from "axios";
import React, { Component } from "react";
import Character from "./components/character";
import './App.css'

class App extends Component {
  state = { }
  //ignore the below code, it simply gets the api data
  //and places it inside the state
  async componentDidMount() {
      const response = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10");
      this.setState({ apiData: response.data });
  }
  deleteObj = (index)=> {
    let itemRemoved = [...this.state.apiData];
    itemRemoved.splice(index, 1);
    this.setState({ apiData: itemRemoved });
  }
  render() {
    if (!this.state.apiData) {
      return <h1>Awaiting API data!</h1>
    }
    return (
      <div className="container">
        <h1>The Simpsons!</h1>
        <div>
          {this.state.apiData.map((charObj, index) => {
            return (<Character charObj={charObj} index={index} deleteObj={this.deleteObj}/>);
            })}
          </div>
      </div>
    );
  }
}

export default App;
