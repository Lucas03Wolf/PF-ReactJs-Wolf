import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navBar-container">
            <div>
                <Link to={'/'}>
                    <img alt="apple" src={'/Apple-logo.png'} width={'100px'}/>
                </Link>
            </div>
            <div>
                <ul className='navBar-list'>
                    <li><Link to={'/category/Iphone'} className='category-button'>Iphone</Link></li>
                    <li><Link to={'/category/Mac'} className='category-button'>Mac</Link></li>
                    <li><Link to={'/category/Ipad'} className='category-button'>Ipad</Link></li>
                    <li><Link to={'/category/Airpods'} className='category-button'>Airpods</Link></li>
                </ul>
            </div>
            <Link to={'/cart'} className='cartWidget'><CartWidget /></Link>
        </div>
    );
};

export default Navbar;