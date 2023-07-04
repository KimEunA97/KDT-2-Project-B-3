import React from 'react';
import { Link } from 'react-router-dom';
import '../style/OpenMenu.css';

const MyInfo = (): JSX.Element => {
  return (
    <div className='myInfo'>
      <h3>내 정보</h3>
      <div><strong>최근 운행 정보</strong></div>
      <Link to="/custom" style={{textDecoration: "none", color: "black"}}>
        <div><strong>단축 편집 버튼</strong></div>
      </Link>
    </div>
  );
};

export default MyInfo;
