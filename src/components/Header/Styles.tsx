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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const FormHeader = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 30rem;
  height: 35px;
  border: none;
  padding: 0 40px;
  font-size: 1.1rem;

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
  padding: 8px;
  cursor: pointer;
`;

export const ButtonSearch = styled.button`
  padding: 0 30px;
  border: 1px solid #25aa79;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #25aa79;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 30px;
`;

export const Image = styled.img``;

export const Nav = styled.nav`
`;

export const IconCart = styled.img`
  width: 40px;
  height: 40px;
`;
