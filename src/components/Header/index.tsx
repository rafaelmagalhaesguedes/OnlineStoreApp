import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="inputSearch">
        <input type="text" />
      </div>
      <div className="logo">
        <img src="#" alt="#" />
      </div>
      <div className="nav">
        <NavLink to="#">Carrinho</NavLink>
      </div>
    </header>
  );
}

export default Header;
