import React from "react";
import '../style/OpenMenu.css';
import labelImage from '../images/bookmark.png'
import starImage from '../images/star.png'

const myBookMark = ():JSX.Element =>{
  return (
    <div className="myBookMark">

    <div className="btnContainer">
      <strong>마이로그</strong>
      <img className="imgSize" src={labelImage}
       alt="북마크 표시" />
    </div>

    <div className="btnContainer">
    <strong>즐겨찾기</strong>
      <img className="imgSize" src={starImage} alt="즐겨찾기 표시" />
    </div>
    
    </div>
  )
};
export default myBookMark;