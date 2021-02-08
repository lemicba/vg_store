import { useContext, useState } from 'react';
import { Store } from '../../store';
import {  handleFirebase, getFirestore } from '../../firebase';
import './styles.scss';

const CartCheckout = () => {
    const [data, setData] = useContext(Store);
    const [status, setStatus] =useState(false);
    const db = getFirestore();

    const firebase = handleFirebase();

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel:'',
    })
    const [idCompra, setIdCompra ] = useState('');
    
    const changeInput = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    
    const venta = {
        buyer: formData,
        items: data.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const submbitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').add(venta)
        .then(({id}) => {
            setStatus(true)
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

  return (
    <section>
        <h2 className="cartCheck">Checkout</h2>
        {
            !status ?
        <form className="cart-chechout__form" onSubmit={submbitForm}>
            <input type="text" value={formData.nombre}  onChange={changeInput} name="nombre" placeholder="Nombre"/>
            <input type="text" value={formData.apellido} onChange={changeInput} name="apellido" placeholder="Apellido"/>
            <input type="email" value={formData.email}  onChange={changeInput} name="email" placeholder="Email"/>
            <input type="text" value={formData.tel} onChange={changeInput} name="tel" placeholder="Telefono"/>

            <button>Pagar</button>
        </form> :
        <p className="cartCheck__msj">La compra se generó correctamente su numero de seguimiento es : ${idCompra} </p>
        }
    </section>
  );
};

export default CartCheckout;