import React from 'react';
import Restroombutton from '../services/Restroombutton';
import Gas_stationbutton from '../services/Gas_stationbutton';
import Local_convenience from '../services/Local_convenience';
import Search from '../common/Search';
import Listdiv from '../services/Listdiv';

const Mainpage = (): JSX.Element => {
  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
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
    </div>
  );
};

export default Mainpage;
