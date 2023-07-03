import React from 'react';

interface ButtonInfo {
  value: string;
  image: string;
  name: string;
}

interface CustomButtonProps {
  buttonInfo: ButtonInfo;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonInfo, onClick }) => {
  const { value, image, name } = buttonInfo;

  return (
    <div onClick={onClick}>
      <img src={image} alt={name} />
      {value}
    </div>
  );
};

export default CustomButton;
