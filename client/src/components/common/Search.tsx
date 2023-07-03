import React, { useState } from 'react';
import Listdiv from '../services/Listdiv';
import '../style/Header.css';
import searchImage from '../images/Search.png'

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setShowList((prevList) => [...prevList, searchTerm]);
  };

  return (
    <div>
      <div className='container'>
        <div className='searchContainer'>
        <input className='searchBar'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className='searchButton' onClick={handleSearch}><img src={searchImage} alt=''/></div>
        </div>
        {/* <div className='hamburgerMenu'></div> */}
        {/* {showList.length > 0 && <Listdiv />} */}
      </div>
          {/* {showList.length > 0 && <Listdiv />} */}
    </div>
  );
};

export default Search;
