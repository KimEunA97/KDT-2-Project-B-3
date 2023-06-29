import React from "react";
import EditButton from '../common/editButtonSelect';

const testPage = ():JSX.Element=> {
  return <div>
    <h3>단축 편집 버튼</h3>
    <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

    <EditButton />

    <button>확인</button>

  </div>
};
export default testPage;