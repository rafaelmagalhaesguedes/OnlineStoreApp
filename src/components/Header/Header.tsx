import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../images/logo.png';
import iconCart from '../../images/cart.png';
import {
  HeaderContainer,
  Input,
  Logo,
  Image,
  Nav,
  Search,
  IconSearch,
  IconCart,
} from './Styles';

function Header() {
  return (
    <HeaderContainer>
      <Search>
        <Input type="text" placeholder="Pesquisar" />
        <IconSearch icon={ faSearch } />
      </Search>
      <Logo>
        <Image src={ LogoImage } alt="Logo" />
      </Logo>
      <Nav>
        <NavLink to="/shoppingcart">
          <IconCart src={ iconCart } alt="" />
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
