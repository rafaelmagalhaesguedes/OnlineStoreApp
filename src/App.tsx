import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/shoppingcart" element={ <ShoppingCart /> } />
        <Route path="/productdetails/:id" element={ <ProductDetails /> } />
      </Route>
    </Routes>
  );
}

export default App;
