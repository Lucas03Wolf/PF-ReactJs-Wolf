import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './styles.css';
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    const fetchProducts = () => {
        const db = getFirestore();
        const productsQuery = collection(db, 'Items');
        const querySnapshot = !categoryId ? productsQuery : query(productsQuery, where('category', '==', categoryId));
        
        getDocs(querySnapshot)
        .then((response) => {    
            const products = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setItems(products);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    return (
        <div className="item-list-container">
        {items.map((item) => {
            return (
            <Link to={'/item/' + item.id}  key={item.id} className="item-list">
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