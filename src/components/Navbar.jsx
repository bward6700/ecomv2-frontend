import { Search, ShoppingBasketRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import vlogo from '../images/logo1.png'
import {mobile} from '../responsive'
import { useState } from 'react'
import { tablet } from '../responsive'

const Container = styled.div`
    height: 60px;
    padding-bottom: 100px;
    position:sticky;
    top:0;
    z-index:1;
    background-color:lightgray;
    ${mobile({height:"50px"})}
    ${tablet({height:"100px",marginBottom:"100px"})}
`
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    position:sticky;
    ${mobile({padding:"10px 0px"})}
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
// const Language = styled.span`
//     font-size: 14px;
//     cursor:pointer;
// `

// const SearchContainer = styled.div`
//     border:0.5px solid lightgray;
//     display:flex;
//     align-items:center;
//     margin-left:25px;
//     padding:5px;
// `

// const Input = styled.input`
//     border:none;
// `


const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.img.attrs({
  src: `${vlogo}`
})`
width: 200px;
height: 200px;

${mobile({
  marginLeft:"85px"
})}

`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:space-between;
    justify-content:flex-end;
    cursor:pointer;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
    text-style:none;
    text-decoration:none;
    color:black;
    &:hover{
      text-decoration:underline;
  }
  ${mobile({display:"none"})}
  ${tablet({fontSize:"30px"})}
`

const Navbar = () => {
   const [setClick] = useState(false)
  const closeMenu = () => setClick(false)
  
  
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo/>
        <MenuItem>
        <a href='#slide' onClick={closeMenu}>Home</a>
        </MenuItem>
        <MenuItem>
        <a href='#about' onClick={closeMenu}>About</a>
        </MenuItem>
        <MenuItem>
        <a href='#shop' onClick={closeMenu}>Shop</a>
        </MenuItem>
        <MenuItem>
        <a href='#contact' onClick={closeMenu}>Contact</a>
        </MenuItem>         
          </Left>
        <Center></Center>
        <Right>
          <Search/>
          <ShoppingBasketRounded/>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar