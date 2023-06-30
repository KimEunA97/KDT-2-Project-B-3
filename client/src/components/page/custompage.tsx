import React, { useState } from 'react';
import Search from '../common/Search';
import ButtonList from '../services/ButtonList';

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
