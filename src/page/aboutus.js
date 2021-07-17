import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import AppHeaders from "../component/headers"
class AboutUs extends Component {
    render() {
        return (
            <>
             <AppHeaders page={"#aboutus"}/>
                  <Row noGutters>
                    <Col>About Us</Col>
                </Row>
            </>
        );
    }
}

export default AboutUs;