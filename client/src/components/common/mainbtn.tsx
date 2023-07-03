import React, { useContext } from 'react';
import { DefaultBtnContext } from '../context/btnContext';
import '../style/mainbtn.css';
//import '../style/Header.css'

const MainBtn = (): JSX.Element => {
  const { btnContextData } = useContext(DefaultBtnContext);

  return (
    <div>
      {btnContextData.map((data, index) => {
        const { name, image } = data;
        console.log("이게 이미지 이름입니다",image )
        return (
          <div key={index}>
            <div className="main-button">
              <img src={image} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
