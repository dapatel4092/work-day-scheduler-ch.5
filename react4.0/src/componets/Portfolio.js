import { useState } from "react";
import projectsData from "./projects.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Portfolio = () => {
    const [projects]=useState(projectsData)
    return(<>
    <Row xs={1} md={2} className="g-4">
    {projects.map((projectElement,key) => 
   
   <Col key={key}>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + projectElement.image} />
          <Card.Body>
            <Card.Title>{projectElement.title}</Card.Title>
            <Card.Text>
             {projectElement.description}
            </Card.Text>
            <Card.Footer>
            <Button variant="primary"><a className="text-white" href={projectElement.live}>Deployment</a></Button>
            <Button variant="primary"><a className="text-white" href={projectElement.github}>Github</a></Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      )
    }
    </Row>
    
   
   
    </>)
}
export default Portfolio;