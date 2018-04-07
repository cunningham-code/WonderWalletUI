import React, { Component } from 'react';
import './App.css';
import Favorites from './favorites.js'
import Profile from './profile.js'

const favoritesArray = [
  {
    publicID: "0xb8f1713a4a1b4d64b66b1785108c8d2b200441b370278cd2fedb38de8e8b2f90 ",
    color: '#8E4A49',
  },
  {
    publicID: "0xb8f1713a4a1b4d64b66b1785108c8d2b200441b370278cd2fedb38de8e8b2f90 ",
    color: '#2B59C3',
  },
  {
    publicID: "0xb8f1713a4a1b4d64b66b1785108c8d2b200441b370278cd2fedb38de8e8b2f90 ",
    color: '#533A7B',
  },
  {
    publicID: "0xb8f1713a4a1b4d64b66b1785108c8d2b200441b370278cd2fedb38de8e8b2f90 ",
    color: '#253C78',
  },
  {
    publicID: "0xb8f1713a4a1b4d64b66b1785108c8d2b200441b370278cd2fedb38de8e8b2f90 ",
    color: '#D36582',
  },
];

const Userr = {
  currentBalance: 6900,
  publicKey: "01234567890123456789012345678901234567890123456789"
}

class App extends Component {
  state = {
    screen: 0,
  }

  render() {
    if(this.state.screen === 0) {
      return (
        <div>
          <h1>Upload your keystore</h1>
          <input type="file" id="myFile"></input>
          <input type="password" name="psw"></input>
          <button onClick={() => this.setState({screen: 2}) }>Submit</button>
          <p onClick={() => this.setState({screen: 1}) }>Create A Keystore</p>
        </div>
      );
    } else if(this.state.screen === 1) {
      return (
        <div>
          <h1>Create a keystore</h1>
          <input type="password" name="psw"></input>
          <button onClick={() => this.setState({screen: 2})}>Create Keystore</button>
          <p onClick={() => this.setState({screen: 0}) }>Upload A Keystore</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row topRow center-align">
            <div className="wonder center-align">W&#0246;nderWallet</div>
            <div className="tagline center-align">It is time to blockchain human again</div>
            <button onClick={() => this.setState({screen: 0}) }>Sign Out</button>
          </div>
          <div className="row bottomRow">

          <hr className="divider"></hr>
          	<ul className="collection with-header col s12 m4 center-align sideBar">
              <li className="collection-header"><h4>Favorites</h4></li>
              <Favorites favoritesArray={ favoritesArray } />
            </ul>
            <Profile user={ Userr } />
            <div className="row col s12 m8">
              <hr></hr>
              <h4>Make a Payment:</h4>
              <form className="col s12">
                <div className="row formRow">
                  <div className="input-field col s12 m11">
                    <i className="material-icons prefix">face</i>
                    <textarea id="receiver" className="materialize-textarea"></textarea>
                    <label for="receiver">Receiver Public Key</label>
                  </div>
                </div>
                <div className="row formRow">
                  <div className="input-field col s7 m8">
                    <i className="material-icons prefix">local_atm</i>
                    <textarea id="amount" className="materialize-textarea"></textarea>
                    <label for="amount">Amount</label>
                  </div>
                  <div className="input-field col s5 m3">
                    <h5>= $666.69 USD</h5>
                  </div>
                </div>
                <div className="row formRow">
                  <div className="input-field col s12 m6">
                    <i className="material-icons prefix">present_to_all</i>
                    <select className="icons" id="crypto">
                      <option value="" className="disabled selected">Choose Your Token</option>
                      <option value="APPC" data-icon="images/appcoins.png" className="left">AppCoins (APPC)</option>
                      <option value="EOS" data-icon="images/eos.png" className="left">EOS (EOS)</option>
                      <option value="LRC" data-icon="images/loopring.png" className="left">Loopring (LRC)</option>
                      <option value="SNOV" data-icon="images/snovio.png" className="left">Snovio (SNOV)</option>
                      <option value="WETH" data-icon="images/weth.png" className="left">WETH (WETH)</option>
                    </select>
                  </div>
                  <div className="input-field col s12 m5">
                      <i className="material-icons prefix">textsms</i>
                      <input type="text" id="autocomplete-input" className="autocomplete"></input>
                      <label for="autocomplete-input">Ticker Lookup</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
