import { useState } from "react";
function Choosing(genre, list){
    const choosedList = list.filter((element) => element.genre === genre);

    return choosedList
  
   }
 
function genFilter(buttonId, defList){
    let choosedBooks=[];
    if(buttonId==0){
       choosedBooks=[...defList]
  
    }
    else{
      console.log("button id nem 0")
      choosedBooks=Choosing(buttonIdToGenre(buttonId),defList)
  
    }

    return choosedBooks;
    
   }
  
   function buttonIdToGenre(buttonId){
    let genre=""
    if(buttonId==1){
      genre="Thriller"
    }
    if(buttonId==2){
      genre="Fantasy"
    }
    if(buttonId==3){
      genre="Classic"
    }
    return genre
    
   }
   export {genFilter}