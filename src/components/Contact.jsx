import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
color:white;
font-size:70px;
margin-bottom:20px;

${mobile({fontSize:"50px"})}
`
const InputContainer = styled.div`
background: white;
display: flex;
flex-direction: column;
padding: 2vw 4vw;
width: 90%;
max-width: 600px;
border-radius: 10px;
`
const Input = styled.input`
border:1px solid black;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: white;
    font-size: 16px;
    border-radius:10px;
`
const Textarea = styled.textarea`
border: 0;
margin: 10px 0;
padding: 20px;
outline: none;
background: white;
font-size: 16px;
border:1px solid black;
border-radius:10px;
`
const Button = styled.button`
padding: 15px;
background: black;
color: white;
font-size: 18px;
border: 0;
outline: none;
cursor: pointer;
width: 150px;
margin: 20px auto 0;
border-radius: 30px;
`


const Contact = () => {
  return (

    <div className='contact' id='contact'>
    <Container>
        <Title>Contact Us</Title>
        <InputContainer>
            <Input type="text" placeholder='Name'/>
            <Input type='email'placeholder='Email'/>
            <Input placeholder='Phone Number'/>
            <Textarea placeholder='Message'/>
            <Button>
                Send
            </Button>
        </InputContainer>
    </Container>
    </div>
  )
}

export default Contact