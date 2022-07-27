import { EmailRounded, Facebook, HomeRounded, Instagram, LocalPhone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import vlogo from '../images/logo1.png'
import { tablet } from '../responsive'
import { mobile } from '../responsive'

const Container = styled.div`
display:flex;

${mobile({flexDirection:"column", backgroundColor:"lightgray"})}
${tablet({backgroundColor:"lightgray"})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Center = styled.div`
flex:1;
padding:20px;
`
const Right = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-direction:column;
flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
    }
`

const Logo = styled.img.attrs({
    src: `${vlogo}`
  })`
  width: 200px;
  height: 200px;

  ${mobile({display:"none"})}
  `;

const SocialContainer = styled.div`
display:flex;
`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo/>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Adresses</Title>
            <ContactItem>
                <HomeRounded style={{marginRight:'10px'}}/> 1234 Vinyl Way, Charlote NC 12345
            </ContactItem>
            <ContactItem>
                <LocalPhone style={{marginRight:'10px'}}/> +1 123-456-7890
            </ContactItem>
            <ContactItem>
                <EmailRounded style={{marginRight:'10px'}}/> Bward@r2hstudent.org
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer