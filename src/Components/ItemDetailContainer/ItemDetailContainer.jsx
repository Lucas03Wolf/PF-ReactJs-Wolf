import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);
    const { id } = useParams();

    const fetchProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, 'Items', id);

        getDoc(querySnapshot)
        .then((res) => {setItemSelected({ id: res.id, ...res.data() })})
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