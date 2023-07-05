// /*
// import React, { useState, useEffect, useRef } from "react";
// import Tmapv2 from "tmapv2";

// const MovingMarker = () => {
//   const mapRef = useRef<Tmapv2.Map | null>(null);
//   const markerRef = useRef<Tmapv2.Marker | null>(null);
//   const polylineRef = useRef<Tmapv2.Polyline | null>(null);

//   useEffect(() => {
//     // Initialize the map
//     const initMap = () => {
//       const map = new Tmapv2.Map("map_div", {
//         center: new Tmapv2.LatLng(37.5665, 126.9780),
//         width: "100%",
//         height: "400px",
//         zoom: 15,
//       });

//       mapRef.current = map;
//     };

//     initMap();
//   }, []);

//   useEffect(() => {
//     // Watch user's current location
//     const watchLocation = () => {
//       const handleLocation = (position: GeolocationPosition) => {
//         const { latitude, longitude } = position.coords;
//         const currentLocation = new Tmapv2.LatLng(latitude, longitude);

//         const map = mapRef.current;
//         const marker = markerRef.current;

//         if (map) {
//           if (marker) {
//             marker.setMap(null);
//           }

//           const newMarker = new Tmapv2.Marker({
//             position: currentLocation,
//             icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png",
//             map,
//           });

//           markerRef.current = newMarker;
//         }
//       };

//       const handleError = (error: GeolocationPositionError) => {
//         console.log("Geolocation error:", error);
//       };

//       const options = {
//         maximumAge: 0,
//         timeout: 5000,
//         enableHighAccuracy: true,
//       };

//       const watchId = navigator.geolocation.watchPosition(handleLocation, handleError, options);

//       return () => {
//         navigator.geolocation.clearWatch(watchId);
//       };
//     };

//     watchLocation();
//   }, []);

//   const handleDestinationChange = (latitude: number, longitude: number) => {
//     const map = mapRef.current;

//     if (map) {
//       const destination = new Tmapv2.LatLng(latitude, longitude);

//       if (polylineRef.current) {
//         polylineRef.current.setMap(null);
//       }

//       const polyline = new Tmapv2.Polyline({
//         path: [markerRef.current?.position, destination],
//         strokeColor: "#3366FF",
//         strokeWeight: 6,
//         map,
//       });

//       polylineRef.current = polyline;
//     }
//   };

//   return (
//     <div>
//       <div id="map_div"></div>
//       <div>
//         <h3>Destination</h3>
//         <input
//           type="text"
//           placeholder="Latitude"
//           onChange={(e) => {
//             handleDestinationChange(parseFloat(e.target.value), markerRef.current?.position.getLng() || 0);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Longitude"
//           onChange={(e) => {
//             handleDestinationChange(markerRef.current?.position.getLat() || 0, parseFloat(e.target.value));
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default MovingMarker;
// */


// /*
// import React, { useState, useEffect } from "react";
// import Tmap from "./tmap.config";

// const App = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [distance, setDistance] = useState(0);

//   useEffect(() => {
//     // Get Tmap API key
//     const tmapKey = "YOUR_TMAP_API_KEY";

//     // Create Tmap map
//     const map = new Tmap(tmapKey);

//     // Set map center
//     map.setCenter(new Tmap.LatLng(37.566617, 126.978377));

//     // Set map zoom level
//     map.setZoom(15);

//     // Set map onMapClick event
//     map.onMapClick((event) => {
//       const latLng = event.latLng;

//       // Create marker
//       const marker = new Tmap.Marker({
//         position: latLng,
//       });

//       // Set marker position
//       setMarker(marker);

//       // Set marker distance
//       setDistance(calculateDistance(latLng));
//     });

//     setMap(map);
//   }, []);

//   useEffect(() => {
//     // Update marker position
//     const intervalId = setInterval(() => {
//       if (marker) {
//         marker.setPosition(navigator.geolocation.getCurrentPosition().coords);
//       }
//     }, 2000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <TmapMap map={map} />
//       {marker && (
//         <Tmap.Marker marker={marker} />
//       )}
//       <div>Distance: {distance}</div>
//     </div>
//   );
// };

