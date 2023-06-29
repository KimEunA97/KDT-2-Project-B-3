import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: any;
  }
}

const TestPage = () => {
  useEffect(() => {
    const initTmap = () => {
      const map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
        width: '100%',
        height: '400px',
        zoom: 16,
      });

      const addMarker = (lonlatoption: { title: string; lonlat: any }) => {
        const marker = new window.Tmapv2.Marker({
          position: new window.Tmapv2.LatLng(
            lonlatoption.lonlat._lat,
            lonlatoption.lonlat._lng,
          ),
          map: map,
          title: lonlatoption.title,
        });
      };

      const searchPOI = () => {
        const center = map.getCenter();
        const optionObj = {
          reqCoordType: 'WGS84GEO',
          resCoordType: 'WGS84GEO',
          centerLon: 126.98702028,
          centerLat: 37.5652045,
        };
        const params = {
          onComplete: onComplete,
          onProgress: onProgress,
          onError: onError,
        };
        const tData = new window.Tmapv2.extension.TData();
        tData.getPOIDataFromSearchJson(
          encodeURIComponent('호프집'),
          optionObj,
          params,
        );
      };

      const onComplete = (responseData: any) => {
        console.log(responseData);

        if (responseData.searchPoiInfo && responseData.searchPoiInfo.pois) {
          const pois = responseData.searchPoiInfo.pois.poi;

          if (pois !== '') {
            pois.forEach((poi: any) => {
              const name = poi.name;
              const id = poi.id;
              const lon = poi.frontLon;
              const lat = poi.frontLat;
              const lonlatoption = {
                title: name,
                lonlat: new window.Tmapv2.LatLng(lat, lon),
              };
              addMarker(lonlatoption);
            });
          } else {
            alert('검색결과가 없습니다.');
          }
        } else {
          alert('유효한 응답 데이터가 아닙니다.');
        }

        map.setCenter(new window.Tmapv2.LatLng(37.5652045, 126.98702028));
        map.setZoom(14);
      };

      const onProgress = () => {};

      const onError = () => {
        alert('onError');
      };

      searchPOI();
    };

    let map: any;
    initTmap();
  }, []);

  return (
    <div>
      <div id="map_div"></div>
    </div>
  );
};

export default TestPage;

// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: any; // 또는 원하는 타입으로 변경
//   }
// }

// const Map = () => {
//   useEffect(() => {
//     const initTmap = () => {
//       const map = new window.Tmapv2.Map('map_div', {
//         center: new window.Tmapv2.LatLng(
//           37.566481622437934,
//           126.98502302169841,
//         ),
//         width: '390px',
//         height: '844px',
//         zoom: 18,
//       });
//       //Marker 객체 생성.
//       let marker = new window.Tmapv2.Marker({
//         position: new window.Tmapv2.LatLng(37.5652045, 126.98602028), //Marker의 중심좌표 설정.
//         map: map, //Marker가 표시될 Map 설정..
//       });
//     };

//     window.addEventListener('load', initTmap);
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default Map;

//지섭씨 완료된 코드
// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: {
//       Size: any;
//       Map: new (
//         arg0: string,
//         arg1: { center: any; width: string; height: string; zoom: number },
//       ) => {
//         setCenter: (arg0: any) => void;
//         setZoom: (arg0: number) => void;
//       };
//       LatLng: new (arg0: number, arg1: number) => any;
//       Marker: new (arg0: {
//         position: any;
//         icon: any;
//         iconSize: any;
//         map: {
//           setCenter: (arg0: any) => void;
//           setZoom: (arg0: number) => void;
//         };
//       }) => any;
//       InfoWindow: new (arg0: {
//         position: any;
//         type: number;
//         map: {
//           setCenter: (arg0: any) => void;
//           setZoom: (arg0: number) => void;
//         };
//       }) => any;
//     };
//   }
// }

// const Map: React.FC = () => {
//   let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };
//   let marker_s, marker_e;
//   //! 지섭씨 설명
//   useEffect(() => {
//     const initTmap = () => {
//       map = new window.Tmapv2.Map('map_div', {
//         //! TMAP 초기값 설정
//         center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
//         width: '100%',
//         height: '400px',
//         zoom: 19,
//       });

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;
//           //!앱 키 내껄로 사용해보기 -> 속도 문제
//           const options = {
//             method: 'POST',
//             headers: {
//               accept: 'application/json',
//               appKey: 'xzcK82uy9L4F0tX5C7RmC6Hpc9dpxvDp2ETeW89t',
//               'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//               tollgateFareOption: 16,
//               roadType: 32,
//               directionOption: 1,
//               endX: 127.373761,
//               endY: 36.345698,
//               endRpFlag: 'G',
//               reqCoordType: 'WGS84GEO',
//               startX: lon,
//               startY: lat,
//               gpsTime: '20191125153000',
//               speed: 10,
//               uncetaintyP: 1,
//               uncetaintyA: 1,
//               uncetaintyAP: 1,
//               carType: 0,
//               // startName: '%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD',
//               // endName: '%ED%97%A4%EC%9D%B4%EB%A6%AC',
//               // passList: '127.38454163183215,36.35127257501252',
//               // gpsInfoList: '126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1',
//               detailPosFlag: '2',
//               resCoordType: 'WGS84GEO',
//               sort: 'index',
//             }),
//           };

//           fetch(
//             'https://apis.openapi.sk.com/tmap/routes?version=1&callback=function',
//             options,
//           )
//             .then((response) => response.json())
//             .then((response) => console.log(response))
//             .catch((err) => console.error(err));

//           //? 현재 마커
//           marker_s = new window.Tmapv2.Marker({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             icon: 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png',
//             iconSize: new window.Tmapv2.Size(24, 38),
//             map: map,
//           });

//           //? 도착 마커
//           marker_e = new window.Tmapv2.Marker({
//             //!예시로 넣어준 값 바뀔예정이다.
//             position: new window.Tmapv2.LatLng(36.345698, 127.373761),
//             icon: 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png',
//             iconSize: new window.Tmapv2.Size(24, 38),
//             map: map,
//           });
//           //!나중에 쓸일이 있으면 사용 하기로함.
//           //? 메시지 창
//           const InfoWindow = new window.Tmapv2.InfoWindow({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             type: 2,
//             map: map,
//           });
//           //!현재위치
//           map.setCenter(new window.Tmapv2.LatLng(lat, lon));
//           map.setZoom(19); //!조절필요
//         });
//       }
//     };

//     window.addEventListener('load', initTmap);
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default Map;
