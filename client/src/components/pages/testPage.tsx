import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: {
      Size: any;
      Map: new (
        arg0: string,
        arg1: { center: any; width: string; height: string; zoom: number },
      ) => {
        setCenter: (arg0: any) => void;
        setZoom: (arg0: number) => void;
      };
      LatLng: new (arg0: number, arg1: number) => any;
      Marker: new (arg0: {
        position: any;
        icon: any;
        iconSize: any;
        map: {
          setCenter: (arg0: any) => void;
          setZoom: (arg0: number) => void;
        };
      }) => any;
      InfoWindow: new (arg0: {
        position: any;
        type: number;
        map: {
          setCenter: (arg0: any) => void;
          setZoom: (arg0: number) => void;
        };
      }) => any;
    };
  }
}

const Map: React.FC = () => {
  let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };
  let marker_s, marker_e;

  useEffect(() => {

    const initTmap = () => {
      map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
        width: '390px',
        height: '844px',
        zoom: 19,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              appKey: 'xzcK82uy9L4F0tX5C7RmC6Hpc9dpxvDp2ETeW89t',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              //* 요금 가중치 정보
              tollgateFareOption: 16,
              //* 출발 지점의 도로 타입 (32는 기본값(가까운도로))
              roadType: 32,
              //* 출발지점의 주행방향 (1은 주행방향 우선)
              directionOption: 1,
              //* 목적지 x좌표
              endX: 127.373761,
              //* 목적지 y좌표
              endY: 36.345698,
              //* 목적지의 RpPlag
              endRpFlag: 'G',
              //* WGS84GEO -> 위경도
              reqCoordType: 'WGS84GEO',
              //* 출발지 x좌표
              startX: lon,
              //* 출발지 y좌표
              startY: lat,
              //* GPS타임
              gpsTime: '20191125153000',
              //* 차량 진행속도
              speed: 10,
              //* 위성수 0 ~ 12
              uncetaintyP: 1,
              //* 측위 방법 1: 측위 불량
              uncetaintyA: 1,
              //* (Horizontal Dilution of Precision: 0.1단위로 정수화)
              uncetaintyAP: 1,
              //* 톨게이트 요금에 대한 차종(0: 미선택)
              carType: 0,
              //* 출발지 명칭
              // startName: '%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD',
              //* 도착지 명칭
              // endName: '%ED%97%A4%EC%9D%B4%EB%A6%AC',
              //* 경유지들의 도착
              // passList: '127.38454163183215,36.35127257501252',
              //* gps궤적 정보 목록
              // gpsInfoList: '126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1',
              detailPosFlag: '2',
              resCoordType: 'WGS84GEO',
              sort: 'index'
            })
          };
          
          fetch('https://apis.openapi.sk.com/tmap/routes?version=1&callback=function', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

          //? 현재 마커
          marker_s = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(lat, lon),
            icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
						iconSize : new window.Tmapv2.Size(24, 38),
            map: map,
          });

          //? 도착 마커
          marker_e = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(36.345698, 127.373761),
            icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
						iconSize : new window.Tmapv2.Size(24, 38),
            map: map,
          });
          
          //? 메시지 창
          const InfoWindow = new window.Tmapv2.InfoWindow({
            position: new window.Tmapv2.LatLng(lat, lon),
            type: 2,
            map: map,
          });

          map.setCenter(new window.Tmapv2.LatLng(lat, lon));
          map.setZoom(19);
        });
      }
    };

    window.addEventListener('load', initTmap);
  }, []);

  return <div id="map_div"></div>;
};

export default Map;