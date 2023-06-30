import React, { useContext, useState } from 'react';
import Search from '../common/Search';
import BtnContext from '../contextData/btnContext';
import ButtonList from '../services/ButtonList';
const testContext = useContext<any>(BtnContext)
console.log(testContext)
const Custompage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ButtonList searchTerm={searchTerm} />
    </div>
  );
};

export default Custompage;
