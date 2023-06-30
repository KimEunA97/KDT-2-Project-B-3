import React from 'react';

interface ButtonInfo {
  value: string;
  image: string;
}

interface CustomButtonProps {
  buttonInfo: ButtonInfo;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonInfo, onClick }) => {
  const { value, image } = buttonInfo;

  return (
    <div onClick={onClick}>
      <img src={image} alt={value} />
    </div>
  );
};

export default CustomButton;
