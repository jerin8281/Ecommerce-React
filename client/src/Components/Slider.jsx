import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position: relative;
    
    overflow:hidden`

const Arrow =styled.div`
    height: 40px;
    width:40px;
    background-color: whitesmoke;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center ;
    position: absolute;
    left: ${props=> props.dir==='left'&& '10px'};
    right: ${props=> props.dir==='right'&& '10px'};;
    top: 0;
    bottom: 0;
    margin:auto;
    cursor: pointer;
    background: rgba(250, 249, 249, 0.5);
    z-index: 2;
    `
    

const Wrapper=styled.div`
    height:100%;
    transition: all 1.5s ease;
    display: flex;
    transform: translate(${(props)=>props.index*-100}vw);
    
    
    
    `
const Slide=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    
`

const ImageContainer=styled.div`
    height: 100%;
    flex:1;
    display: flex;
    justify-content: center;
    `

const DesContainer=styled.div`
    flex:1;
    padding:50px;`

const Image=styled.img`
    height:80%`


const Title=styled.h1`
font-size:70px;
`

const Description=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500px;
letter-spacing:3px`


const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor: pointer;`











function Slider() {
  const [index,setIndex]=useState(0);
  function handleArrow(direction){
      if(direction=='left'){
        setIndex(index>0?index-1:1)
      }else{
        setIndex(index<1?index+1:0)
      }
    }
  return (
    

   
    <Container>
    

        <Arrow dir='left' onClick={()=>handleArrow('left')}>
      <NavigateBefore></NavigateBefore>
      </Arrow>
        
      <Wrapper index={index}>
      {sliderItems.map((item)=>{
        return(
          
      
      <Slide  bg={item.bg}>
      <ImageContainer>
      <Image src={item.img}></Image>
      </ImageContainer>
      <DesContainer>
      <Title>{item.title}</Title>
      <Description>{item.desc}</Description>
      <Button>Shop Now</Button>
      </DesContainer>
      </Slide>)})}
      </Wrapper>
      <Arrow dir='right' onClick={()=>handleArrow('right')}>
      <NavigateNext></NavigateNext>
      </Arrow>
      
    </Container>
  )
}

export default Slider
