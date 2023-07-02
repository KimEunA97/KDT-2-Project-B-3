import React, { useEffect, useRef } from 'react';
import { TMap, Marker } from 'tmap-api';

const MapComponent: React.FC = () => {
  const mapRef = useRef<TMap | null>(null);
  const markerRef = useRef<Marker | null>(null);

  useEffect(() => {
    const API_KEY = 'YOUR_API_KEY'; // 발급받은 TMap API 키

    // TMap API 초기화
    const map = new TMap('mapDiv', API_KEY);

    // TMap 지도 객체와 마커 객체를 Ref에 저장
    mapRef.current = map;
    markerRef.current = new Marker({
      position: new TMap.LatLng(37.5, 127), // 초기 위치
      map: mapRef.current,
    });

    return () => {
      // 컴포넌트 언마운트 시 마커 제거
      markerRef.current?.setMap(null);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { current: marker } = markerRef;

      if (marker) {
        // 마커 위치 업데이트
        const position = mapRef.current?.fromContainerPixelToLatLng(
          new TMap.Point(clientX, clientY)
        );
        marker.setPosition(position);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="mapDiv" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
