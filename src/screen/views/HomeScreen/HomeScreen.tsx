import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container fluid>
        <div>
          <div style={contentCenter}>
            <h1>SOUND MONEY. SIMPLIFIED</h1>
            <span>ENABLED BY A P2P NETWORK OF NON-CUSTODIAL WALLETS</span>
          </div>
          <div style={contentCenter}>
            <img
              style={
                isMobile
                  ? { height: 150, width: "90%", marginTop: 20 }
                  : { height: 410, width: "90%", marginTop: 20 }
              }
              src={require("../../../assets/images/logosaving.jpeg")}
            />
          </div>
          <div>
            <h4 style={{ paddingTop: 40 }}>MOBILE WALLET FEATURES</h4>
            <hr style={hrStyle} />
            <Row>
              <Col md="6" style={contentCenter}>
                <img
                  style={
                    isMobile ? { height: 150, width: "100%" } : { height: 200 }
                  }
                  src={require("../../../assets/images/Selfsovereign.png")}
                />
              </Col>
              <Col md="6">
                <h3>Self-sovereign</h3>
                <h5>
                  BitHyve is a software provider and not a financial services
                  company. Our wallets are non-custodial and a user always has
                  the control of her keys
                </h5>
                <h5>
                  Our architecture ensures that we can not monitor, censor or
                  have control of users funds at any time
                </h5>
                <h5>
                  'Friends & Family' network or peer trust is used to add
                  resilience
                </h5>
              </Col>
            </Row>
            <br />
          </div>
          <div>
            <Row>
              <Col md="6">
                <h3>Secure</h3>
                <h5>
                  Latest app security measures for our iOS and Android bitcoin
                  wallet apps
                </h5>
                <h5>
                  Users have the option of protecting their funds further by
                  using 2FA authentication for transactions and/ or 2 of 3
                  multi-sig technology for recovering funds
                </h5>
                <h5>
                  Support for HSM to protect the keys not stored on the app
                </h5>
              </Col>
              <Col md="6" style={contentCenter}>
                <img
                  style={
                    isMobile ? { height: 150, width: "100%" } : { height: 200 }
                  }
                  src={require("../../../assets/images/Secure.png")}
                />
              </Col>
            </Row>
            <br />
          </div>
          <div>
            <Row>
              <Col md="6" style={contentCenter}>
                <img
                  style={
                    isMobile ? { height: 150, width: "100%" } : { height: 200 }
                  }
                  src={require("../../../assets/images/Simple.png")}
                />
              </Col>
              <Col md="6">
                <h3>Simple</h3>
                <h5>
                  Familiar account based UI for managing different address
                  groups as with banks and other financial service companies
                </h5>
                <h5>
                  On-boarding and help screens for ongoing education of the user
                </h5>
                <h5>Sending money to friends using in-app address book</h5>
              </Col>
            </Row>
            <br />
          </div>

          <div>
            <Row>
              <Col md="6">
                <h3>Smart</h3>
                <h5>
                  Secure P2P wallet communication ensures the ability to have
                  contracts between bitcoin wallets
                </h5>
                <h5>
                  Create joint accounts, add time lock to your accounts or lend
                  money to a friend, all with just a few clicks
                </h5>
              </Col>
              <Col md="6" style={contentCenter}>
                <img
                  style={
                    isMobile ? { height: 150, width: "100%" } : { height: 200 }
                  }
                  src={require("../../../assets/images/Smart.png")}
                />
              </Col>
            </Row>
            <br />
          </div>

          <div>
            <Row>
              <Col md="6" style={contentCenter}>
                <img
                  style={
                    isMobile ? { height: 150, width: "100%" } : { height: 200 }
                  }
                  src={require("../../../assets/images/Stable.png")}
                />
              </Col>
              <Col md="6">
                <h3>Stable</h3>
                <h5>An in-app mechanism to peg your funds to any currency</h5>
                <h5>
                  Trust-less way to ensure the value of your funds even if
                  BitHyve vanishes from the face of the earth as all
                  transactions are secured on the blockchain
                </h5>
                <h5>
                  Receive salary and pay invoices as you would do in a normal
                  bank account{" "}
                </h5>
              </Col>
            </Row>
            <br />
          </div>
        </div>
        <div style={divBtnOpenApp}>
          <Button style={btnOpenApp} className="btn btn-success">
            Open App{" "}
          </Button>
        </div>
      </Container>
    );
  }
}

const hrStyle = {
  color: "#000",
  backgroundColor: "#000",
  height: 1
} as React.CSSProperties;

const contentCenter = {
  textAlign: "center"
} as React.CSSProperties;

const divBtnOpenApp = {
  textAlign: "center",
  position: "sticky",
  bottom: 10,
  overflow: "auto"
} as React.CSSProperties;

const btnOpenApp = {} as React.CSSProperties;
