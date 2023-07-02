import React, { useContext, useState } from "react";
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
  const [selectedButton, setSelectedButton] = useState<number>(-1);

  if (!value || !image || !name) {
    // URL 파라미터가 없는 경우 처리
    return <div>URL 파라미터가 존재하지 않습니다.</div>;
  }

  console.log('Value:', value);
  console.log('Image:', image);
  console.log('Name:', name);

  const handleButtonSelect = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };
  
  const handleConfirm  = ()=> {
    if (selectedButton  !== -1) {
      const updatedBtnContextData = btnContextData.map((button, index) => {
        if (index === selectedButton ) {
          // 선택한 버튼의 정보로 업데이트
          return {
            value: value,
            image: image,
            name: name,
          };
        }
        return button;
      });}

  }

  return (
    <div>
    <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

    <div
      onClick={() => handleButtonSelect(0)}
      style={{ backgroundColor: selectedButton === 0 ? 'navy' : '' }}
    >
      1
    </div>
    <div
      onClick={() => handleButtonSelect(1)}
      style={{ backgroundColor: selectedButton === 1 ? 'navy' : '' }}
    >
      2
    </div>
    <div
      onClick={() => handleButtonSelect(2)}
      style={{ backgroundColor: selectedButton === 2 ? 'navy' : '' }}
    >
      3
    </div>

    <button onClick={handleConfirm}>확인</button>
  </div>
  );
};

export default EditButtonPage;
