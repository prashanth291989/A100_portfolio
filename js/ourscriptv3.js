var imgarray = [ 
	 "img/website_redesign.png",
	 "img/Team_Cup_of_Java.png", 
	 "img/Proto_App.png", 
	 "img/whiteboard_head.png" ];

var linksarray =[
	 "New_A100_WS.html",
	 "A100_WS_Revisited.html",
	 "Prototype_New_A100_Application.html",
	 "Whiteboard_Jobsboard.html"];


$("#insert_imgs").html('<a href='+linksarray[0]+'>'+'<image src="'+imgarray[0]+'"+></a>')
$('#projText').hide();
var u = $("ul.projDescription li:eq('"+0+"')").text();
$("#insert_text").html('<p>'+u+'</p>');


$("a.listen").click(function(e) {

	var i = imgarray[$("a.listen").index(this)];
	var l = linksarray[$("a.listen").index(this)];
	var x =	$("a.listen").index(this);

	//Displays image and text based on the list-element that is selected
	var z = $("ul.projDescription li:eq('"+x+"')").text();
	$("ul.projDescription li:not('"+x+"')").hide();
	$("#insert_text").html('<p>'+z+'</p>');

	$("#insert_imgs").html('<a href='+l+'>'+'<image src="'+i+'"+></a>');

	//Manages the "toggling" of the active class tag on the list-group
	//that is used onthe main page. 
	$('a.active').removeClass('active');


	var $this = $(this);
	  if (!$this.hasClass('active')) {
	    $this.addClass('active');
	  }

	
});



