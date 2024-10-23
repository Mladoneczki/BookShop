import logo from "./logo.svg";
import "./App.css";

import Products from "./components/Products.js";
import { useState } from "react";
import Cart from "./components/Cart.js";
import konyvLista from "./components/konyvLista.js";
import {sumPrice, genFilter} from "./components/functions.js";
import navList from "./components/navList.js";
import NavBar from "./components/NavBar.js";

function App() {
  const nav=navList
  const bookList = konyvLista;
  const [bookListClone, setBookList]=useState(bookList);
  const [buyList, setList] = useState([]);

  function click(adat) {
    const cl = [...buyList];
    cl.push(bookList[adat]);
    setList(cl);
  }
  function del(data) {
    const clonL = [...buyList];
    clonL.splice(data, 1);
    setList(clonL);
  }
  function choose(adat) {
    setBookList(genFilter(adat, bookList));
}


  return (
    <div className="App">
      <header className="App-header">
        <a href="index.js"><h2>Pages & Co.</h2></a>
        <nav>
          <NavBar list={nav} choose={choose}/>
        </nav>
      </header>
      <article>
        <div className="products">
          <Products list={bookListClone} click={click} />
        </div>
        <div className={`cart`}>
          <Cart list={buyList} sum={sumPrice(buyList)} del={del} />
        </div>
      </article>
    </div>
  );
}

export default App;
