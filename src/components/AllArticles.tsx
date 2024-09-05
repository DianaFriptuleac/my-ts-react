import { useEffect, useState } from "react"
import { Col,Card,Button,Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import AboutArticles from "../details/interfaces"

const AllArticles = () =>{
const URL = 'https://api.spaceflightnewsapi.net/v4/articles'

//lo stato dei artiicoli
const [singleArticle, setSingleArticle] = useState<AboutArticles[]>([]) //il tipo dell'array(utilizzo l'interface)
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
        setSingleArticle(arrayOfArticle.results) //risultati dell array
    })
    .catch((err) =>{
        console.log(err)
    })
}
//esseguo la fetch al montaggio
useEffect(() => {
    myFetch()
}, [])


return (
    <Row className="g-4 "> 
    {/*per ogni articolo nell'array genero la card */}
      {singleArticle.map((article) => (
        <Col key={article.id} xs={12} md={6} lg={4}>
          <Card className="mb-3 my-card h-100">
            <Card.Img variant="top" src={article.image_url} className="h-100"/>
            <Card.Body className="text-light">
              <Card.Title >{article.title}</Card.Title>
              <Card.Text className="text-center">
                {/* {new Date(article.published_at).toLocaleDateString()}*/}
                {/* utilizzo newDate x creare un oggetto Date e lo trasformo in una sttinga- una data leggibile*/}
              
                <small>Pubblicato il {new Date(article.published_at).toLocaleDateString()}</small>
              </Card.Text>
              {/*collegamento dinamico */}
              <Link to={`/articles/${article.id}`} className="text-decoration-none">
                <div className="d-flex justify-content-center">
                  <Button variant="info">Vai ai dettagli</Button>
                </div>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllArticles;