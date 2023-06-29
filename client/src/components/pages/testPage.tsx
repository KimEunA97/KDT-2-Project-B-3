import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: any; // 또는 원하는 타입으로 변경
  }
}

const Map = () => {
  useEffect(() => {
    const initTmap = () => {
      const map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(
          37.566481622437934,
          126.98502302169841,
        ),
        width: '390px',
        height: '844px',
        zoom: 18,
      });
      //Marker 객체 생성.
      const marker = new window.Tmapv2.Marker({
        position: new window.Tmapv2.LatLng(37.5652045, 126.98602028), //Marker의 중심좌표 설정.
        map: map, //Marker가 표시될 Map 설정..
      });
    };

    window.addEventListener('load', initTmap);
  }, []);

  return <div id="map_div"></div>;
};

export default Map;

// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: {
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
//   let marker;

//   useEffect(() => {
//     const initTmap = () => {
//       map = new window.Tmapv2.Map('map_div', {
//         center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
//         width: '100%',
//         height: '400px',
//         zoom: 19,
//       });

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;

//           // const content = `
//           //   <div style='position: relative; border-bottom: 1px solid #dcdcdc; line-height: 18px; padding: 0 35px 2px 0;'>
//           //     <div style='font-size: 12px; line-height: 15px;'>
//           //       <span style='display: inline-block; width: 14px; height: 14px; background-image: url(/resources/images/common/icon_blet.png); vertical-align: middle; margin-right: 5px;'></span>현재위치
//           //     </div>
//           //   </div>
//           // `;

//           marker = new window.Tmapv2.Marker({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             map: map,
//           });

//           const InfoWindow = new window.Tmapv2.InfoWindow({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             // content: content,
//             type: 2,
//             map: map,
//           });

//           map.setCenter(new window.Tmapv2.LatLng(lat, lon));
//           map.setZoom(19);
//         });
//       }
//     };

//     window.addEventListener('load', initTmap);
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default Map;

// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: any; // 또는 원하는 타입으로 변경
//   }
// }

// const Map: React.FC = () => {
//   let markerList: any[] = [];
//   let beforeMarkerList: any[] = [];
//   let map: { setZoom: (arg0: number) => void; };
//   let myVar: string | number | NodeJS.Timeout | undefined;
//   let xhttp;
//   let xmlDoc: any;
//   let $xml: any;
//   let $intRate: any[];

//   const myFunction = (cnt: number, checkLevel: number) => {
//     $intRate.forEach(function (element: { getElementsByTagName: (arg0: string) => { childNodes: { nodeValue: any; }[]; }[]; }) {
//       const name = element.getElementsByTagName("name")[0].childNodes[0].nodeValue;
//       const number = element.getElementsByTagName("number")[0].childNodes[0].nodeValue;
//       const affiliation = element.getElementsByTagName("affiliation")[0].childNodes[0].nodeValue;
//       const distance = element.getElementsByTagName("distance")[cnt].childNodes[0].nodeValue;
//       const speed = element.getElementsByTagName("speed")[cnt].childNodes[0].nodeValue;
//       const content = `
//         <div class="wrap">
//           <div class="info">
//             <div class="title">
//               ${name}
//             </div>
//             <div class="body">
//               <div class="desc">
//                 <div><span>차량번호</span> ${number}</div>
//                 <div><span>소속지사</span> ${affiliation}</div>
//                 <div><span>운행거리</span> ${distance}km</div>
//                 <div><span>현재속도</span> ${speed}km/h</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;

//       if (cnt > 0 && cnt >= 1 && cnt < 42 && checkLevel != 4) {
//         const beforePoint = element.getElementsByTagName("coordinates")[cnt - 1].childNodes[0].nodeValue.split(",");
//         const beforeIcon = '/public/before_car.png';
//         const beforeMarker = new window.Tmapv2.Marker({
//           position: new window.Tmapv2.LatLng(parseFloat(beforePoint[1]), parseFloat(beforePoint[0])),
//           icon: beforeIcon,
//           map: map
//         });
//         beforeMarkerList.push(beforeMarker);
//       }

//       const point = element.getElementsByTagName("coordinates")[cnt].childNodes[0].nodeValue.split(",");
//       const icons = '/public/pin_car.png';
//       const marker = new window.Tmapv2.Marker({
//         position: new window.Tmapv2.LatLng(parseFloat(point[1]), parseFloat(point[0])),
//         icon: icons,
//         map: map
//       });
//       markerList.push(marker);
//     });
//   };

//   const RESET_MARKER = () => {
//     markerList.forEach((marker) => {
//       if (undefined != marker) {
//         marker.setMap(null);
//       }
//     });
//     markerList = [];
//   };

//   const RESET_MARKER2 = () => {
//     beforeMarkerList.forEach((marker) => {
//       if (undefined != marker) {
//         marker.setMap(null);
//       }
//     });
//     beforeMarkerList = [];
//   };

//   useEffect(() => {
//     const initTmap = () => {
//       map = new window.Tmapv2.Map("map_div", {
//         center: new window.Tmapv2.LatLng(37.57004566771894, 126.97682516925155),
//         width: "100%",
//         height: "400px"
//       });
//       map.setZoom(15);

//       xhttp = new XMLHttpRequest();

//       xhttp.open("GET", "/web/usecase/sample.kml", false);
//       xhttp.send();
//       const parser = new DOMParser();
//       const prtcl = parser.parseFromString(xhttp.responseText, "text/xml");
//       console.log(prtcl);
//       let marker: any;
//       let beforeMarker: any;
//       let popup: any, popup2: any;
//       let beforePopup: any, beforePopup2: any;
//       const $intRate = prtcl.getElementsByTagName("Placemark");
//       if ($intRate.length === 0) {
//         console.error("No placemark found.");
//         return;
//       }

//       myFunction(0, 0);

//       let cnt = 1;
//       myVar = setInterval(function () {
//         RESET_MARKER();
//         const count = $intRate[0].getElementsByTagName("coordinates").length;
//         console.log(count);
//         if (cnt === count) {
//           cnt = 0;
//           RESET_MARKER();
//           RESET_MARKER2();
//         }
//         myFunction(cnt, 0);
//         cnt++;
//       }, 1000);
//     };

//     initTmap();

//     return () => {
//       clearTimeout(myVar);
//       markerList = [];
//       RESET_MARKER2();
//       const lastIndex = $intRate[0].getElementsByTagName("coordinates").length - 1;
//       myFunction(lastIndex, 0);

//       const result = '총 거리 : 4.412km 총 소요시간 : 22분';
//       const resultDiv = document.getElementById("result");
//       if (resultDiv) {
//         resultDiv.innerHTML = result;
//       }
//     };
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default Map;
