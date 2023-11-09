import './styles.css'

const Item = ({ title, description, price, image}) => {
    return (
        <div className='card-container'>
            <h6>{title}</h6>
            <img src={image} alt={title} />
            <h3>{description}</h3>
            <h3>${price}</h3>
        </div>
    );
};

export default Item;