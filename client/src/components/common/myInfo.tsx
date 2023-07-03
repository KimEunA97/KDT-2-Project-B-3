import React from "react";
import { Link } from "react-router-dom";
const MyInfo = (): JSX.Element => {
  return(
    <div>
      <h3>내 정보</h3>
      <div>최근 운행 정보</div>
      <Link to="/custom">
      <div>단축 편집 버튼</div>
      </Link>
    </div>
  )
}

export default MyInfo;