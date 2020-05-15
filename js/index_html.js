

var BASE_URL = 'http://milagros-madiun.com/api/';
function getUrl(url) {
    return BASE_URL.concat(url);
}
$(document).ready(function(e) {
    var password   = localStorage.getItem('password');
	var name       = localStorage.getItem('name');
	var hakakses   = localStorage.getItem('hakakses');
	var tanggal    = localStorage.getItem('tanggal');
	var phone      = localStorage.getItem('phone');	
	if(password == null){
		window.location.href = "login.html";
	}
// refresh----------------------------
  $("body").on("click","#refresh", function(){
	  window.location.reload()
  });
  //detail_akas
   $("body").on("click","#detail_akas", function(){
	  window.location.href = "aksesoris.html";
  }); 
   
	$("body").on("click","#home", function(){
		window.location.href = "index.html";
	});
	$("body").on("click","#form_home", function(){
		window.location.href = "form_home.html";
	});
	$("body").on("click","#Product", function(){
		window.location.href = "stock.html";
	});
	$("body").on("click","#b_terjual", function(){
		window.location.href = "terjual.html";
	});
	//b_terjual
	$("body").on("click","#Profile", function(){
		window.location.href = "profile.html";
	});
	/*$("body").on("click","#gallery", function(){
		window.location.href = "order.html";
	});*/
	//gallery
	$("body").on("click","#information", function(){
		window.location.href = "information.html";
	});
	$("body").on("click","#aks", function(){
		window.location.href = "aksesoris.html";
	});
	//------------End Menu------------------------------myMenu
	if(name == 'Admin'){
	var ulMenu = '<li class="logo">'+
							  '<div id="foto"></div>'+ 
						'</li>'+
					'<li class="bold">'+
						'<a id = "dialogConfirm" class="waves-effect waves-teal">'+
						'<i class="fa fa-sign-out" aria-hidden="true"></i> '+
						' Logout</a></li>'+	
					'<li class="bold">'+
						'<a id="home" class="waves-effect waves-teal">'+
						'<i class="fa fa-home" aria-hidden="true"></i> '+
						  'Home</a></li>'+
					'<li class="bold" id="form_home">'+
						  '<a id="izin" class="waves-effect waves-teal">'+
							  '<i class="fa fa-file-text-o" aria-hidden="true"></i> '+
							   'Tagihan Hari ini</a></li>'+
					'<li class="bold">'+
						'<a id="Product" class="waves-effect waves-teal">'+
						'<i class="fa fa-history" aria-hidden="true"></i> '+
						' Stock Barang</a></li>'+
					'<li class="bold">'+
						'<a id="b_terjual" class="waves-effect waves-teal">'+
						'<i class="fa fa-goods" aria-hidden="true"></i> '+
						'Barang Terjual</a></li>'+		
					'<li class="bold">'+
						'<a id="aks" class="waves-effect waves-teal">'+
						'<i class="fa fa-map" aria-hidden="true"></i> '+
						' Aksesoris Barang</a></li>';
             $("ul#nav-mobile").append(ulMenu);	
        }else{
			var ulMenu = '<li class="logo">'+
							  '<div id="foto"></div>'+ 
						'</li>'+
					'<li class="bold">'+
						'<a id = "dialogConfirm" class="waves-effect waves-teal">'+
						'<i class="fa fa-sign-out" aria-hidden="true"></i> '+
						' Logout</a></li>'+	
					'<li class="bold">'+
						'<a id="gallery" class="waves-effect waves-teal">'+
						'<i class="fa fa-home" aria-hidden="true"></i> '+
						  'Order</a></li>'+
					'<li class="bold">'+
						  '<a id="information" class="waves-effect waves-teal">'+
							  '<i class="fa fa-picture-o" aria-hidden="true"></i> '+
							  ' Cicilan</a></li>';					  
	       $("ul#nav-mobile").append(ulMenu);		
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
});