function getData(path, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
};

export function loadMapData(lon, lat, radius, callback) {
  var api_url = 'http://198.84.180.114:5500/api/get_locations';
  api_url += `?lon=${lon}&lat=${lat}&radius=${radius}`;

  getData(api_url, (data) => {
    callback(data);
  });
};