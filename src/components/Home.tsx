import { Container, Row } from "react-bootstrap";
import AllArticles from "./AllArticles";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
       
        <AllArticles/>
      </Row>
    </Container>
  );
};
export default Home;
