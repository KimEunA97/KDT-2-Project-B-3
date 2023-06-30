import React, { useContext } from 'react';
import { BtnContext } from '../context/btnContext';
import { useNavigate } from 'react-router-dom';

const Restroombutton = (): JSX.Element => {
  const btnContextData = useContext(BtnContext);
  const navigate = useNavigate();

  function testEvent(buttonName: string) {
    navigate(`/button/${buttonName}`);
    fetch('/test2').then((data) => {
      // console.log(data.json());
    });
  }

  return (
    <div>
      <button
        onClick={() => testEvent('화장실')}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          marginTop: '60px',
        }}
      >
        <img
          src="images/Restroombutton.png"
          alt="Restroombutton"
          style={{ width: '100%', height: '100%' }}
        />
      </button>
    </div>
  );
};

export default Restroombutton;
