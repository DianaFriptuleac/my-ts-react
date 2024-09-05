import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container,Row, Col, Card } from "react-bootstrap";
import AboutArticles from "../details/interfaces";

const ArticleDetail = () => {
    //useParams per ottenere il parammetro id e gli do il tipo di string
  const { id } = useParams<{ id: string }>();
  //lo stato inizialmente e null prima che l'articolo venga carricato
  // AboutArticles | null - l' article puo essere di tipo AboutArticles(interfaccia) o null.
  const [article, setArticle] = useState<AboutArticles | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.log("Errore nel recupero dell'articolo", error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <Container>
        <h2 className="text-center text-light mt-5">You can find all the details here</h2>
        <Row className="justify-content-center my-4">
      {article && (
        <Col md={8}>
        <Card className="mt-3">
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title className="text-center text-primary">{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Card.Text>
              <small className="text-muted">Pubblicato il {new Date(article.published_at).toLocaleDateString()}</small>
            </Card.Text>
            <div className="d-flex justify-content-between">
            <Card.Text>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Fonte originale</a>
            </Card.Text>
           <Link to='/'><Card.Text>Torna alla Home</Card.Text></Link> 
           </div>
          </Card.Body>
        </Card>
        </Col>
      )}
      </Row>
    </Container>
  );
};

export default ArticleDetail;
