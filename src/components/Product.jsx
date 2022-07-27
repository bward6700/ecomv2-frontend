import { FavoriteBorderRounded, ShoppingBasketRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background:color:rgba(0,0,0,0.2);
display:flex;
flex-direction:row;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center
justify-content:center;
border:1px solid black;
position:relative;

`

const Image = styled.img`
height:80%;     

`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
cursor:pointer;

&:hover{
    background-color:teal;
    transform:scale(1.2);
}
`
const Title = styled.h2`
font-size:15px;
font-weight:600px;
text-decoration:underline;
`
const Desc = styled.h3`
font-size:12px;
`
const Price = styled.h2`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
`
const InfoContainer = styled.div`
display:flex;
flex-direction:column;
`

const Product = ({item}) => {
  return (
    <Container>
        <InfoContainer>
        <Image src ={item.img}/>
        <Title>{item.title}</Title>
        <Desc>{item.descr}</Desc>
        <Price>{item.price}</Price>
        </InfoContainer>
        <Info>
            <Icon>
                <ShoppingBasketRounded/>
            </Icon>
            <Icon>
                <FavoriteBorderRounded/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product