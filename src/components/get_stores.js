var api_url = 'http://192.168.1.9:5500/api/get_locations';

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

function loadData(lon, lat, radius, callback) {
  api_url += `?lon${lon}&lat=${lat}&radius=${radius}`;

  getData(api_url, (data) => {
    
  });
};