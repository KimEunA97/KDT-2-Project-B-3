import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BtnContext, BtnContextData } from "./components/context/btnContext";
import Header from './components/layout/header';
import Custompage from './components/page/custompage';
import EditButtonPage from './components/page/editButtonPage';
import LoginPage from './components/page/loginPage';
import Mainpage from './components/page/mainPage';
import TestPage from './components/page/testPage';
<<<<<<< HEAD
import PoliLine from './components/page/poliLine';
import CurrentLocationViewPage from './components/page/userCurrentLocationViewPage';

=======
import ProtoTestPage from './components/page/testPageHer';
>>>>>>> e6163ef877e411ae27ab4b60cc2a2158eb90e5ad
const App = (): JSX.Element => {
  console.log(BtnContextData)
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '',
    '/main': '홈',
    '/edit' : '단축 편집 버튼',
    '/custom' : '카테고리 선택',
    '/login' : '로그인',
    '/signUp' : '회원가입'
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
      <BtnContext.Provider value={BtnContextData}>
      <Routes>
        <Route path="/" element={<ProtoTestPage />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/test" element={<TestPage />} />
<<<<<<< HEAD
        <Route path="/check" element={<CurrentLocationViewPage />} />
        <Route path="/poli" element={<PoliLine />} />
=======
>>>>>>> e6163ef877e411ae27ab4b60cc2a2158eb90e5ad
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signUp" element={<SignUpPage />} /> */}
        <Route path="/edit/:buttonName" element={<EditButtonPage />} />
      </Routes>
      </BtnContext.Provider>
    </div>
  );
};

export default App;
