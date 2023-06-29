import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

interface ILocation {
  latitude: number
  longitude: number
}

export const useGeoLocation = (options = {}):JSX.Element => {
  const [location, setLocation] = useState<ILocation>()
  const [error, setError] = useState('')

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])

  return { location, error }
}


/*
const mapComponentButton: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  function getRecentLocation() {

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            //console.log('Current Location Lat:', currentLocation.lat);
            //console.log('Current location Lng:', currentLocation.lng);
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    });
    
}

  return (
    <>
      <button onClick={getRecentLocation}>
        위치 정보 받아오기
     </button>
   </>
 );
};

export default mapComponentButton;
*/