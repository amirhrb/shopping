import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//function
import { shortner, checkCount} from '../../helper/functions'

//styles
import styles from '../styles/CartItem.module.css'

//contexts
import { CartContext } from '../../contexts/CartProvider';

//icons
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import priceTag from '../../assets/icons/price-tag.svg'
import trash from '../../assets/icons/trash-can-solid.svg';




const CartItem = ({data}) => {
    const {state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.itemDiv}>
            
            <Link to={`/store/details/${data.id}`}>
                <img src={data.image} alt="product-pic"/>
            </Link>
            <h4>{shortner(data.title)}</h4> 

            <div className={styles.buyBox}>
                <p>{data.price}</p>
                <img src={priceTag} alt='$'/>
                <div>
                <button onClick={()=>dispatch({type:"INCREASE",payload:data})} >
                    <img src={plus} alt='plus' />
                </button>
                <span>{checkCount(state,data.id)}</span>
                {
                (checkCount(state,data.id)===1) ?
                <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:data})}>
                    <img src={trash} alt='trash' className={styles.trash}/> 
                </button>
                :
                <button onClick={()=>dispatch({type:"DECREASE",payload:data})} >
                    <img src={minus} alt='minus' />
                </button>
                }
                </div>
                
            </div>
        </div>
    );
};

export default CartItem;