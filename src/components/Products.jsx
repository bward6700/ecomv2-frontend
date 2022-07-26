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



const Products = () => {
  
  const [products,showProducts] = useState ([]);

  useEffect(() => {
		axios.get('https://ecomv2.herokuapp.com/products/').then(
			(response) => {
				showProducts(response.data);
			}
		);
	}, []);
  
  return (

    <div className='shop' id='shop'>
    <Container>
        {products.map((item)=>(
            <Product item ={item} key={item.id}/>

        ))}
    </Container>
    </div>
  )
}

export default Products