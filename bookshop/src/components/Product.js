import "./product.css";
import { KattContext } from "../context/KattContext"
import { useContext } from "react";
export default function Product(props) {
  const {click}=useContext(KattContext)

  return (
    <div className="product">
      <img src={props.book.image} alt={props.book.title} />
      <div className="product-content">
        <h3>{props.book.title}</h3>
        <p>{props.book.blurb}</p>
        <p className="price">{props.book.price}$</p>
        <button
          onClick={() => {
            click(props.index);
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}