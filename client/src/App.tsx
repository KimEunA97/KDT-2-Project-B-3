import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import Custompage from './components/pages/Custompage';
import Mainpage from './components/pages/Mainpage';
import ProtoTestPage from './components/pages/testPageHer';
// import TestPage2 from './components/pages/testPage2';
import LoginPage from './components/pages/Loginpage';
import SignUpPage from './components/pages/signUpPage';
const App = (): JSX.Element => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '테스트',
    '/home': '홈',
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
        <Route path="/" element={<ProtoTestPage />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
