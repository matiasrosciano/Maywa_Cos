import React from 'react'
import Product from './Product'
import './ProductList.css'
import { Row } from 'react-bootstrap'


const productlist = (props) => (
  <Row className="Product-list">
    {
    props.products.map(product => (
      
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        type={product.type}
        poster={product.poster}
        categories={product.categories}
        amount={product.amount}
        inCart={product.inCart}
      />
      ))
    }
  </Row>
)

export default productlist