async function getData(path) {
  var response = await fetch(path);
  var data = await response.json();
  console.log(data);
  return data;
}

export async function loadMapData(lon, lat, radius) {
  var api_url = `http://198.84.180.114:5500/api/get_locations?lon=${lon}&lat=${lat}&radius=${radius}`;

  return (await getData(api_url));
}
