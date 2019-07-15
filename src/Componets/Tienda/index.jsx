import React, { Component } from 'react'
import ProductsList from './ProductList'
import {ProductConsumer} from './../../context'
import { Row, Col } from 'react-bootstrap'
import './styles.css'

class Tienda extends Component {
 render(){
  return(       
   <section className="store">
    <div className="title-container">
      <h2 className="title store-title">Nuestros Productos</h2>
    </div>
    <Row style={{marginTop: '3rem'}}>
      <Col lg={3} xs={12}>
        Crear Busquedas y filtros.
      </Col>
      <Col style={{height: 'auto'}}>
      <ProductConsumer>
        {
          value =>{
            return (<ProductsList 
              products={value.products}/>
            )
          }
        }        
      </ProductConsumer>  
      </Col>
    </Row>    
  </section>    
  )
 }
}

export default Tienda