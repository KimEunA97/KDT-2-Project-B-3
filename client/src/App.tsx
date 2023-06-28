
import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/layout/header';
import TestPage from './components/pages/testPage';
import TestPage2 from './components/pages/testPage2';
import "./test.css";
import SideMenu from './components/common/hamburgerMenu';

const App = ():JSX.Element => {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState("");
    interface TitleMapping {
        [key: string]: string;
    }
    const titleMapping : TitleMapping = {
        "/": "테스트",
        "/home": "홈",
    };
    React.useEffect(()=> {
        // switch (location.pathname) {
        //     case "/" :
        //         setPageTitle("테스트");
        //     break;
        //     case "/home" :
        //         setPageTitle("홈")
        // }
        setPageTitle(titleMapping[location.pathname] || "");
    }, [location.pathname])
    return (
        <div>
        <Header title={pageTitle} />
        <div className='hamburgerMenu'>
        <SideMenu />
        </div>
            <Routes>
            <Route path='/' element={<TestPage />} />
            <Route path='/test' element={<TestPage2 />} />
            </Routes>
        </div>
    );
}

export default App;