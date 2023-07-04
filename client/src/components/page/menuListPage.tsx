import React from "react";
import Info from '../common/myInfo';
import Book from '../common/myBookMark';
//import alarm from '../images/notification.png';
import settingImage from '../images/setting.png';

function OpenMenuPage(): JSX.Element {
  return (
    <div className="body">

      <div className="header">
        <p>Jin님, 환영합니다.</p>
        {/* <img className="imgSize" src={alarm} alt="" /> */}
      </div>

      <Info />
      <Book />

      <div className="setting">
        <button className="settingBtn"><img src={settingImage} alt="" /></button>
      </div>

      <div className="footer">
        <button className="callCenter">고객센터</button>
        <button className="logOut">로그아웃</button>
      </div>

    </div>
  );
}
export default OpenMenuPage;