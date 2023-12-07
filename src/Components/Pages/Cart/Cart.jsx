import './styles.css';
import { useContext, useState } from "react";
import { useNavigate} from 'react-router-dom'
import { CartContext } from "../../../Context/CartContext";
import Item from "../../Item/Item";
import { Form } from 'react-bootstrap'
import { collection, getFirestore, addDoc, updateDoc, doc } from 'firebase/firestore';

const Cart = () => {
    const [formValue, setFormValue] = useState({name:'', phone:'', email:'',});
    const { products, clear, removeItem } = useContext(CartContext);
    const navigate = useNavigate();
    const db = getFirestore();
    const handleInput = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value});
    };

    const validateForm = formValue.name === '' || formValue.phone === ''|| formValue.email === '';

    const createOrder = (event) => {
        event.preventDefault();
        const querySnapshot = collection(db, 'orders');
        
        const newOrder = {
            buyer: formValue,
            items: products.map((item) => {
                return{
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity,
                    id: item.id
                }
            }),
            date: new Date(),
            total: products.reduce((acc, curr) => acc + curr.quantity * curr.price , 0)
        };
        addDoc(querySnapshot, newOrder)
        .then((res) => {
            updateProductStock();
            alert(`Orden creada con exito. ID: ${res.id}`);
            clear();
            navigate('/')
        })
        .catch((err) => alert('Error al crear la orden'));
    };

        const updateProductStock = () => {
            products.forEach(product => {
            const querySnapshot = doc(db, 'Items', product.id);
            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            });
            });
        }

    return (
        <div>
            <h1>Carrito</h1>
            <button onClick={clear}>Vaciar carrito</button>
            <Form className='form'>
                <Form.Group className='mb-3 formulario'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text' placeholder='Ingresa tu nombre' value={formValue.name} onChange={handleInput} name='name'/>
                </Form.Group>
                <Form.Group className='mb-3 formulario'>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type='text' placeholder='Ingresa tu telefono' value={formValue.phone} onChange={handleInput} name='phone'/>
                </Form.Group>
                <Form.Group className='mb-3 formulario'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' placeholder='Ingresa tu email' value={formValue.email} onChange={handleInput} name='email'/>
                </Form.Group>
                <button onClick={createOrder} className='confirmar' type='submit' disabled={validateForm}>Confirmar compra</button>
            </Form>

            {products.length > 0 ? 
            <div className="cart-list-container">
                {products.map((item) => {
                return (
                    <div key={item.id}>
                        <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        />
                        <h5>Cantidad: {item.quantity}</h5>
                        <div className='button'><button onClick={() => removeItem(item.id)}>Eliminar</button></div>
                    </div>
                    );
            })}
        </div> : <h2>No hay productos en el carrito</h2>    
        }
        </div>
    );
};

export default Cart;