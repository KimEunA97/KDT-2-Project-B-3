import React from "react";
import Info from './myInfo';
import Book from './myBookMark';


const menuList = ():JSX.Element =>{
  return (
    <div>

    <div>
      Jin님, 환영합니다. 
      <img src="" alt="알림이미지 들어갈 부분" />
    </div>

    <Info />
    <Book />
    
    <div>
      설정이미지 들어갈 부분
    </div>

    <div>
    <button>고객센터</button>
    <button>로그아웃</button>
    </div>

    </div>
  )
};
export default menuList;