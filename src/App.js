import './App.css'
import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class App extends Component {

  state = {
    input: '',
    message_on_blockchain: ''
  }

  handleInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  changeMessage = () => {
    console.log("changeText called")
  }

  seeMessage = () => {
    console.log("seeText called")
  }
       
  render() {
    return (
      <div className="app">
        <TextField
          variant="standard"
          label="Input"
          value={this.state.input}
          onChange={this.handleInputChange} />
        <Button
          variant="contained"
          onClick={this.changeM}>Change Message</Button>
        <Button
          variant="contained"
          onClick={this.seeText}>See Message</Button>
        <h1>message_on_blockchain: {this.state.message_on_blockchain}</h1>
      </div>
    );
  }
}

export default App;
