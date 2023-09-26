import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #003BE5;
  height: 7rem;
  padding: 30px;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 15rem;
  height: 35px;
  border: none;
  padding: 0 10px;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-family: Epilogue , sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #B0B3BB;
  }
`;

export const IconSearch = styled(FontAwesomeIcon)`
  color: #2FC18C;
  position: absolute;
  width: 28rem;
  cursor: pointer;
`;

export const Logo = styled.div``;

export const Image = styled.img``;

export const Nav = styled.nav``;

export const IconCart = styled.img`
  width: 40px;
  height: 40px;
`;
