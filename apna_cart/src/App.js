import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Footer from './components/footer';

function App() {
  const productList = [{
    price  : 999,
    name : "iphone xs",
    quantity : 0
  },
  {
    price  : 9999,
    name : "iphone xs max",
    quantity : 0
  },
  {
    price  : 9990,
    name : "iphone xs",
    quantity : 0
  },
]


  return (
    <>
    <Navbar/>
    <main className='conatiner mt-5'>

    <ProductList productList={productList}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
