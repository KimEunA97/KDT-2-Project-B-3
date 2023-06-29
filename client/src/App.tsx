import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import SideMenuButton from './components/common/hamburgerButton';
import Custompage from './components/pages/Custompage';
import Mainpage from './components/pages/mainPage';
import Map from './components/pages/testPage';
import LoginPage from './components/pages/loginPage';
import FirstPage from './components/pages/firstPage';
const App = (): JSX.Element => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '로딩페이지',
    '/home': '홈',
    '/login': '로그인페이지',
    '/custom': '커스텀페이지',
    '/map': '지도 테스트중',
    '/main': '메인 페이지',
  };
  React.useEffect(() => {
    // switch (location.pathname) {
    //     case "/" :
    //         setPageTitle("테스트");
    //     break;
    //     case "/home" :
    //         setPageTitle("홈")
    // }
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hamburger" element={<SideMenuButton />} />
      </Routes>
    </div>
  );
};

export default App;
