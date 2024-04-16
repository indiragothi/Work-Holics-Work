import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './contexts/Counter';

function App() {

  const CounterState = useContext(CounterContext);

  console.log("context", CounterState);

  return (
    <div className="App">
      <h1>Count is : {CounterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
