import { Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center my-3">Spaceflight</h1>
        <SingleArticle/>
      </Row>
    </Container>
  );
};
export default Home;
