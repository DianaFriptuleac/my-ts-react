import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import AboutArticles from "../details/interfaces";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
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
      {article && (
        <Card>
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Card.Text>
              <small className="text-muted">Pubblicato il {new Date(article.published_at).toLocaleDateString()}</small>
            </Card.Text>
            <Card.Text>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Fonte originale</a>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ArticleDetail;
