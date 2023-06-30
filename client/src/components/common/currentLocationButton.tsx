///예시로 만든 더미데이터

/*
import React from "react";

const currentLocationButton = ():JSX.Element =>{
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
export default currentLocationButton;
*/


/*
import React from "react";

const Button = (): JSX.Element => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("위도", latitude);
                console.log("경도", longitude);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (permissionStatus.state === "prompt") {
            console.log("위치 정보 권한을 허용해야 합니다.");
          } else {
            console.log("위치 정보 권한이 거부되었습니다.");
          }
        })
        .catch((error) => {
          console.log("권한 요청에 실패했습니다.", error);
        });
    } else {
      console.log("지원하지 않는 브라우저입니다.");
    }
  }

  return (
    <>
      <button onClick={getLocation}>위치 정보 받아오기</button>
    </>
  );
};

export default Button;
*/


/*
import React from "react";

const currentLocationButton = ():JSX.Element =>{
  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("위도", latitude);
          console.log("경도", longitude);
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true}
      )
    } else {
      console.log("지원하지 않는 브라우저입니다.")
    }
  }
  return (<>
    <button onClick={getLocation}>위치 정보 받아오기</button>
  </>)
};
export default currentLocationButton;
*/


/*
import React from "react";

const currentLocationButton = ():JSX.Element =>{
  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("위도", latitude);
          console.log("경도", longitude);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("지원하지 않는 브라우저입니다.")
    }
  }
  return (<>
    <button onClick={getLocation}>위치 정보 받아오기</button>
  </>)
};
export default currentLocationButton;
*/

/*
import React, { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  return (
    <div>
      <h1>Your current location is:</h1>
      <p>
        Latitude: {location?.latitude}<br />
        Longitude: {location?.longitude}
      </p>
    </div>
  );
};

export default CurrentLocation;
*/

/*
import React, { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    navigator.geolocation.requestPermission((permission) => {
      if (permission === "granted") {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation(position.coords);
          },
          error => {
            console.log(error);
          },
        );
      } else {
        console.log("위치 정보에 대한 액세스 권한이 거부되었습니다.");
      }
    });
  }, []);

  return (
    <div>
      <h1>Your current location is:</h1>
      <p>
        Latitude: {location?.latitude}<br />
        Longitude: {location?.longitude}
      </p>
    </div>
  );
};

export default CurrentLocation;
*/

/*
import React, { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    const handleLocation = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      console.log(error);
    };

    const requestLocation = () => {
      const options = {
        maximumAge: 0,
        timeout: 5000,
        enableHighAccuracy: true
      };

      navigator.geolocation.getCurrentPosition(handleLocation, handleError, options);
    };

    const requestPermission = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" })
          .then(permissionStatus => {
            if (permissionStatus.state === "granted") {
              requestLocation();
            } else if (permissionStatus.state === "prompt") {
              const watchId = navigator.geolocation.watchPosition(handleLocation, handleError, {
                maximumAge: 0,
                timeout: 5000,
                enableHighAccuracy: true
              });
              return () => {
                navigator.geolocation.clearWatch(watchId);
              };
            } else {
              console.log("위치 정보에 대한 액세스 권한이 거부되었습니다.");
            }
          })
          .catch(error => {
            console.log("Permission query error:", error);
          });
      } else {
        console.log("Permissions API가 지원되지 않는 브라우저입니다.");
      }
    };

    requestPermission();
  }, []);

  return (
    <div>
      <h1>Your current location is:</h1>
      <p>
        Latitude: {location?.latitude}<br />
        Longitude: {location?.longitude}
      </p>
    </div>
  );
};

export default CurrentLocation;
*/


import React, { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    const handleLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      
      // Reverse geocoding using OpenStreetMap Nominatim API
      const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=<span class="math-inline">\{latitude\}&lon\=</span>{longitude}';

      const handleError = (error: GeolocationPositionError) => {
        console.log(error);
      };
      
      fetch(url)
      .then(response => response.json())
      .then(data => {
      if (data.address) {
      console.log("Your current address:", data.address);
      }
      })
      .catch(error => {
      handleError(error);
      });
      };
    const requestLocation = () => {
      const options = {
        maximumAge: 0,
        timeout: 5000,
        enableHighAccuracy: true
      };

      navigator.geolocation.getCurrentPosition(handleLocation, handlelError, options);
    };
    
    const requestPermission = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" })
          .then(permissionStatus => {
            if (permissionStatus.state === "granted") {
              requestLocation();
            } else if (permissionStatus.state === "prompt") {
              const watchId = navigator.geolocation.watchPosition(handleLocation, handleError, {
                maximumAge: 0,
                timeout: 5000,
                enableHighAccuracy: true
              });
              return () => {
                navigator.geolocation.clearWatch(watchId);
              };
            } else {
              console.log("위치 정보에 대한 액세스 권한이 거부되었습니다.");
            }
          })
          .catch(error => {
            console.log("Permission query error:", error);
          });
      } else {
        console.log("Permissions API가 지원되지 않는 브라우저입니다.");
      }
    };

    requestPermission();
  }, []);

  return (
    <div>
      <h1>Your current location is:</h1>
      <p>
        Latitude: {location?.latitude}<br />
        Longitude: {location?.longitude}
      </p>
    </div>
  );
};

export default CurrentLocation;

