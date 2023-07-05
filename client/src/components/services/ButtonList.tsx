import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YesNoModal from '../common/YesNoModal';
import { BtnContext } from '../context/btnContext';
import Custombutton from './Custombutton';

interface ButtonListProps {
  searchTerm: string;
}

interface Button {
  value: string;
  image: string;
  name: string;
}

const ButtonList = ({}: ButtonListProps): JSX.Element => {
  // 버튼 상태
  const [buttons, setButtons] = useState<Button[]>([]);
  const [selectedBtnIndex, setSelectedBtnIndex] = useState<number>(-1);
  // yes, no 모달 토글
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  // 모든 버튼 데이터를 가져옴
  const btnContextData = useContext(BtnContext);

  useEffect(() => {
    const virtualButtons: Button[] = [
      {
        value: '편의점',
        image: 'convenience-store.png',
        name: '편의점',
      },
      {
        value: '카페',
        image: 'cafe.png',
        name: '카페',
      },
      {
        value: '주유소',
        image: 'gas_station.png',
        name: '주유소',
      },
      {
        value: '화장실',
        image: 'restroom.png',
        name: '화장실',
      },
    ];

    const additionalButton: Button = {
      value: '추가 버튼',
      image: 'additional-button.jpg',
      name: '추가 버튼',
    };

    setButtons([...virtualButtons, additionalButton]);
  }, []);
  // 토글 이벤트
  const handleButtonClick = (buttonIndex: number) => {
    console.log('Button clicked:', buttons[buttonIndex]);
    setSelectedBtnIndex(buttonIndex);
    setIsModalOpen(true);
  };
  // 토글 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // 토글 -> url 쿼리에 데이터 담고 페이지 이동
  const handleModalConfirm = () => {
    console.log('Confirmed:', buttons[selectedBtnIndex]);
    setIsModalOpen(false);
    const selectedButton = buttons[selectedBtnIndex];
    navigate(
      `/edit/${selectedButton.value}/${selectedButton.image}/${selectedButton.name}`,
    );
  };

  return (
    <>
      {btnContextData.map((button, index) => (
        <Custombutton
          key={index}
          buttonInfo={button}
          onClick={() => handleButtonClick(index)}
        />
      ))}
      {isModalOpen && (
        <YesNoModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      )}
    </>
  );
};

export default ButtonList;
