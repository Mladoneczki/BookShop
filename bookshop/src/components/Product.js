import "./product.css";
export default function Product(props) {
  function click() {
    props.click(props.index);
  }

  return (
    <div className="product">
      <img src={props.book.image} alt={props.book.title} />
      <div className="product-content">
        <h3>{props.book.title}</h3>
        <p>{props.book.blurb}</p>
        <p className="price">{props.book.price}$</p>
        <button
          onClick={() => {
            click();
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}