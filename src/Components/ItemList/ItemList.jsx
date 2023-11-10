import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './styles.css';
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();


    const fetchProducts = async() => {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        if(categoryId){
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            setItems(filteredProducts);
        } else {
            setItems(products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);
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