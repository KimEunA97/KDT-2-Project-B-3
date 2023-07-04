import React from "react";
import Info from '../common/myInfo';
import Book from '../common/myBookMark';
//import alarm from '../images/notification.png';
import settingImage from '../images/setting.png';
import '../style/OpenMenu.css';
//import styled from "styled-components";


////////////////////////////////////
// const SideBarWrap = styled.div`
//   z-index: 5;
//   padding: 12px;
//   border-radius: 15px 0 0 15px;
//   background-color: #e7e4e1;
//   height: 100%;
//   width: 55%;
//   right: -55%;
//   top: 0;
//   position: fixed;
//   transition: 0.5s ease;
//   &.open {
//     right: 0;
//     transition: 0.5s ease;
//   }
// `;
////////////////////////////////////


function OpenMenuPage(): JSX.Element {
  return (
    <div className="body">

      <div className="header">
        <p>Jin님, 환영합니다.</p>
         {/* <button className="settingButton"><img className="imgSize" src={alarm} alt="" /></button>  */}
      </div>

      <Info />
      <Book />

      <div className="setting">
        <button className="settingButton"><img src={settingImage} className="imgSize" alt="" /></button>
      </div>

      <div className="footer">
        <button className="footerButton">고객센터</button>
        <button className="footerButton">로그아웃</button>
      </div>

    </div>
  );
}
export default OpenMenuPage;