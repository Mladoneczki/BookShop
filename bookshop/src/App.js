import logo from './logo.svg';
import './App.css';

import Products from './components/Products.js';
import { useState } from 'react';
import Cart from './components/Cart.js';
import konyvLista from './components/konyvLista.js';

function App() {
  const bookList = konyvLista; 
  const [buyList, setList] = useState([]);

  function click(adat) {
      const cl = [...buyList]; 
      cl.push(bookList[adat]);
      setList(cl);
     
  }
  function del(data){
    const clonL=[...buyList]
    clonL.splice(data,1)
    setList(clonL)
  
    
}

function sumPrice() {
  let sumPrice = 0;
  buyList.forEach((elem) => {
    sumPrice += elem.price;
  });
  return sumPrice.toFixed(2);
}






  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Pages & Co.</h2>
      </header>
      <article>
        <div className='products'>
          <Products list={bookList} click={click}/>
        </div>
        <div className={`cart`}>
          <Cart list={buyList} sum={sumPrice()} del={del}/>
        </div>

      </article>
    </div>
  );
}

export default App;