import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: {
      extension: any;
      Polyline: any;
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

  function onError() {
    alert('onError');
  }

  function getRP() {
    var s_latlng = new window.Tmapv2.LatLng(37.553756, 126.925356);
    var e_latlng = new window.Tmapv2.LatLng(37.554034, 126.975598);

<<<<<<< HEAD
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              appKey: 'gCHZUQwAx01IpZitfev8C3MlsaVbqskZ8rOwKTVe',
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
=======
    var optionObj = {
      reqCoordType: 'WGS84GEO', //요청 좌표계 옵셥 설정입니다.
      resCoordType: 'WGS84GEO', //응답 좌표계 옵셥 설정입니다.
      trafficInfo: 'Y',
>>>>>>> e6163ef877e411ae27ab4b60cc2a2158eb90e5ad
    };

    var params = {
      onComplete: onComplete,
      onError: onError,
    };

    // TData 객체 생성
    var tData = new window.Tmapv2.extension.TData();

    // TData 객체의 경로요청 함수
    tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
  }

  // const initTmap = () => {
  //   map = new window.Tmapv2.Map('map_div', {
  //     center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
  //     width: '390px',
  //     height: '844px',
  //     zoom: 19,
  //   });

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       let lat = position.coords.latitude;
  //       let lon = position.coords.longitude;

  //       const options = {
  //         method: 'POST',
  //         headers: {
  //           accept: 'application/json',
  //           appKey: 'qZG4QJPNGB3ZgaNo1uAyO7vnxKqYKDMk7x7Z6fJv',
  //           'content-type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           //* 요금 가중치 정보
  //           tollgateFareOption: 16,
  //           //* 출발 지점의 도로 타입 (32는 기본값(가까운도로))
  //           roadType: 32,
  //           //* 출발지점의 주행방향 (1은 주행방향 우선)
  //           directionOption: 1,
  //           //* 목적지 x좌표
  //           endX: 127.373761,
  //           //* 목적지 y좌표
  //           endY: 36.345698,
  //           //* 목적지의 RpPlag
  //           endRpFlag: 'G',
  //           //* WGS84GEO -> 위경도
  //           reqCoordType: 'WGS84GEO',
  //           //* 출발지 x좌표
  //           startX: lon,
  //           //* 출발지 y좌표
  //           startY: lat,
  //           //* GPS타임
  //           gpsTime: '20191125153000',
  //           //* 차량 진행속도
  //           speed: 10,
  //           //* 위성수 0 ~ 12
  //           uncetaintyP: 1,
  //           //* 측위 방법 1: 측위 불량
  //           uncetaintyA: 1,
  //           //* (Horizontal Dilution of Precision: 0.1단위로 정수화)
  //           uncetaintyAP: 1,
  //           //* 톨게이트 요금에 대한 차종(0: 미선택)
  //           carType: 0,
  //           //* 출발지 명칭
  //           // startName: '%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD',
  //           //* 도착지 명칭
  //           // endName: '%ED%97%A4%EC%9D%B4%EB%A6%AC',
  //           //* 경유지들의 도착
  //           // passList: '127.38454163183215,36.35127257501252',
  //           //* gps궤적 정보 목록
  //           // gpsInfoList: '126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1',
  //           detailPosFlag: '2',
  //           resCoordType: 'WGS84GEO',
  //           sort: 'index',
  //         }),
  //       };

  //       fetch(
  //         'https://apis.openapi.sk.com/tmap/routes?version=1&callback=function',
  //         options,
  //       )
  //         .then((response) => response.json())
  //         .then((response) => console.log(response))
  //         .catch((err) => console.error(err));

  //       //? 현재 마커
  //       marker_s = new window.Tmapv2.Marker({
  //         position: new window.Tmapv2.LatLng(lat, lon),
  //         icon: 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png',
  //         iconSize: new window.Tmapv2.Size(24, 38),
  //         map: map,
  //       });

  //       //? 도착 마커
  //       marker_e = new window.Tmapv2.Marker({
  //         position: new window.Tmapv2.LatLng(36.345698, 127.373761),
  //         icon: 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png',
  //         iconSize: new window.Tmapv2.Size(24, 38),
  //         map: map,
  //       });

  //       //? 메시지 창
  //       const InfoWindow = new window.Tmapv2.InfoWindow({
  //         position: new window.Tmapv2.LatLng(lat, lon),
  //         type: 2,
  //         map: map,
  //       });
  //     });
  //   }
  // };

  useEffect(() => {
    // 페이지가 로딩이 된 후 호출하는 함수입니다.
    function initTmap() {
      // map 생성
      // Tmap.map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
      map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.5652045, 126.98702028), // 지도 초기 좌표
        width: '100%', // 지도의 넓이
        height: '400px', // 지도의 높이
        zoom: 17, // 지도의 줌레벨
      });
    }
    window.addEventListener('load', initTmap);
  }, []);

  function onComplete(this: {
    _responseData: any;
    onComplete: () => void;
    onProgress: any;
    onError: any;
  }):void {
    console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.

    var jsonObject = new window.Tmapv2.extension.GeoJSON();
    var jsonForm = jsonObject.rpTrafficRead(this._responseData);

    //교통정보 표출시 생성되는 LineColor 입니다.
    var trafficColors = {
      // 사용자가 임의로 색상을 설정할 수 있습니다.
      // 교통정보 옵션 - 라인색상
      trafficDefaultColor: '#000000', //교통 정보가 없을 때
      trafficType1Color: '#009900', //원할
      trafficType2Color: '#7A8E0A', //서행
      trafficType3Color: '#8E8111', //정체
      trafficType4Color: '#FF0000', //정체
    };
    jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        map.setCenter(new window.Tmapv2.LatLng(lat, lon));
      }, onError); // onError 함수 추가
    }

    map.setZoom(14);
  }

  return (
    <div>
      <div id="map_div"></div>
      <button onClick={getRP}>경로실행</button>
    </div>
  );
};

export default Map;
