import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DefaultBtnContext } from '../context/btnContext';
import '../style/editpage.css';

interface ButtonParams {
  value: string;
  image: string;
  name: string;
  [key: string]: string;
}

const EditButtonPage: React.FC = () => {
  const navigate = useNavigate();
  const { btnContextData, updateBtnContext } = useContext(DefaultBtnContext);
  const [selectedButton, setSelectedButton] = useState<number>(-1);
  const { value, image, name } = useParams<ButtonParams>();

  //? 데이터 못 가져왔을 때 예외처리
  if (!value || !image || !name) {
    // URL 파라미터가 없는 경우 처리
    return <div>URL 파라미터가 존재하지 않습니다.</div>;
  }

  // 버튼 데이터 가지고 함수 실행
  const handleButtonSelect = (buttonIndex: number) => {
    // 버튼 데이터를 handleConfirm()에서 사용
    setSelectedButton(buttonIndex);
  };

  const handleConfirm = () => {
    if (selectedButton !== -1) {
      // btnContextData의 n번째 데이터를 url로 받은 데이터로 재할당
      const updatedBtnContextData = btnContextData.map((button, index) => {
        // 버튼 index와 데이터 index가 같으면 함수 실행
        if (index === selectedButton) {
          //! 현재 이미지 URL을https://ko.imgbb.com/에서 생성해서 적용한 상태입니다. 리터럴로 되있는 상태인데 해결해야합니다
          // 데이터 재할당
          const imageUrl = 'https://i.ibb.co/d6nBjHQ/cafe.png';
          return {
            value: value,
            image: imageUrl,
            name: name,
          };
        }
        return button;
      });
      alert('적용이 완료됐습니다.');
      // updateBtnContext 메서드로 provider 데이터 업데이트
      updateBtnContext(updatedBtnContextData);
      // 변경후에 main페이지로 이동
      navigate('/');
    }
  };

  useEffect(() => {
    setSelectedButton(0);
  }, []);

  return (
    <div>
      <div className="edit_container">
        <p className="center-align">
          <strong>어떤 버튼에 적용하겠습니까?</strong>
        </p>

        <div
          onClick={() => handleButtonSelect(0)}
          className={selectedButton === 0 ? 'edit_btn selected' : 'edit_btn'}
        >
          1
        </div>
        <div
          onClick={() => handleButtonSelect(1)}
          className={selectedButton === 1 ? 'edit_btn selected' : 'edit_btn'}
        >
          2
        </div>
        <div
          onClick={() => handleButtonSelect(2)}
          className={selectedButton === 2 ? 'edit_btn selected' : 'edit_btn'}
        >
          3
        </div>
      </div>
      <div>
        <button className="confirm" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default EditButtonPage;
