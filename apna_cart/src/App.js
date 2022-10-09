// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import Footer from "./components/footer";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 999,
      name: "iphone xs",
      quantity: 0,
    },
    {
      price: 9999,
      name: "iphone xs max",
      quantity: 0,
    },
    {
      price: 9990,
      name: "iphone xs",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);
  let [quantity, setQuantity] = useState(products)

  const incrementQuantity = (i) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;

    // console.log(newProductList);
    newProductList[i].quantity++;
    newtotalAmount += newProductList[i].price;
    setProductList(newProductList);
    settotalAmount(newtotalAmount)
  };
  const decrementQuantity = (i) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;

    // console.log(newProductList);
    if (newProductList[i].quantity > 0) 
    {

      newProductList[i].quantity--;
    newtotalAmount -= newProductList[i].price;

    }
    setProductList(newProductList);
    settotalAmount(newtotalAmount)
  };

   const reset = (i) =>{
    let newProductList = [...quantity];
    for (; i < quantity.length; i++) {
      newProductList[i].quantity = 0;
    }
   setQuantity(newProductList);
   settotalAmount(0);
   }
   const removeitem = (i)=>{
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -= newProductList[i].quantity*newProductList[i].price
    newProductList.splice(i,1)
    setProductList(newProductList)
    settotalAmount(newtotalAmount)
   }
  return (
    <>
      <Navbar />
      <main className="conatiner mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeitem = {removeitem}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
