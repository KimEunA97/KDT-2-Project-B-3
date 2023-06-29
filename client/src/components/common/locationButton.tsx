/*
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
}

const position = () => {
  const { location, error } = useGeoLocation(geolocationOptions)

  return (
    <div>{location.latitude, location.longitude}</div>
  )
}

export default position
*/

import React from 'react';
import { useGeoLocation } from "./currentLocationView";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const Position = ():JSX.Element => {
  const { location, error } = useGeoLocation(geolocationOptions);

  return (
    <div>
      {location && (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
};

export default Position;
