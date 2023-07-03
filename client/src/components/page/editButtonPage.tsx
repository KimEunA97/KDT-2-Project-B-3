import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnContext } from "../context/btnContext";
import '../style/custombtn.css';

// url로 가져온 데이터 인터페이스
interface ButtonParams {
  value: string;
  image: string;
  name: string;
  [key: string]: string;
}

export const EditButtonPage: React.FC = () => {
  const navigate = useNavigate();
  // 기본 버튼 useContext
  const { btnContextData, updateBtnContext } = useContext(DefaultBtnContext);

  // 컨텍스트 데이터 상태 관리
  const [contextState, setContextState] = useState(btnContextData)
  // 버튼 상태
  // const [btnState, setBtnState]= useState(btnContextData);
  // 버튼 상태 관리
  const [selectedButton, setSelectedButton] = useState<number>(-1);
  // url 쿼리 데이터 가져오기
  const { value, image, name } = useParams<ButtonParams>();

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
    console.log("안돼?", contextState);
  }, [contextState]);
  
  const handleConfirm = () => {
    if (selectedButton !== -1) {
      // btnContextData의 n번째 데이터를 url로 받은 데이터로 재할당
      const updatedBtnContextData = btnContextData.map((button, index) => {
        // 재할당 구간
        if (index === selectedButton) {
          //! 현재 이미지 URL을https://ko.imgbb.com/에서 생성해서 적용한 상태입니다. 리터럴로 되있는 상태인데 해결해야합니다
          const imageUrl = "https://i.ibb.co/d6nBjHQ/cafe.png" ;
          return {
            value: value,
            image: imageUrl,
            name: name,
          };
        }
        console.log("제발",button)
        return button;
      });
      alert("적용이 완료됐습니다.");
      updateBtnContext(updatedBtnContextData);
      console.log("마지막 확인",updatedBtnContextData)
      // setContextState(updatedBtnContextData);
      navigate('/main');
      
    
      
      // 변경후에 main페이지로 이동
      
    }
  };

  useEffect(() => {
    setSelectedButton(0); // 첫 로딩시 0번 버튼에 CSS 적용
  }, []);

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
