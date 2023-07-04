import React from 'react';
// import PWABtn from "../services/PWA_InstallBtn";
type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
    <header>
      <h1>{title}</h1>
    </header>
    {/* <PWABtn /> */}
    </>
  );
};

export default Header;