import React, { createContext, ReactNode, useState } from 'react';
//src 안으로 images 폴더 넣었습니다.
import cafeImage from '../images/cafe.png';
import convenienceStoreImage from '../images/convenience-store.png';
import gasStationImage from '../images/gas_station.png';
import restroomImage from '../images/restroom.png';

// 버튼 관련 데이터 인터페이스
export interface Button {
  value: string;
  image: string;
  name: string;
}
// ! 기본 버튼 데이터(3개)
// 기본 버튼 데이터
const DefaultBtnContextData: Button[] = [
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
];
  // 기본 버튼 컨텍스트 API 생성
  const DefaultBtnContext = createContext<{ btnContextData: Button[]; updateBtnContext: (updatedData: Button[]) => void }>({
    btnContextData: DefaultBtnContextData,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    updateBtnContext: () => {},
  });

// ! 모든 버튼 데이터
// 모든 버튼 컨텍스트에 사용 할 데이터
const BtnContextData: Button[] = [
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '카페',
    image: cafeImage,
    name: '카페',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
];
// 모든 버튼 컨텍스트 API 생성
const BtnContext = createContext<Button[]>(BtnContextData);

// provider 모듈 인터페이스
interface DefaultBtnContextProviderProps {
  children: ReactNode;
}
// provider 모듈
export const DefaultBtnContextProvider: React.FC<DefaultBtnContextProviderProps> = ({ children }: DefaultBtnContextProviderProps) => {
  // provider 제공 데이터 상태 관리
  const [btnContextData, setBtnContextData] = useState<Button[]>(DefaultBtnContextData);
  //  provider 제공 데이터 업데이트 함수
  const updateBtnContext = (updatedData: Button[]) => {
    setBtnContextData(updatedData);
  };

  return (
    // 업데이트 함수, 기본 데이터 제공
    <DefaultBtnContext.Provider value={{ btnContextData, updateBtnContext }}>
      {children}
    </DefaultBtnContext.Provider>
  );
};
export { DefaultBtnContext, BtnContext, BtnContextData, DefaultBtnContextData };

