import React, { useState } from 'react';
import styled from '@emotion/styled'


const Container = styled.div`
  position: relative;
`;

const CheckLabel = styled.div`
  position: relative;
  display: block;
  width: 60px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
`;

const SideButton : React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };


/*
const SideButton = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
*/


  return (
    <Container>
      <input
        type="checkbox"
        id="check_box"
        checked={checked}
        onChange={handleCheckboxChange}
      />
        <CheckLabel>
        <span></span>
        <span></span>
        <span></span>
        </CheckLabel>
      {checked && (
        <div id="side_menu">
          <ul>
            <li>
              <a href="#">menu1</a>
            </li>
            <li>
              <a href="#">menu2</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
};

export default SideButton;
