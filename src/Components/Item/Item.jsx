import './styles.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const Item = ({ title, description, price, image, quantity, id}) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div className='card-container'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h4>${price}</h4>
            {quantity ? <h5>Cantidad: {quantity}</h5> : ''}
            {quantity ? <button onClick={() => removeItem(id)}>Eliminar</button> : ''}
        </div>
    );
};

export default Item;