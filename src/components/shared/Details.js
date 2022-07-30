import React, { useContext , useState , useEffect } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';


//contexts
import {ProductContext} from '../../contexts/ProductProvider'

//styles
import styles from '../styles/Details.module.css'

//image
import NotFoundImg from '../../images/page-not-found.png'

const Div = styled.div`
    @media (min-width:640px){
        margin-top:100px;     
    }
    ${props => (props.checkedItem) ? '' : 'text-align:center;' }
    margin-top:70px;
    margin-left:10px;
    margin-right:10px
`

const Details = (props) => {
    const [checkedItem , setItem] = useState(null)

    const data = useContext(ProductContext)
    const id = Number(props.match.params.id)
    
    useEffect(()=>{
        if(data.find(item=>item.id===id))setItem(data.find(item=>item.id===id))
        // console.log(checkedItem)
    },[checkedItem, data , id])

    return (
        <Div checkedItem={checkedItem}>
            {
                checkedItem ?
                <>
                    <img src={checkedItem.image} alt='detail img' className={styles.image}/>
                    <h3>{checkedItem.title}</h3>
                    <br />
                    <p>{checkedItem.description}</p>
                    <br />
                    <span>{checkedItem.price}$  </span>
                    <button className={styles.button}>Buy</button>
                    <br />
                    <Link to='/store'>back store</Link>
                </>
                :
                <img src={NotFoundImg} alt='not found!' style={{width:"250px"}}/>
            
            }
        </Div>
    );
};

export default Details;