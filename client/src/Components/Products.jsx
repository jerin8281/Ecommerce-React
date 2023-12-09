import React from 'react'
import Product from './Product'
import { popularProducts } from '../data'
import styled from 'styled-components'

const Container=styled.div`
padding: 20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between`

function Products() {
  return (
    <Container>
        {popularProducts.map((item)=>{
            return(

         
        <Product item={item}></Product>
        )
    })}
    </Container>
  )
}

export default Products
