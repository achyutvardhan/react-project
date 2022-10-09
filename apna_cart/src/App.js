import logo from "./logo.svg";
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

  const incrementQuantity = (i) => {
    let newProductList = [...productList];
    console.log(newProductList);
    newProductList[i].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (i) => {
    let newProductList = [...productList];
    console.log(newProductList);
    if (newProductList[i].quantity > 0) newProductList[i].quantity--;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="conatiner mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
