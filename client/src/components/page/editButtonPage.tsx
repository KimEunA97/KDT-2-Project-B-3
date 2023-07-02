import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnData } from "../context/btnContext";

interface ButtonParams {
  value: string;
  image: string;
  name: string;
  [key: string]: string;
}


const EditButtonPage: React.FC = () => {
  const btnContextData = useContext(DefaultBtnData);
  const { value, image, name } = useParams<ButtonParams>();

  if (!value || !image || !name) {
    // URL 파라미터가 없는 경우 처리
    return <div>URL 파라미터가 존재하지 않습니다.</div>;
  }

  console.log('Value:', value);
  console.log('Image:', image);
  console.log('Name:', name);

  // 이하 컴포넌트 내용 작성

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

export default EditButtonPage;
