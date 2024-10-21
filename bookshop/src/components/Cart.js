import CartItem from "./CartItem";

export default function Cart(props) {
  function del(data){
    props.del(data)
}
  const listLenght=props.list.length
  let hideClass=""
    if ( listLenght === 0) {
        return <p>Your cart is empty 🛒 </p>
      }
    if(listLenght>=15){
      hideClass="hide"

    }

  return (
    <>
      {props.list.map((book, i) => {
        return <CartItem className={hideClass} book={book} index={i} key={i} del={del}/>
      })}
      <h3>Total:  {props.sum}$</h3>
    </>
  );
}