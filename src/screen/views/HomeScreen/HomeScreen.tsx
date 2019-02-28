import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container fluid>
        <div className="App" style={{ textAlign: "center" }}>
          <div>
            <h1>SOUND MONEY. SIMPLIFIED</h1>
            <span>ENABLED BY A P2P NETWORK OF NON-CUSTODIAL WALLETS</span>
          </div>
          <div>
            <img
              style={{ height: 410, width: "90%", marginTop: 20 }}
              src={require("../../../assets/images/logosaving.jpeg")}
            />
          </div>
        </div>
      </Container>
    );
  }
}
