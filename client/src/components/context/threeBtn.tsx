import { createContext } from 'react';
// 최초 컨텍스트에 더미 데이터 넣음
const BtnContext = createContext<any>([
{firstBtn : {
  value : "Toilet",
  img : "",
  btnName : "first"
}},
{secondBtn : {
  value : "gasStation",
  img : "",
  btnName : "second"
}},
{thirdBtn : {
  value : "convenienceStore",
  img : "",
  btnName : "third"
}}

]);

export default BtnContext;