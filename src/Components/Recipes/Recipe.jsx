import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Recipe.css'
import { useNavigate } from 'react-router-dom';

const Recipe = ({singleRecipie})=>{
  // console.log(singleRecipie)
  const navigate = useNavigate()
  // console.log(navigate, 'navigate')
  return(
    <div>
      <Card >
      <Card.Img  variant="top" src={singleRecipie.image} />
      <Card.Body>
        <Card.Title>{singleRecipie.name}</Card.Title>
        <Card.Text>
          {singleRecipie.cuisine}
        </Card.Text>
        <Button className="bg-info text-white" onClick={()=>{navigate(`/recipes/${singleRecipie.id}`)}}>More Details</Button>
      </Card.Body>
      </Card>
    </div>
  )
}
export default Recipe 

