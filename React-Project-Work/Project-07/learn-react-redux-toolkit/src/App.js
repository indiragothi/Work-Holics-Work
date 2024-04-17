import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import products from './products.json'

function App() {
  return (
    <div className='App'>
        <Cart/>
        <div className='products'>
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
    </div>
  );
}

export default App;
