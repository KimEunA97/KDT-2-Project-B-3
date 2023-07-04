import React from "react";
import styled from "styled-components";
import Burger from "../common/Burger";
import Menu from '../images/hamburger.png';
import '../style/OpenMenu.css';
//import RightNav from "./RightNav";


const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom:2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
.logo{
  padding: 15px 0;
}
ul{
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li{
    padding: 18px 10px;
  }
}
`


const NavBarPage = ():JSX.Element =>{
  return (
    <Nav>
      {/* <div className="logo">
        Nav Bar <img className="imgSize" src={Menu} alt="" />
      </div> */}
      <Burger />
    </Nav>
  )
};
export default NavBarPage;