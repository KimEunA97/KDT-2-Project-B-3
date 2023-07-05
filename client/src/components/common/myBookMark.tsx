import React from "react";
import labelImage from '../images/bookmark.png';
import starImage from '../images/star.png';
import '../style/OpenMenu.css';

const myBookMark = ():JSX.Element =>{
  return (
    <div className="myBookMark" style={{width : '90%'}}>

    <div className="btnContainer">
      <strong>운행기록</strong>
      <button className="buttonStyle"><img className="imgSize" src={labelImage}
       alt="북마크 표시" /></button>
    </div>

    <div className="btnContainer">
    <strong>즐겨찾기</strong>
    <button className="buttonStyle"><img className="imgSize" src={starImage} alt="즐겨찾기 표시" /></button>
    </div>
    
    </div>
  )
};
export default myBookMark;