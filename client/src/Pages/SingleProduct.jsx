import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
import Footer from '../Components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'

const Container=styled.div``

const Wrapper=styled.div`
display:flex;
`

const ImageContainer=styled.div`
flex:1;
padding:40px`

const Image=styled.img`
height:90vh;
object-fit:cover;
width:100%`

const InfoContainer=styled.div`
flex:1;
padding-top:40px;
padding-right:40px`

const Info=styled.div``

const Title=styled.div`
font-size: 40px;
font-weight: 200;`

const Desc=styled.div`
margin:20px 0px;
font-weight: 500;`

const Price=styled.div`
font-size: 40px;`

const SelectContainer=styled.div`
display:flex;
justify-content: space-between;
width:50%;
margin-top:20px`

const ColorContainer=styled.div`
display: flex;
font-size: 20px;`

const Color=styled.div`
height: 20px;
width: 20px;
border-radius:50%;
background-color:${props=>props.bg};
margin-left: 10px;
cursor: pointer;`

const Selection=styled.div`
font-size: 20px;`

const Select=styled.select`
margin-left:10px;
height:20px;`

const Option=styled.option``

const CartSection=styled.div`
display: flex;
justify-content: space-between;
width: 50%;
padding-top: 40px;
cursor:pointer`

const Button=styled.button`
cursor:pointer;
border: 2px solid teal;
padding: 15px;
border-color:white;
font-weight: 500;

&:hover{
  border-color: #ede9e9;
}`

const Number=styled.div`
display: flex;
justify-content: center;
align-items:center;
font-weight:700;`

const Count=styled.div`
border:1px solid teal;
width: 30px;
height: 30px;
border-radius:10px;
display: flex;
justify-content: center;
align-items:center;
margin:0 10px;`





function SingleProduct() {
  return (
    <Container>
    
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <ImageContainer>
            <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'></Image>
        </ImageContainer>
        <InfoContainer>
            <Info>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                <Price>Rs 900</Price>
            </Info>
            <SelectContainer>
        <ColorContainer>Color<Color bg='black'/><Color bg='blue'/><Color bg='grey'/></ColorContainer>
        <Selection>Size
        <Select>
        <Option>XL</Option>
        <Option>L</Option>
        <Option>M</Option>
        <Option>S</Option>
        <Option>XS</Option>
        </Select>
        </Selection>
        </SelectContainer>
        <CartSection>
        <Number>
        <Remove/><Count>1</Count><Add/>
        </Number>
        <Button>ADD TO CART</Button>
        </CartSection>
        </InfoContainer>
        
    </Wrapper>
    <News/>
    <Footer/>
    </Container>
  )
}

export default SingleProduct
