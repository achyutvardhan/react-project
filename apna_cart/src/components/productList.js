import React from 'react';
import Product from './product';
// export default function ProductList({product}) {
//     console.log(product)
//   return (
//     <div>
    
//     </div>
//   )
// }

export default function ProductList(props) {
//   console.log(props);
  return (
    props.productList.map((productL,i)=>{
        return <Product product= {productL} key={i}/>
    })
  )
}