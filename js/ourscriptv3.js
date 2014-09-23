var imgarray = [ 
	 "img/website_redesign.png",
	 "img/Team_Cup_of_Java.png", 
	 "img/Proto_App.png", 
	 "img/whiteboard_head.png" ];


$("#insert_imgs").html('<image src="'+imgarray[0]+'"+>')
$('#projText').hide();
var u = $("ul.testText li:eq('"+0+"')").text();
$("#insert_text").html('<p>"'+u+'"</p>');


$("a.listen").click(function() {

	var i = imgarray[$("a.listen").index(this)];
	$("#insert_imgs").html('<image src="'+i+'"+>');
	console.log(i);

	var x = $("a.listen").index(this);
	console.log(x);
	var z = $("ul.testText li:eq('"+x+"')").text();
	$("ul.testText li:not('"+x+"')").hide();
	$("#insert_text").html('<p>"'+z+'"</p>');
	
	console.log(z);
});

