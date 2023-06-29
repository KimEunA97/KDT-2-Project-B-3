import React from "react";
import CurrentLocationButton from "../common/currentLocationButton";
const currentLocationInfo = ():JSX.Element=> {
  return <div>
    <h5>현재 위치 정보</h5>
    <CurrentLocationButton/>
  </div>
};
export default currentLocationInfo;