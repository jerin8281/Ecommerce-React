import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url('https://livetechspot.com/wp-content/uploads/2020/07/Complete-Guide-List-on-How-to-Optimize-E-commerce-Website.jpg') center ;
display: flex;
align-items: center;
justify-content: center;
background-size:cover;
`

const Wrapper=styled.div`
width:40%;
background-color:white;
padding: 20px;`

const Title=styled.h1`
font-size: 24px;
font-weight: 300;`

const Form=styled.form`
display: flex;
flex-wrap:wrap`

const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px`

const Agreement=styled.span`
font-size: 12px;
margin:20px 0px`

const Button=styled.button`
width: 40%;
padding:15px 10px;
border:none;
background-color:teal;
color:white;
cursor:pointer`

function Signup() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='First Name'></Input>
                <Input placeholder='Last Name'></Input>
                <Input placeholder='Username'></Input>
                <Input placeholder='Email'></Input>
                <Input placeholder='Password'></Input>
                <Input placeholder='Confirm Password'></Input>
                <Agreement>By creating an account , I consent to processing of my personal data in accorndance with <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Signup
