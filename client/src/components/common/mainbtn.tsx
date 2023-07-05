import React, { useContext } from 'react';
import { DefaultBtnContext } from '../context/btnContext';
import '../style/mainbtn.css';

const MainBtn = ({ handleBtnClick }: { handleBtnClick: (name: string) => void }): JSX.Element => {
  const { btnContextData } = useContext(DefaultBtnContext);

// 메인 페이지에서 생성한 세개의 버튼입니다.
  return (
    <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'space-around'}}>
      {btnContextData.map((data, index) => {
        const { name, image } = data;
        return (
          <div key={index}>
            <div className="main-button" onClick={() => handleBtnClick(name)}>
              <img src={image} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
