import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
        height:30px;
        background-color:black;
        color:white;
        display:flex;
        alight-items:center;
        justify-content:center;
        font-size:16px;
        font-weight:bolder;
        margin-top:0px;
        ${mobile({fontSize:"25px"})}
`

const Announcement = () => {
  return (
    <Container>
        VISION VINYLS
    </Container>
  )
}

export default Announcement