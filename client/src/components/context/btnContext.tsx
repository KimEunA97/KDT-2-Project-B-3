import { createContext } from 'react';
// 최초 컨텍스트에 더미 데이터 넣음
export interface Button {
  value: string;
  image: string;
  name: string;
}
export const DefaultBtnData = createContext<Button[]>([{
  value: '편의점',
  image: 'convenience-store.jpg',
  name: '편의점',
},
{
  value: '카페',
  image: 'cafe.jpg',
  name: '카페',
},
{
  value: '주유소',
  image: 'gas-station.jpg',
  name: '주유소',
}])
export const BtnContext = createContext<Button[]>([
  {
    value: '편의점',
    image: 'convenience-store.jpg',
    name: '편의점',
  },
  {
    value: '카페',
    image: 'cafe.jpg',
    name: '카페',
  },
  {
    value: '주유소',
    image: 'gas-station.jpg',
    name: '주유소',
  },
  {
    value: '화장실',
    image: 'restroom.jpg',
    name: '화장실',
  },
]);
export const BtnContextData : Button[] = [
  {
    value: '편의점',
    image: 'convenience-store.jpg',
    name: '편의점',
  },
  {
    value: '카페',
    image: 'cafe.jpg',
    name: '카페',
  },
  {
    value: '주유소',
    image: 'gas-station.jpg',
    name: '주유소',
  },
  {
    value: '화장실',
    image: 'restroom.jpg',
    name: '화장실',
  },
];
