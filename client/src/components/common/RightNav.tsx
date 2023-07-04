import React from "react";
import styled from "styled-components";
import settingImage from '../images/setting.png';
import '../style/OpenMenu.css';

interface RightNavProps {
  open: boolean;
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li{
    padding: 18px 10px;
  }

  @media(max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li{
      color: #fff;
    }
  }
`;

/*
const RightNav = ({open}):JSX.Element =>{
  return (
    <ul open ={open}>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Sign In</li>
    <li>Sign Up</li>
  </ul>
  )
};
export default RightNav;
*/

const RightNav = ({ open }: RightNavProps): JSX.Element => {
  return (
    <div className={open ? 'open' : ''}>
      ///////////////////////////////////////////
      <div className="header">
        <p>Jin님, 환영합니다.</p>
         {/* <button className="settingButton"><img className="imgSize" src={alarm} alt="" /></button>  */}
      </div>

      <div className="setting">
        <button className="settingButton"><img src={settingImage} className="imgSize" alt="" /></button>
      </div>

      <div className="footer">
        <button className="footerButton">고객센터</button>
        <button className="footerButton">로그아웃</button>

      {/* <li>Home</li> */}
      {/* <li>About</li> */}
      {/* <li>Contact Us</li> */}
      {/* <li>Sign In</li> */}
      {/* <li>Sign Up</li> */}
    </div>
    ///////////////////////////////////////////
    </div>
  );
};

export default RightNav;