import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BtnContext from './components/contextData/btnContext';
import Header from './components/layout/header';
import Custompage from './components/page/custompage';
import EditButtonPage from './components/page/editButtonPage';
import LoginPage from './components/page/loginPage';
import Mainpage from './components/page/mainPage';
import ProtoTestPage from './components/page/testPageHer';

const App = (): JSX.Element => {
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
      <BtnContext.Provider value={[
  { firstBtn: { value: "Toilet", img: "", btnName: "first" } },
  { secondBtn: { value: "gasStation", img: "", btnName: "second" } },
  { thirdBtn: { value: "convenienceStore", img: "", btnName: "third" } },
]}>
      <Routes>
        <Route path="/" element={<ProtoTestPage />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signUp" element={<SignUpPage />} /> */}
        <Route path="/edit" element={<EditButtonPage />} />
      </Routes>
      </BtnContext.Provider>
    </div>
  );
};

export default App;
