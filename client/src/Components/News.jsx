import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;
`
const Title=styled.h1`
margin-bottom:20px;
font-size:70px;
`

const Description=styled.div`
margin-bottom:20px;
font-size:24px;
font-weight:300`

const InputSection=styled.div`
background-color:white;
border:1px solid lightgreen;
width:50%;
display:flex;
justify-content:space-between;
height:40px`


const Input=styled.input`
flex:8;
border:none;
padding-left:20px;`

const Button=styled.button`
flex:1;
background-color:teal;
color:white;
border:none`

function News() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products</Description>
        <InputSection>
        <Input placeholder='Your email'></Input>
        <Button>
            <Send></Send>
        </Button>
        </InputSection>
    </Container>
  )
}

export default News