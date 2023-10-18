import './styles.css';
import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return(
        <div>
            <Icon.Bag />
            <div className='i   conCartView'>
                <span>7</span>
            </div>
        </div>
    )
};

export default CartWidget 
