window.onload = () =>{
    document.querySelector(".cardHeart").classList.add(ramdomSymbolCard());
    document.querySelector(".cardHeart").innerHTML = ramdomNumberCard();
   
 }
 
    let ramdomNumberCard= ()=>{
       let Number=["A","2","3","4","5","6","7","8","9","10","J", "Q", "K"];
       let randomNumbers= Math.floor(Math.random() * Number.length);
       return Number[randomNumbers];
  }
 
  let ramdomSymbolCard= ()=>{
     let Symbol=["diamond", "heart" , "spade" ,"club"]; 
     let randomSymbol= Math.floor(Math.random() *Symbol.length);
     return Symbol[randomSymbol];
 
  }
 