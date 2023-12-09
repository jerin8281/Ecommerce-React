
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
flex: 1;
height: 70vh;
width: 100vw;
margin: 3px;
position: relative;
`



const Image=styled.img`
height:100%;
width: 100%;
object-fit: cover;

`

const DataContainer=styled.div`
position:absolute;
top:0;
left:0;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Title=styled.h1`
color:white;
font-weight:bold;
margin-bottom:20px;`

const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
`

function Category({item}) {
  return (
    <Container>
        
            <Image src={item.img}></Image>
       
        <DataContainer>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </DataContainer>
    </Container>
  )
}

export default Category
