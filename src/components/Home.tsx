import { Container, Row } from "react-bootstrap";
import AllArticles from "./AllArticles";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center mt-3 text-light">Spaceflight</h1>
        <AllArticles/>
      </Row>
    </Container>
  );
};
export default Home;
