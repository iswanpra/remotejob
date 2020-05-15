var BASE_URL = 'http://localhost/contoh/';
function getUrl(url) {
    return BASE_URL.concat(url);
}
$(document).ready(function() {
// refresh----------------------------
  $("body").on("click","#refresh", function(){
	  window.location.reload()
  });
  
	$("body").on("click","#logout", function(){
		          localStorage.removeItem('id_edit');
                  localStorage.removeItem('email');
                  localStorage.removeItem('fullname');
                  localStorage.removeItem('social_id');
                  localStorage.removeItem('social_media');
                  localStorage.removeItem('avatar');
		window.location.href = "login.html";
	});
	$("body").on("click","#Profile", function(){
		window.location.href = "edit.html";
	});
	$("body").on("click","#Product_view", function(){
		window.location.href = "view/product.html";
	});
	$("body").on("click","#gallery_view", function(){
		window.location.href = "order.html";
	});
	$("body").on("click","#harga_view", function(){
		window.location.href = "harga_view.html";
	});
	//gallery
	 $("body").on("click","#contact_view", function(){
		window.location.href = "contact_view.html";
	});
	$("body").on("click","#login_view", function(){
		window.location.href = "login.html";
	});

	//------------End Menu------------------------------myMenu
	var ulMenu = '<li class="logo">'+
							  '<img id="foto">'+ 
						'</li>'+
					'<li class="bold">'+
						'<a id = "Profile" class="waves-effect waves-teal">'+
						'<i class="fa fa-sign-out" aria-hidden="true"></i> '+
						' Profile</a></li>'+
					'<li class="bold">'+
						'<a id="logout" class="waves-effect waves-teal">'+
						'<i class="fa fa-home" aria-hidden="true"></i> '+
						  'Logout</a></li>';
	 $("ul#nav-mobile").append(ulMenu);		
	 // $("img#findimg").attr("src",getUrl('foto/thumb/')+resultOne[i].avatar);
	if(localStorage.getItem('id_edit')>0){
		$("img#foto").attr("src",getUrl('foto/thumb/')+localStorage.getItem('avatar'));
	}	  		
});