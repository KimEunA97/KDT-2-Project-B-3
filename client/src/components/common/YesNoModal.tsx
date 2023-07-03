import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const YesNoModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Confirmation Modal</h2>
        <p>이 버튼을 편집하겠습니까?</p>
        <button onClick={onConfirm}>예</button>
        <button onClick={onClose}>아니오</button>
      </div>
    </div>
  );
};

export default YesNoModal;
