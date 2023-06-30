import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YesNoModal from '../common/YesNoModal';
import Custombutton from './Custombutton';
interface ButtonListProps {
  searchTerm: string;
}

interface Button {
  value: string;
  image: string;
}

const ButtonList = ({ searchTerm }: ButtonListProps): JSX.Element => {
  const [buttons, setButtons] = useState<Button[]>([]);
  const [selectedBtn, setSelectedBtn] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // 페이지 이동에 사용할 navigate
  const navigate = useNavigate();

  useEffect(() => {
    // 가상으로 가져온 버튼 데이터
    const virtualButtons: Button[] = [
      {
        value: '편의점',
        image: 'convenience-store.jpg',
      },
      {
        value: '카페',
        image: 'cafe.jpg',
      },
      {
        value: '주유소',
        image: 'gas-station.jpg',
      },
      {
        value: '화장실',
        image: 'restroom.jpg',
      },
    ];

    // 추가 버튼
    const additionalButton: Button = {
      value: '추가 버튼',
      image: 'additional-button.jpg',
    };

    // 가상 데이터에 추가 버튼을 포함하여 상태에 설정
    setButtons([...virtualButtons, additionalButton]);
  }, []);

  const filteredButtons = buttons.filter((button) =>
    button.value.includes(searchTerm),
  );

  const handleButtonClick = (buttonName: string) => {
    console.log('Button clicked:', buttonName);
    setSelectedBtn(buttonName);
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleModalConfirm = () => {
    console.log('Confirmed'); // 확인 버튼을 클릭한 경우 수행할 로직
    setIsModalOpen(false); // 모달 닫기
    // 단축 버튼 편집 페이지로 이동시킴
    navigate(`/edit/${selectedBtn}`);
  };

  return (
    <div>
      {selectedBtn}
      {filteredButtons.map((button, index) => (
        <Custombutton
          key={index}
          buttonInfo={button}
          onClick={() => handleButtonClick(button.value)}
        />
      ))}
      {isModalOpen && (
        <YesNoModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  );
};

export default ButtonList;
