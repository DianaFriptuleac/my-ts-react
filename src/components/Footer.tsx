import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <Container fluid>
    <Row>
      <Col className="myfooter text-light" >
      <p className="text-center py-3 mb-0">
       
          Spaceflight {new Date().getFullYear()}©
        
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
