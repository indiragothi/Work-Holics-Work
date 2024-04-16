import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Count from './pages/Count';
import Todo from './pages/Todo';
import Quotes from './pages/Quotes';

 
function App() {
   return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/count' element={<Count/>} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/quote' element={<Quotes/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
