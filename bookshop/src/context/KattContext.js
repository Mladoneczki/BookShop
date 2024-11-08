import { createContext, useState } from "react";
import konyvLista from "../components/konyvLista.js";
import { genFilter } from "../components/functions.js";

export const KattContext = createContext("");
export const KattProvider = ({ children }) => {
    function sumPrice(buyList) {
        let sumPrice = 0;
        buyList.forEach((elem, i) => {
          sumPrice += elem.price;
        });
        return sumPrice.toFixed(2);
      }
    
     
      
      
       
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
    <KattContext.Provider
      value={{sumPrice,  click, del, choose, bookListClone, buyList}}
    >
      {children}
    </KattContext.Provider>
  );
};