// export default App;
// */

// import React, { useState, useEffect, useRef } from "react";
// import Tmapv2 from "tmap";

// const MovingMarker = () => {
//   const mapRef = useRef<Tmapv2.Map | null>(null);
//   const markerRef = useRef<Tmapv2.Marker | null>(null);
//   const polylineRef = useRef<Tmapv2.Polyline | null>(null);
//   const destinationRef = useRef<Tmapv2.LatLng | null>(null);
//   const intervalRef = useRef<number | null>(null);

//   useEffect(() => {
//     // Initialize the map
//     const initMap = () => {
//       const map = new Tmapv2.Map("map_div", {
//         center: new Tmapv2.LatLng(37.5665, 126.9780),
//         width: "100%",
//         height: "400px",
//         zoom: 15,
//       });

//       mapRef.current = map;
//     };

//     initMap();
//   }, []);

//   useEffect(() => {
//     // Watch user's current location
//     const watchLocation = () => {
//       const handleLocation = (position: GeolocationPosition) => {
//         const { latitude, longitude } = position.coords;
//         const currentLocation = new Tmapv2.LatLng(latitude, longitude);

//         const map = mapRef.current;
//         const marker = markerRef.current;

//         if (map) {
//           if (marker) {
//             marker.setMap(null);
//           }

//           const newMarker = new Tmapv2.Marker({
//             position: currentLocation,
//             icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png",
//             map,
//           });

//           markerRef.current = newMarker;

//           // Update destination distance
//           const destination = destinationRef.current;
//           if (destination) {
//             const distance = currentLocation.distanceTo(destination); // Get distance in meters
//             console.log("Distance to destination:", distance);
//             // Display the distance using UI or perform any other action
//           }
//         }
//       };

//       const handleError = (error: GeolocationPositionError) => {
//         console.log("Geolocation error:", error);
//       };

//       const options = {
//         maximumAge: 0,
//         timeout: 5000,
//         enableHighAccuracy: true,
//       };

//       const watchId = navigator.geolocation.watchPosition(handleLocation, handleError, options);

//       return () => {
//         navigator.geolocation.clearWatch(watchId);
//       };
//     };

//     watchLocation();
//   }, []);

//   const handleDestinationChange = (latitude: number, longitude: number) => {
//     const map = mapRef.current;

//     if (map) {
//       const destination = new Tmapv2.LatLng(latitude, longitude);
//       destinationRef.current = destination;

//       if (polylineRef.current) {
//         polylineRef.current.setMap(null);
//       }

//       const polyline = new Tmapv2.Polyline({
//         path: [markerRef.current?.position, destination],
//         strokeColor: "#3366FF",
//         strokeWeight: 6,
//         map,
//       });

//       polylineRef.current = polyline;
//     }
//   };

//   useEffect(() => {
//     // Update marker position at a regular interval (2 seconds)
//     const updateMarkerPosition = () => {
//       const marker = markerRef.current;

//       if (marker) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newPosition = new Tmapv2.LatLng(latitude, longitude);
//             marker.setPosition(newPosition);
//           },
//           (error) => {
//             console.log("Error getting current location:", error);
//           }
//         );
//       }
//     };

//     const intervalId = setInterval(updateMarkerPosition, 2000);
//     intervalRef.current = intervalId;

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <div id="map_div"></div>
//       <div>
//         <h3>Destination</h3>
//         <input
//           type="text"
//           placeholder="Latitude"
//           onChange={(e) => {
//             handleDestinationChange(parseFloat(e.target.value), markerRef.current?.position.getLng() || 0);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Longitude"
//           onChange={(e) => {
//             handleDestinationChange(markerRef.current?.position.getLat() || 0, parseFloat(e.target.value));
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default MovingMarker;
