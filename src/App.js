import './App.css'
import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {ethers} from 'ethers';
import abi from './contract.json';

class App extends Component {

  contract_address = '0xd092873B9bB03ecdb4E5D168939096a8e44C8057'
  provider_url = 'https://polygon-mainnet.g.alchemy.com/v2/b0dFDkVhn7MZvQvN7b6XKZbZ8rnuojmA'

  state = {
    input: '',
    message_on_blockchain: ''
  }

  handleInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  changeMessage = () => {
    console.log("changeText called")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(this.contract_address, abi, signer);
    contract.update(this.state.input);
  }

  seeMessage = async () => {
    console.log("seeText called");
    const provider = new ethers.providers.JsonRpcProvider(this.provider_url);
    let contract = new ethers.Contract(this.contract_address, abi, provider);
    let message = await contract.return_message();
    this.setState({message_on_blockchain: message});
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
          onClick={this.changeMessage}>Change Message</Button>
        <Button
          variant="contained"
          onClick={this.seeMessage}>See Message</Button>
        <h1>message_on_blockchain: {this.state.message_on_blockchain}</h1>
      </div>
    );
  }
}

export default App;
