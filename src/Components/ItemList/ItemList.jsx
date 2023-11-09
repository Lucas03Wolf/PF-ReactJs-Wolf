import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './styles.css';
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    const fetchProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((json)=> setItems(json))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="item-list-container">
        {items.map((item) => {
            return (
            <Link to={'/item/' + item.id} key={item.id} className="item-list">
                <Item 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                image={item.image} 
                />
            </Link>
            );
        })}
        </div>
    );
};

export default ItemList;