import { Business, Facebook, Instagram, LocalPhone, LocationOn, Mail, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex`

const Left=styled.div`
flex:1;
padding:20px;
`

const Logo=styled.h4``

const Description=styled.p`
margin:20px 0`

const SocialContainer=styled.div`

display:flex;
`

const SocialIcons=styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color:#${props=>props.bg};
display:flex;
justify-content:center;
align-items:center;
margin:10px;
color:white`

const Center=styled.div`
flex:1;
padding:20px`

const Title=styled.h3`
margin-bottom:30px`

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display: flex;
flex-wrap:wrap`

const ListItem=styled.li`
width:50%;
margin-bottom:10px`

const Right=styled.div`
flex:1;
padding:20px;`

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center`

const Payment=styled.img`
width:50%`

function Footer() {
  return (
    <Container>
        <Left>
        <Logo>OCART</Logo>
        <Description>Lorem ipsum dolor sit amet, consectetur<br></br>
         adipiscing elit, sed do eiusmod tempor incididunt ut <br></br> 
         et dolore magna aliqua. Ut enim ad minim veniam, quis  <br></br>
         ullamco laboris nisi ut aliquip ex ea.
          
        mollit anim id est laborum.</Description>
        <SocialContainer>
            <SocialIcons bg='3B5999'>
            <Facebook ></Facebook>
            </SocialIcons>
            <SocialIcons bg='E4405f'>
            <Instagram></Instagram>
            </SocialIcons>
            <SocialIcons bg='55ACEE'>
            <Twitter></Twitter>
            </SocialIcons>
        </SocialContainer>
        </Left>
        <Center>
        <Title>Usefull Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashiom</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        
        </List>
        </Center>
        <Right>
        <Title> Contact</Title>
        <ContactItem><LocationOn style={{marginRight:'10px'}}></LocationOn> Bengaluru,Karnataka,India</ContactItem>
        <ContactItem><LocalPhone style={{marginRight:'10px'}}></LocalPhone>9876543210</ContactItem>
        <ContactItem><Mail style={{marginRight:'10px'}}></Mail> mail@ocart.com</ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'></Payment>
        </Right>
        
    </Container>
  )
}

export default Footer
