import React from "react";
import Product from "./product";
// export default function ProductList({product}) {
//     console.log(product)
//   return (
//     <div>

//     </div>
//   )
// }

export default function ProductList(props) {
  console.log(props);
  return (
    props.productList.length>0 ?
    props.productList.map((productL, i) => {
    return <Product product={productL} key={i} incrementQuantity= {props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} Index ={i} remove ={props.removeitem} index1={i} />;
  })
  : <h1>cart is empty</h1>
  )
}
