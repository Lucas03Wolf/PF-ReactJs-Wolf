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
        <div className='item-detail'>
            <h6 className='card-title'>{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70}/>
            <div className='card-description'>
                <p>{itemSelected?.description}</p>
            </div>
            <span className='stock'>Stock: {stock}</span>
            <p className='price'>${itemSelected?.price}</p>
            <div>
                <ItemCount count={count} setCount={setCount} stock={stock}/>
                <div className='item-detail-button'>
                    <button onClick={addToCart}>Agregar al carrito</button>
                    <button onClick={handleNavigation}>Terminar mi compra</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;