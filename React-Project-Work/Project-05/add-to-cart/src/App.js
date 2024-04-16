import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div>
      <Item name="MacBook pro" price={1000000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={350000} />
      <Cart/>
    </div>
  );
}

export default App;
