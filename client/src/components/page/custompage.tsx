import React, { useState } from 'react';
import Search from '../common/Search';
import ButtonList from '../services/ButtonList';
import YesNoModal from '../common/YesNoModal';

const Custompage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 열림

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    // 모달 확인 버튼 누를 때 실행할 동작
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ButtonList searchTerm={searchTerm} />
      <YesNoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
      {/* 모달이 열릴 때만 투명한 배경 표시 */}
      {isModalOpen && <div className="modal" />}
    </div>
  );
};

export default Custompage;
