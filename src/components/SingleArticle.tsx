import { useEffect, useState } from "react"
import { Col,Card,Button } from "react-bootstrap"
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


return(
    <Col> {singleArticle.map((article) => {
        return(
            <Card key = {article.id} className="mb-4">
            <Card.Img variant="top" src={article.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
              {article.summary}
              </Card.Text>
              <Card.Text>
              <small className="text-muted">Pubblicato il {new Date(article.published_at).toLocaleDateString()}</small>
            </Card.Text>
            <Link to={`/articles/${article.id}`}>
              <Button variant="primary">Leggi di più</Button>
            </Link>
            </Card.Body>
          </Card>
        )
    })}
   
    </Col>
)
}
export default SingleArticle