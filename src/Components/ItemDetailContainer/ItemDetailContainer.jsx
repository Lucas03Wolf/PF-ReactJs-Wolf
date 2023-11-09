import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemSelected, setItemSelected] = useState(null);
    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((producto) => setItemSelected(producto))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProduct();
    }, []);
    
    return (
        <div>
            {id && (
            <div className="item-detail-container">
                <ItemDetail itemSelected={itemSelected} />
            </div>
        )}
        </div>
    );
};

export default ItemDetailContainer;