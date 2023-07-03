import React from "react";
import '../style/OpenMenu.css';

const myBookMark = ():JSX.Element =>{
  return (
    <div className="myBookMark">

    <div className="btnContainer">
      <strong>마이로그</strong>
      <img className="myLogBtn"
       alt="북마크 표시" />
    </div>

    <div className="btnContainer">
    <strong>즐겨찾기</strong>
      <img className="starBtn" alt="즐겨찾기 표시" />
    </div>
    
    </div>
  )
};
export default myBookMark;