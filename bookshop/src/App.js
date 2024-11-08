import "./App.css";

import Products from "./components/Products.js";
import { useContext } from "react";
import Cart from "./components/Cart.js";
import navList from "./components/navList.js";
import NavBar from "./components/NavBar.js";
import { KattContext } from "./context/KattContext.js";

function App() {
  const nav = navList;
  const { sumPrice, bookListClone, buyList } = useContext(KattContext);

  return (
    <div className="App">
      <header className="App-header">
        <a href="index.js">
          <h2>Pages & Co.</h2>
        </a>
        <nav>
          <NavBar list={nav} />
        </nav>
      </header>
      <article>
        <div className="products">
          <Products list={bookListClone} />
        </div>
        <div className={`cart`}>
          <Cart list={buyList} sum={sumPrice(buyList)} />
        </div>
      </article>
    </div>
  );
}

export default App;
