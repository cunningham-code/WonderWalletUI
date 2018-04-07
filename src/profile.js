import React from 'react';

class Favorites extends React.Component {
  render() {
      return (
        <div className="row col s12">
          <div className="col s12 m7">
            <h5>Public Key:</h5>
            <h6>{this.props.user.currentBalance}</h6>
          </div>
          <div className="col s12 m5">
            <h5>Current Balance:</h5>
            <h6>{this.props.user.publicKey} ETH | $420.69 USD</h6>
          </div>
        </div>
    );
  }
}

export default Favorites;
