import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { vinylProducts } from '../data'
import Product from './Product'
import axios from 'axios'


const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    jusify-content:space-between;
`
const FilterContainer = styled.div`
magin-left:30px;
padding-left:30px;


`

const Title = styled.h1`
display:flex;
align-items:center;
justify-content:center;
text-decoration:underline;
`



const Products = () => {

  const [products, showProducts] = useState([]);

  useEffect(() => {
    axios.get('https://ecomv2.herokuapp.com/products/').then(
      (response) => {
        showProducts(response.data);
      }
    );
  }, []);

  const Fillylow = () => {
    axios.get('https://ecomv2.herokuapp.com/titlelowtohigh').then(
      (response) => {
        showProducts(response.data);
      }
    );
  }

  const Fillyhigh = () => {
    axios.get('https://ecomv2.herokuapp.com/titlehightolow').then(
      (response) => {
        showProducts(response.data);
      }
    );
  }

  const Fillyselect = () => {
    axios.get('https://ecomv2.herokuapp.com/products/').then(
      (response) => {
        showProducts(response.data);
      }
    );
  };

  const filly2 = (param) => {
    if (param.target.value === 'low') {
      Fillylow()
    }
    if (param.target.value === 'high') {
      Fillyhigh()
    }
    if (param.target.value === 'select') {
      Fillyselect()
    }

  }

  return (

    <div className='shop' id='shop'>
      <Title>Shop</Title>
      <FilterContainer>
        <label for="cars">Sort:</label>

        <select name="cars" onChange={filly2}>
          <option value="select">Select</option>
          <option value="low">A-Z</option>
          <option value="high">Z-A</option>

        </select>
      </FilterContainer>
      <Container>
        {products.map((item) => (
          <Product item={item} key={item.id} />

        ))}
      </Container>
    </div>
  )
}

export default Products