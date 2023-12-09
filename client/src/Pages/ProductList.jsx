import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import News from '../Components/News'
import Footer from '../Components/Footer'

const Container=styled.div``

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`

const Filters=styled.div`
margin:20px
`

const Filter=styled.span`
font-size:20px;
font-weight:600;
margin-right: 20px;`

const Title=styled.h1`
margin: 20px;`

const Select=styled.select`
padding: 10px;
margin-right: 20px;`

const Option=styled.option``


function ProductList() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filters>
                <Filter>Filter Products:</Filter>
                <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Red</Option>
                <Option>Yellow</Option>
                </Select>

                <Select>
                <Option disabled selected>Size</Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>S</Option>
                <Option>XM</Option>
                </Select>

                </Filters>
                <Filters>
                <Filter>Sort Products:</Filter>
                <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
                
                </Select>
                </Filters>
            
        </FilterContainer>
        <Products/>
        <News/>
        <Footer/>
    </Container>
  )
}

export default ProductList
