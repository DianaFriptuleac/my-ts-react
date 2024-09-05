import { useEffect, useState } from "react"
import { Col,Card } from "react-bootstrap"
import AboutArticles from "../details/interfaces"

const SingleArticle = () =>{
const URL = 'https://api.spaceflightnewsapi.net/v4/articles'


const [singleArticle, setSingleArticle] = useState<AboutArticles[]>([])
const myfettch = () =>{
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
        setSingleArticle(arrayOfArticle)
    })
    .catch((err) =>{
        console.log(err)
    })
}
useEffect(() => {
    myfettch()
}, [])


return(
    <Col> {singleArticle.map((a) => {
        return(
            <Card key = {a.id}>
            <Card.Img variant="top" src={a.image_url} />
            <Card.Body>
              <Card.Title>{a.title}</Card.Title>
              <Card.Text>
              {a.summary}
              </Card.Text>
              <Card.Text>
              {a.published_at}
              </Card.Text>
              <Card.Text>
              {a.updated_at}
              </Card.Text>
              <Card.Text>
              {a.url}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    })}
   
    </Col>
)
}
export default SingleArticle