import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import LogoImage from '../../images/logo.png';
import iconCart from '../../images/cart.png';
import { fetchSearchQuery, searchClear } from '../../redux/actions/searchAction';
import { searchCategoryClear } from '../../redux/actions/searchCategoryAction';
import { Dispatch } from '../../types';
import {
  HeaderContainer,
  Input,
  Logo,
  Image,
  Nav,
  IconSearch,
  IconCart,
  FormHeader,
  ButtonSearch,
  Wrapper,
} from './Styles';

function Header() {
  const dispatch: Dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(searchCategoryClear());
    dispatch(searchClear());
    dispatch(fetchSearchQuery(search));
    setSearch('');
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <Image src={ LogoImage } alt="Logo" />
        </Link>
      </Logo>
      <Wrapper>
        <FormHeader>
          <Input
            type="text"
            name="search"
            value={ search }
            onChange={ handleChange }
            placeholder="Pesquisar"
          />
          <IconSearch icon={ faSearch } />
          <ButtonSearch
            onClick={ handleSubmit }
          >
            Pesquisar
          </ButtonSearch>
        </FormHeader>
      </Wrapper>
      <Nav>
        <NavLink to="/shoppingcart">
          <IconCart src={ iconCart } alt="" />
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
