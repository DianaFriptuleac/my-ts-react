import { useEffect, useState } from "react"
import { Col,Card,Button,Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import AboutArticles from "../details/interfaces"

const SingleArticle = () =>{
const URL = 'https://api.spaceflightnewsapi.net/v4/articles'


const [singleArticle, setSingleArticle] = useState<AboutArticles[]>([])
const myFetch = () =>{
    fetch(URL)
    .then((resp) =>{
        if (resp.ok) {
            return resp.json()
        }else {
            throw new Error('Errore nel recupero')
        }
    })
    .then((arrayOfArticle) => {
        console.log(arrayOfArticle)
        setSingleArticle(arrayOfArticle.results)
    })
    .catch((err) =>{
        console.log(err)
    })
}
useEffect(() => {
    myFetch()
}, [])


return (
    <Row className="g-4"> 
      {singleArticle.map((article) => (
        <Col key={article.id} xs={12} md={4} lg={3}>
          <Card className="mb-4 my-card h-100">
            <Card.Img variant="top" src={article.image_url} className="h-100"/>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                <small className="text-muted">Pubblicato il {new Date(article.published_at).toLocaleDateString()}</small>
              </Card.Text>
              <Link to={`/articles/${article.id}`}>
                <div className="d-flex justify-content-center">
                  <Button variant="success">Vai ai dettagli</Button>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SingleArticle;