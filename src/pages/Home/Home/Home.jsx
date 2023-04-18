import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import RightNav from "../../Shared/RightNav/RightNav";
const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <LeftNav />
        </Col>
        <Col lg={6}>
          <h3>main coming soon...</h3>
        </Col>
        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
