import { useDispatch, useSelector } from 'react-redux';
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
import { setSearchQuery } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { getProductByQuery } from '../../services/api';

function Header() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.app.searchQuery);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query)); // Define o novo valor de pesquisa no estado

    // Faça a pesquisa com o novo valor de consulta
    const result = await getProductByQuery(query);

    // Agora, despache a ação para definir os resultados de pesquisa no estado
    dispatch(setSearchQuery(result.results));
  };

  return (
    <HeaderContainer>
      <Search>
        <Input
          type="text"
          placeholder="Pesquisar"
          value={ searchQuery } // Defina o valor do campo de pesquisa
          onChange={ handleSearchChange }
        />
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
