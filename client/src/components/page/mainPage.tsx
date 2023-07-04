import React, { useState } from 'react';
//import MyInfo from '../common/myInfo';
import Search from '../common/Search';
// import Listdiv from '../services/Listdiv';
import MainBtn from '../common/mainbtn';
import '../style/Header.css'
import hamburgerImage from '../images/hamburger.png'
import MenuListPage from '../page/menuListPage'


const Mainpage = (): JSX.Element => {
  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* 검색바와 검색버튼 부분 */}
      <div className='container'>
        <Search onSearch={handleSearch} />
        <div className='hamburgerMenu' onClick={toggleMenu}><img className='img' src={hamburgerImage} alt=''/></div>
        {/* {isOpen && <MyInfo />} */}
        {isOpen && <MenuListPage />}
      </div>
      {/* 커스텀 버튼리스트 부분 */}
        <MainBtn /> 

      {/* <div>
        <div className='hamburgerMenu' onClick={toggleMenu}></div>
        {isOpen && <MyInfo />}
      </div> */}
    </div>
  );
};
export default Mainpage;
