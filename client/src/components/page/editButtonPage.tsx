import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnData } from "../context/btnContext";
// 디폴트 버튼 인터페이스
interface Button {
  value: string;
  image: string;
  name: string;
}
// url로 가져온 데이터 인터페이스
interface ButtonParams {
  value: string;
  image: string;
  name: string;
  [key: string]: string;
}

const EditButtonPage: React.FC = () => {
  // useContext
  const btnContextData :  Button[]= useContext(DefaultBtnData);
  // 컨텍스트 데이터 관리
  const [btnState, setBtnState]= useState(btnContextData);
  // url 쿼리 데이터
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
    // 1, 2, 3번 state
    setSelectedButton(buttonIndex);
  };
  // 변경사항 확인하기 위한 콘솔
  useEffect(() => {
    console.log("제발 변해라:", btnContextData);
  }, [btnContextData]);
  const handleConfirm = () => {
    if (selectedButton !== -1) {
      console.log("눌리긴 함?")
      const updatedBtnContextData = btnContextData.map((button, index) => {
        if (index === selectedButton) {
          // 선택한 버튼의 정보로 업데이트
          return {
            value: value,
            image: image,
            name: name,
          };
        }
        return button;
      });
      setBtnState(updatedBtnContextData)
    }
  };

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
