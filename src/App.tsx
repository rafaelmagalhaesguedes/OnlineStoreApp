import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shoppingcart" element={ <ShoppingCart /> } />
    </Routes>
  );
}

export default App;
