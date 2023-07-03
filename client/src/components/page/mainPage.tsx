import React, { useState } from 'react';
import MyInfo from '../common/myInfo';
import Search from '../common/Search';
import Gas_stationbutton from '../services/Gas_stationbutton';
import Listdiv from '../services/Listdiv';
import Local_convenience from '../services/Local_convenience';
import Restroombutton from '../services/Restroombutton';
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
      <Search onSearch={handleSearch} />
      <div>
        <Restroombutton />
      </div>
      <div>
        <Gas_stationbutton />
      </div>
      <div>
        <Local_convenience />
      </div>
      <div>
        <Listdiv />
      </div>
      <div>
      <div onClick={toggleMenu}>햄버거 메뉴</div>
      {isOpen && <MyInfo />}
      </div>
    </div>
  );
};

export default Mainpage;
