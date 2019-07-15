import React from 'react' 
import { Card, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import { Col } from 'react-bootstrap'


const Product = (props) => {

  return ( 
  <Col xl="3" lg="4" xs="6">
      <Card className="Card" style={{ width: '12rem', display: 'inline-flex', justifyContent: '', margin: '0.5em', height:'auto'}}>
        <Card.Img className="Card-image" variant="top" src={props.poster} />        
        <Card.Title className="ProductTitle">
          {props.type}
        </Card.Title>
        <Card.Subtitle className="ProductSubTitle text-muted">
          {props.name}
        </Card.Subtitle>
        <Card.Body style={{padding: '0 0 0 0.3em'}}>        
        <Card.Text style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span className="Price">${props.amount}</span>
          <Button className="Btn-shop"
            variant="outline-primary"
            disabled={props.inCart?true:false}
            onClick={()=> console.log("Agregar")}
            style={{borderRadius: '10px 10px 25px 10px'}}
            >              
              <i className="fas fa-cart-plus"/>
          </Button>          
        </Card.Text>        
        </Card.Body>      
      </Card>      
  </Col>
  )
}

export default Product