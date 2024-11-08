import { useContext } from 'react'
import './cartItem.css'
import { KattContext } from '../context/KattContext'
export default function CartItem(props) {
    const {del}=useContext(KattContext)
return(
    <div className={`cartItem ${props.className}`}>
        <img src={props.book.image} alt={props.book.title} />
        <h3>{props.book.title}</h3>
        <p>{props.book.price}$</p>
        <button onClick={()=>{del(props.index)}}>X</button>
    </div>
)};