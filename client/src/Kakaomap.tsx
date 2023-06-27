import React from 'react';
import { Map, MapMarker, MapTypeId } from 'react-kakao-maps-sdk';

const KakaoMap = function () {
  return (
    <Map
      center={{ lat: 36.3489005, lng: 127.37733 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 36.3489005, lng: 127.37733 }}>
        <div style={{ color: '#000' }}>오라클빌딩에 마커표시!</div>
      </MapMarker>
      {/*지도에 교통정보 표시하기*/}
      <MapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
    </Map>
  );
};

export default KakaoMap;
