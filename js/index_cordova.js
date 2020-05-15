
var pictureSource; // picture source
var destinationType; // sets the format of returned value
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;		
}
function findContacts() {
   navigator.contacts.pickContact(function(contact){
        var pathy = contact.phoneNumbers[0]['value'];
        var pathi = pathy.replace("/-/", "");
        $("input#input_nama").val(contact.displayName);
        $("input#input_number").val(pathi);
    },function(err){
        console.log('Error: ' + err);
    });
   //---------------------------------------------------------------------
}
//--------------------------------------
function onPhotoDataSuccess(imageURI) {
    console.log(imageURI);
    var cameraImage = document.getElementById('image');
    cameraImage.style.display = 'block';
    cameraImage.src = imageURI;
  }
function capturePhoto() {
  navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA
  });      
}
function onPhotoURISuccess(imageURI) {   
    var image = document.getElementById('smallImage');
    image.style.display = 'block';
  image.src = imageURI;
  function getBase64Image(img) {
    var img = new Image();
      var canvas =  document.createElement("canvas");
      var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 10, 10);
      var dataURL = canvas.toDataURL("image/png");
        return dataURL;
  }
  var pecah = imageURI.split("?");
  //var base64 = getBase64Image(pecah[0]);
  encodeImageUri = function(image_Uri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() {
      c.width = this.width;
      c.height = this.height;
      ctx.drawImage(img, 0, 0);
      if(typeof callback === 'function'){
        var dataURL = c.toDataURL("image/jpeg");
        callback(dataURL.slice(22, dataURL.length));
      }
    };
    img.src = image_Uri;
  }
  //---
  encodeImageUri(imageURI, function(base64){
      document.getElementById('pic').value="data:image/png;base64"+base64;
  });
  }

function onPhotoDataSuccess(imageData) {
  var smallImage = document.getElementById('smallImage');
  smallImage.style.display = 'block';
  smallImage.src = "data:image/jpeg;base64," + imageData;
  var ImgData = "data:image/jpeg;base64," + imageData;
  document.getElementById('pic').value=ImgData;
}
function getPhoto(source) {
  navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
  quality: 30,
  /*targetWidth: 600,
  targetHeight: 600,
  encodingType: Camera.EncodingType.PNG,*/
  destinationType: destinationType.FILE_URI,
  sourceType: source
  }); 
}
function onFail(message) {
  //alert('Failed because: ' + message);
} 
function dialogAlert() {
   var message = "I am Alert Dialog!";
   var title = "ALERT";
   var buttonName = "Alert Button";
  
   navigator.notification.alert(message, alertCallback, title, buttonName);

   function alertCallback() {
    console.log("Alert is Dismissed!");
   }
}
function dialogConfirm() {
   var message = "Are You Sure Logout?";
   var title = "CONFIRM";
   var buttonLabels = "YES,NO";
  
   navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
   function confirmCallback(buttonIndex) {
    if(buttonIndex == '1'){
      localStorage.clear();
      /*localStorage.removeItem('saveObject');
        localStorage.removeItem('password');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('hakakses');
        localStorage.removeItem('foto');*/
        window.location.href = "login.html";
    }
   }
  
}
//--------------------------------------------------------


function dialogPrompt() {
   var message = "Am I Prompt Dialog?";
   var title = "PROMPT";
   var buttonLabels = ["YES","NO"];
   var defaultText = "Default"
  
   navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);

   function promptCallback(result) {
    console.log("You clicked " + result.buttonIndex + " button! \n" + 
     "You entered " +  result.input1);
   }  
}
function dialogBeep() {
   var times = 2;
   navigator.notification.beep(times);
}
