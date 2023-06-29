///예시로 만든 더미데이터

import React from "react";

const button = ():JSX.Element =>{
  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("위도",latitude);
          console.log("경도",longitude);
        },
        error => {
          console.log(error)
        }
      )
    } else {
      console.log("지원하지 않는 브라우저입니다.")
    }
  }
  return (<>
    <button onClick={getLocation}>위치 정보 받아오기</button>
  </>)
};
export default button