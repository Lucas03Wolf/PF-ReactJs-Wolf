import './styles.css';
import * as Icon from 'react-bootstrap-icons';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {productQuantity} = useContext(CartContext) 
    return(
        <div className='iconCartView'>
            <Icon.Bag className='icon'/>
                <span>{productQuantity}</span>
        </div>
    )
};

export default CartWidget 
