import { Col, Row } from "react-bootstrap";
import { RiMailFill } from "react-icons/ri";
import "../../styles/component.css";

import icCalculator from "../../assets/icons/iconcalculator.svg";
import icVoucher from "../../assets/icons/icontestvoucher.svg";
import icEmailfrom from "../../assets/icons/iconemail.svg";
import icSupport from "../../assets/icons/iconpatient.svg";
import icEvent from "../../assets/icons/iconevent.svg";

const Mainmenu = () => {
  return (
    <div style={{
      position: "relative",
      top: "-15px",padding:"5px"
    }}>
      <div
        className="mainmenuContainer"
        style={{
          width: "100%",
          padding: "10px 10px",
          backgroundColor: "#ffffff",
          
          
        }}>
        <Row className="mainmenuHome" noGutters>
          <Col>
            <img src={icCalculator} width="29" height="32" className="d-inline-block align-top" />
            <div>
              Treatment
              <br />
              Management
            </div>
          </Col>
          <Col>
            <img src={icVoucher} width="30" height="30" className="d-inline-block align-top" />
            <div>
              Free
              <br />
              Testing
            </div>
          </Col>
          <Col>
            <img src={icEmailfrom} width="32" height="32" className="d-inline-block align-top" />
            <div>
              Email Med
              <br />
              Team
            </div>
          </Col>
          <Col>
            <img src={icSupport} width="32" height="32" className="d-inline-block align-top" />
            <div>
              Patient
              <br />
              Support
            </div>
          </Col>
          <Col>
            <img src={icEvent} width="32" height="30" className="d-inline-block align-top" />
            <div>
              Adverse Event
              <br />
              Report
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Mainmenu;
