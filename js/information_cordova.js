
//
document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
//
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

	document.getElementById('info-conection').innerHTML='Connection type: ' + states[networkState];
}
checkConnection();

//checkDevice
function checkDevice() {
   var model = device.model;
   var devicePlatform = device.platform;
   var deviceID = device.uuid;
   var deviceVersion = device.version;
   var deviceManufacturer = device.manufacturer;
   var isSim = device.isVirtual;
   var deviceSerial = device.serial;
   document.getElementById('devicePlatform').innerHTML=devicePlatform;
   document.getElementById('deviceID').innerHTML='Device ID : ' + deviceID;
   document.getElementById('deviceVersion').innerHTML=devicePlatform + ' : ' + deviceVersion;
   document.getElementById('deviceManufacturer').innerHTML=deviceManufacturer;
   document.getElementById('isSim').innerHTML='Dual Sim : ' +isSim;
   document.getElementById('deviceSerial').innerHTML=deviceSerial;
}
checkDevice();
function onDeviceReady() {
  window.plugins.sim.getSimInfo(successCallback, errorCallback);
}
function successCallback(result) {
  console.log(result);
}
function errorCallback(error) {
  console.log(error);
}

// Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}