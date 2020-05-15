$(document).ready(function() {
	// Set Homes Video -----------------------------------------------------
	var urlbase = getUrl('get_laporan.php'); 
    $.ajax({
		type: 'POST',
		url: urlbase,
		data: 'user='+name,
		//async: true,
		crossDomain: true,
		beforeSend: function(xhr){
			xhr.withCredentials = true;
		},
		success: function (data) {
			console.log(data);
			var resultOne = eval('(' + data + ')');
		    if(data.length >0){
			   for(var i=0;i<resultOne.length;i++)
				   {
					 if(resultOne[i].bagan == 1){
						$("h5#header_profile").html(resultOne[i].ket);	 
					 }else if(resultOne[i].bagan == 2){ 
						 var conten = '<div class="col s12 m4">'+
							  '<div class="icon-block">'+
								'<h2 class="center light-blue-text"><i class="material-icons">work</i></h2>'+
								'<h5 class="center">'+resultOne[i].judul+'</h5>'+
								'<p>'+resultOne[i].ket+'</p>'+
							  '</div>'+
							'</div>';	 
						 $("div#product").append(conten);
					 }else if(resultOne[i].bagan == 3){ //content_3
					     var conten3 = '<div class="col s12 m4">'+
							  '<div class="icon-block">'+
								'<h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>'+
								'<h5 class="center">'+resultOne[i].judul+'</h5>'+
								'<p>'+resultOne[i].ket+'</p>'+
							  '</div>'+
							'</div>';
						 $("div#content_3").append(conten3);
					 }
				   }
			}
	   }
	});
});