import { useContext, useState } from 'react';
import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ itemSelected }) => {
    const [count, setCount] = useState(1);
    const stock = itemSelected?.stock;
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);

    const addToCart = () => {
        addItem(itemSelected, count)
    };
    const handleNavigation = () => {
        navigate('/cart');
    };

    return (
        <div>
            <h6 className='card-title'>{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70}/>
            <div className='card-description'>
                <p>{itemSelected?.description}</p>
            </div>
            <span>Stock: {stock}</span>
            <p>${itemSelected?.price}</p>
            <div>
                <button onClick={handleNavigation}>Terminar mi compra</button>
                <button onClick={addToCart}>Agregar al carrito</button>
                <ItemCount count={count} setCount={setCount} stock={stock}/>
            </div>
        </div>
    );
};

export default ItemDetail;