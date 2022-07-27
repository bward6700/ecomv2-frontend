import { AlbumRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { About } from '../data'
import { tablet } from '../responsive'
import { mobile } from '../responsive'

const Container = styled.div`
height:300px;
width: 80%;
margin: auto;
text-align: center;
padding-top: 50px;
padding-bottom: 150px;
border:5px solid black; 
margin-bottom:200px; 
${mobile({marginBottom:"200px", marginTop:"100px"})}
${tablet({paddingTop:"0px"})}
`
const InfoContainer = styled.div`
height:300px;
`
const Title = styled.h1`
font-size:40px;
text-align:center;
text-decoration:underline;
margin-top:80px;
margin-bottom:30px;

${mobile({fontSize:'25px', marginTop:'25px'})}
`
const Desc = styled.p`
font-size:25px;
text-align:center
color:AAAAAA;

${mobile({fontSize:'15px'})}
`
const Line = styled.h1`
font-size:30px;
text-align:center;
margin-top:30px;
`

const AboutUs = () => {
  return (
   
    <div className='about' id='about'>
   <Container>
    {About.map((item) =>(
    <InfoContainer>
    <Title>{item.title}</Title>
    <Desc>{item.desc}</Desc>
    <Line>{item.line} <AlbumRounded/></Line>
    </InfoContainer>
        ))}
    </Container>
    </div>
  )
}

export default AboutUs