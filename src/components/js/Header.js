//Cabeçalho:
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 0 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
`
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Carrinho</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
