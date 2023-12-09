import React from 'react'
import Category from './Category'
import { categories } from '../data'
import styled from 'styled-components'

const Container=styled.div`
   display:flex;
   padding:20px;`
 


function Categories() {
  return (
    <Container>
        {categories.map((item)=>{
            return(
        <Category item={item}></Category>
        )})}
    </Container>
  )
}

export default Categories
