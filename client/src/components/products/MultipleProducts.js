import React from 'react'
import Product from './Product'
import { Row, Col } from 'react-bootstrap'

const MultipleProducts = ({ products }) => {
    return (
        <Row>
            {products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    )
}

export default MultipleProducts