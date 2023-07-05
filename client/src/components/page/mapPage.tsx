import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button, DefaultBtnContextData } from '../context/btnContext';
// import '../style/map.css';

declare global {
  interface Window {
    Tmapv2: {
      Projection: any;
      Label: any;
      Point: any;
      LatLngBounds: any;
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
        title: any;
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

const Map: React.FC<{ selectedBtn: string }> = ({ selectedBtn }) => {
  const DefaultBtnContext = createContext<{
    btnContextData: Button[];
    updateBtnContext: (updatedData: Button[]) => void;
  }>({
    btnContextData: DefaultBtnContextData,
    updateBtnContext: () => {},
  });
  const [dynamicDiv, setDynamicDiv] = useState<JSX.Element | null>(null);
  const [map, setMap] = useState<any>(null);
  const defaultBtnContext = useContext(DefaultBtnContext);
  const { btnContextData } = defaultBtnContext;

  //! 페이지가 로딩이 된 후 호출하는 함수입니다.
  function initTmap() {
    let marker_s;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        // map 생성
        // Tmap.map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
        const newMap = new window.Tmapv2.Map('map_div', {
          center: new window.Tmapv2.LatLng(lat, lon), // 지도 초기 좌표
          width: '100%', // 지도의 넓이
          height: '100%', // 지도의 높이
          zoom: 18, // 지도의 줌레벨
        });
        setMap(newMap);
        marker_s = new window.Tmapv2.Marker({
          position: new window.Tmapv2.LatLng(lat, lon),
          icon: 'https://i.ibb.co/pyJJ1MF/circle.png',
          iconSize: new window.Tmapv2.Size(20, 20),
          map: map,
          title: name,
        });
      });
    }
  }

  //! 마커의 옵션을 설정해주는 함수입니다.
  function addMarker(lonlatoption: {
    lonlat: any;
    position: any;
    icon?: any;
    iconSize?: any;
    map: {
      setCenter: (arg0: any) => void;
      setZoom: (arg0: number) => void;
    };
    title: any;
  }) {
    // 마커 생성
    var marker = new window.Tmapv2.Marker({
      position: new window.Tmapv2.LatLng(
        lonlatoption.lonlat.latitude(),
        lonlatoption.lonlat.longitude(),
      ),
      icon: lonlatoption.icon,
      iconSize: lonlatoption.iconSize,
      map: lonlatoption.map,
      title: lonlatoption.title, // title 속성 추가
    });
  }

  //! 특정 장소를 검색하는 함수입니다.
  function searchPOI(btnValue: string) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        var center = map.getCenter(); // map의 중심 좌표 값을 받아 옵니다.
        var optionObj = {
          reqCoordType: 'WGS84GEO', //요청 좌표계 옵셥 설정입니다.
          resCoordType: 'WGS84GEO', //응답 좌표계 옵셥 설정입니다.
          centerLon: lon, //POI검색시 중앙좌표의 경도입니다.
          centerLat: lat, //POI검색시 중앙좌표의 위도입니다.
        };
        var params = {
          onComplete: onPOIComplete,
          onError: onError,
        };
        var tData = new window.Tmapv2.extension.TData();
        tData.getPOIDataFromSearchJson(
          encodeURIComponent(btnValue),
          optionObj,
          params,
        ); //encodeURIComponent함수로 해당 파라메터 값을 처리합니다.
      });
    }
  }

  //! POI검색
  function onPOIComplete(this: any) {
    console.log(this._responseData); //json로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let count = 0;

        if (this._responseData.searchPoiInfo.pois.poi != '') {
          this._responseData.searchPoiInfo.pois.poi
            .slice(0, 5)
            .forEach(
              (item: { name: any; id: any; frontLon: any; frontLat: any }) => {
                //결과를 반복문으로 돌려 마커를 등록합니다.
                //response 데이터중 원하는 값을 찾습니다.
                var name = item.name;
                var id = item.id;
                var lon = item.frontLon;
                var lat = item.frontLat;
                var lonlatoption = {
                  title: name, //마커 라벨 text 설정
                  lonlat: new window.Tmapv2.LatLng(lat, lon), //마커 라벨 좌표 설정
                  position: map,
                  map: map,
                };
                count += 1;
                let nameAndPosition = {
                  number: count,
                  name: item.name,
                  lon: item.frontLon,
                  lat: item.frontLat,
                };
                console.log(nameAndPosition);
                addMarker(lonlatoption); //마커를 추가하는 함수입니다.
              },
            );
          //* 동적으로 개수 만큼 div생성
          const dynamicDivContent = this._responseData.searchPoiInfo.pois.poi
            .slice(0, 5)
            .map(
              (item: { name: any; id: any; frontLon: any; frontLat: any }) => (
                <div style={{display : 'flex', justifyContent : 'center',borderTop: "1px solid #424242", width : '100%', height : '20%'}}
                  key={item.id}
                  onClick={() => getRP(item.frontLat, item.frontLon)}
                >
                  {item.name}
                </div>
              ),
            );
          setDynamicDiv(<div style={{width : '100%', height : '40%',display : 'flex', flexDirection : 'column', justifyContent : 'space-around', alignItems : 'center',position: 'absolute', bottom: 0, overflow: "scroll", backgroundColor : 'white',
          left: 0, right : 0}}>{dynamicDivContent}</div>);
        } else {
          alert('검색결과가 없습니다.');
        }
        map.setCenter(new window.Tmapv2.LatLng(lat, lon));
        map.setZoom(15);
      });
    }
  }

  //! 경로 설정 함수
  function getRP(selectLat: any, selectLon: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let s_latlng = new window.Tmapv2.LatLng(lat, lon);
        //? 도착지 설정되면 좌표값으로 입력됨
        let e_latlng = new window.Tmapv2.LatLng(selectLat, selectLon);
        let marker_s;

        let optionObj = {
          reqCoordType: 'WGS84GEO', //요청 좌표계 옵셥 설정입니다.
          resCoordType: 'WGS84GEO', //응답 좌표계 옵셥 설정입니다.
          trafficInfo: 'Y',
        };

        let params = {
          onComplete: onComplete,
          onError: onError,
        };

        // TData 객체 생성
        let tData = new window.Tmapv2.extension.TData();

        // TData 객체의 경로요청 함수
        tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
        setInterval(function () {
          var name;
          marker_s = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(lat, lon),
            icon: 'https://i.ibb.co/pyJJ1MF/circle.png',
            iconSize: new window.Tmapv2.Size(20, 20),
            map: map,
            title: name,
          });
        }, 3000);
      });
    }
  }

  useEffect(() => {
    if (selectedBtn) {
      searchPOI(selectedBtn);
    }
  }, [selectedBtn]);

  useEffect(() => {
    // DefaultBtnContext의 값이 업데이트될 때 initTmap 함수 실행
    initTmap();

  }, [btnContextData]);

  function onComplete(this: {
    _responseData: any;
    onComplete: () => void;
    onProgress: any;
    onError: any;
  }): void {
    console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.

    let jsonObject = new window.Tmapv2.extension.GeoJSON();
    let jsonForm = jsonObject.rpTrafficRead(this._responseData);

    //교통정보 표출시 생성되는 LineColor 입니다.
    let trafficColors = {
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
    map.setZoom(18);
  }

  function onError() {
    alert('onError');
  }

  return (
    <>
      <div id="map_div">
      </div>
      {/* 단축 버튼 클릭하면 생기는 div */}
      <>
        {dynamicDiv}
      </>
      {/* //? 경로안내로 버튼 */}
    </>
  );
};

export default Map;