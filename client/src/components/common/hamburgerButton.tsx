import React, { useState } from 'react';
import MenuList from './menuList'; // MenuList 컴포넌트의 경로에 맞게 수정해주세요.

const SideMenuButton: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const initButton = () => {
    setChecked(true);
  };

  return (
    <div>
      <button onClick={initButton}>button</button>
      <label htmlFor="check_box">
        <span></span>
        <span></span>
        <span></span>
      </label>
      {checked && (
        <div id="side_menu">
          <MenuList /> {/* MenuList 컴포넌트를 렌더링합니다. */}
        </div>
      )}
    </div>
  );
};

export default SideMenuButton;