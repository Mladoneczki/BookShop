import './cartItem.css'
export default function CartItem(props) {
    function del(){
        console.log("product", props.index)
        props.del(props.index)
    }
return(
    <div className={`cartItem ${props.className}`}>
        <img src={props.book.image} alt={props.book.title} />
        <h3>{props.book.title}</h3>
        <p>{props.book.price}$</p>
        <button onClick={()=>{del()}}>X</button>
    </div>
)};