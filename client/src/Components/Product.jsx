
import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'

const Info=styled.div`
opacity: 0;
height: 100%;
width:100%;
position: absolute;
top: 0;
left:0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.5);
transition: all 0.5s ease;
cursor: pointer;


`

const Container=styled.div`
flex:1;
height:350px;
min-width:280px;
margin:5px;
display: flex;
justify-content: center;
align-items: center;
background-color:#f5fbfd;
position:relative;

&:hover ${Info}{
    opacity: 1;
}`

const Image=styled.img`
height:75%;
`


const Icon=styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
transition: all 0.5s ease ;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}`


function Product({item}) {
  return (
    <Container>
        <Image src={item.img}>

        </Image>
        <Info>
        <Icon>
        <Search></Search>
        </Icon>
        <Icon>
        <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>
        <Icon>
        <FavoriteBorder></FavoriteBorder>

        </Icon>
        </Info>
    </Container>
  )
}

export default Product
