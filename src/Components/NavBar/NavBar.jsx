import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navBar-container">
            <div>
                <Link to={'/'}>
                    <img alt="apple" src={'./Apple-logo.png'} width={'100px'}/>
                </Link>
            </div>
            <div>
                <ul className='navBar-list'>
                    <li><Link to={'/category/electronics'} className='category-button'>Iphone</Link></li>
                    <li><Link to={'/category/jewelery'} className='category-button'>Mac</Link></li>
                    <li><Link to={'/category/mens`-clothing'} className='category-button'>Ipad</Link></li>
                    <li><Link to={'/category/women`s-clothing'} className='category-button'>Airpods</Link></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    );
};

export default Navbar;