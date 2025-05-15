import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(11, 19, 32, 0.25);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  color: #36B7FF;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  margin-left: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "TT Commons Pro", sans-serif;

  &:hover {
    color: #36B7FF;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Ana Sayfa</Logo>
      <NavLinks>
        <NavLink to="/aytmatematik">AYT Matematik</NavLink>
        <NavLink to="/aytfizik">AYT Fizik</NavLink>
        <NavLink to="/geometri">Geometri</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;