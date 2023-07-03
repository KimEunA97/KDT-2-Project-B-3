import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnData } from "../context/btnContext";
interface Button {
  value: string;
  image: string;
  name: string;
}
const EditButtonPage: React.FC = () => {
  const btnContextData = useContext(DefaultBtnData);
  const paramData = useParams()
  if (!paramData || !paramData.buttonValue) {
    // URL 파라미터가 없는 경우 또는 buttonValue 파라미터가 없는 경우 처리
    return <div>URL 파라미터가 존재하지 않습니다.</div>;
  }
  const buttonValue = paramData.buttonValue.replace('$', '');
  console.log(buttonValue);
  return (
    <div>
      <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

      <div>1</div>
      <div>2</div>
      <div>3</div>

      <button>확인</button>
    </div>
  );
};
export default EditButtonPage
