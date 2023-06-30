import axios from 'ax';

function geocode(address) {
  // Google Maps Geocoding API 요청 URL
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;

  // API 호출
  axios.get(url)
    .then(response => {
      const results = response.data.results;
      if (results.length > 0) {
        const location = results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        
        console.log('위도:', latitude);
        console.log('경도:', longitude);
      } else {
        console.log('Geocoding API 요청에 실패했습니다.');
      }
    })
    .catch(error => {
      console.log('Geocoding API 요청 중 오류가 발생했습니다.', error);
    });
}

// Geocoding API 호출 예시
geocode('서울특별시 강남구 역삼동');
