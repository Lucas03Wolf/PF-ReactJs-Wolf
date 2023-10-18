import './styles.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <div className="navBar-container">
            <div>
                <img alt="apple" src={'./Apple-logo.png'} width={'100px'}/>
            </div>
            <div>
                <ul className='navBar-list'>
                    <li><button className='category-button'>Iphone</button></li>
                    <li><button className='category-button'>Mac</button></li>
                    <li><button className='category-button'>Ipad</button></li>
                    <li><button className='category-button'>Airpods</button></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    );
};

export default Navbar;