// 

import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "../common/RightNav";
import MyInfo from "../common/myInfo";
import MyBookMark from "../common/myBookMark";
import '../style/OpenMenu.css';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index:20;
  display: none;


  @media (max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }


  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1){
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2){
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(100%)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3){
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ():JSX.Element =>{
  const [open, setOpen] = useState(false);
  
  
  return (
    <>
        <div className="header">
        <p>Jin님, 환영합니다.</p>
         {/* <button className="settingButton"><img className="imgSize" src={alarm} alt="" /></button>  */}
      </div>
    <StyledBurger open={open} onclick{...() => setOpen(!open)}>
      <MyInfo />
      <MyBookMark />
    </StyledBurger>
    <RightNav open={open} />
    </>
  )
};
export default Burger;