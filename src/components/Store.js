import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


//components
import Product from './shared/Product'

//context
import {ProductContext} from '../contexts/ProductProvider'
import {CartContext} from '../contexts/CartProvider'

//icons
import store from '../assets/icons/store.svg'

//styles
import styles from '../components/styles/Store.module.css'

const Div=styled.div`
    @media (min-width:640px){
        margin-top:100px;     
    }
    margin-top:70px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const Products = () =>{
    const data= useContext(ProductContext) 
    const {state} = useContext(CartContext)
    // useEffect(()=>{
    // },[])
    // console.log(data)
    
        return (
            <>
            <Div>
                <Link to="/store/cart" className={styles.bag}>
                <img src={store} alt="bag" />
                {
                (state.inCartItems.length) ?
                <span>{state.countItems}</span>
                :
                ""
                }
                </Link>
                {
                (data.length) ?
                data.map(item=>
                    <Product data={item} key={item.id}/>
                )
                :
                // (data.length) ?
                // <p>network Error</p>
                // :
                <p>Loading...</p>
                }
            </Div>
            </>
        );
}

export default Products;