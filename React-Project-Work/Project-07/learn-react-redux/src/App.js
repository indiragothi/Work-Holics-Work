import { useDispatch } from 'react-redux';
import './App.css';
import Counter from './components/Counter';

function App() {
  const disPatch = useDispatch();
  return (
    <>
      <button onClick={e => disPatch({type : 'INCREMENT'})} >
        Increment
      </button>
      <Counter/>
      <button onClick={e => disPatch({type : 'DECREMENT'})} >
        decrement
      </button>
    </>
  );
}

export default App;
