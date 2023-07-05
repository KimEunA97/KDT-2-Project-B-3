import React, { useState } from 'react';
import MainBtn from '../common/mainbtn';
import Search from '../common/Search';
import hamburgerImage from '../images/hamburger.png';
import MenuListPage from '../page/menuListPage';
import '../style/Header.css';
import '../style/OpenMenu.css';

import MapPage from './mapPage';
const Mainpage = (): JSX.Element => {
  const [selectedBtn, setSelectedBtn] = useState<string>('');

  const handleBtnClick = (name: string) => {
    setSelectedBtn(name);
  };
  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // 전체 div 감싸는 컨테이너
    <div style={{ position: 'relative', width : '100%', height : '100%'}}>
      <MapPage selectedBtn={selectedBtn}/>
      {/* 검색창과 햄버거 메뉴가 들어갈 헤더 컨테이너 */}
      <div style={{width : '100%', height : '20%', position: 'absolute', display : 'flex', justifyContent : 'space-evenly', alignItems : 'center',top: 0, left: 0}}>
        <Search onSearch={handleSearch} />
        <div className='hamburgerMenu' onClick={toggleMenu} style={{display : 'felx', alignItems:'center', justifyContent :'center', width : '71px', height : '53px'}}>
          <img className='img' src={hamburgerImage} alt=''/>
        </div>
        {isOpen && <MenuListPage />}
      </div>
      <div style={{ position: 'absolute', top: 120, left: 10 }}>
        <MainBtn handleBtnClick={handleBtnClick}/>
      </div>
    </div>
  );
};
export default Mainpage;