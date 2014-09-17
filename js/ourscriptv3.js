var array = [ 
	 "img/website_redesign.png",
	 "img/website_revamp.png", 
	 "img/student_app.png", 
	 "img/job_board.png" ];

$("#insert_imgs").html('<image src="'+array[0]+'"+>')

$("a.listen").click(function() {

	var i = array[$("a.listen").index(this)];
	$("#insert_imgs").html('<image src="'+i+'"+>');
	console.log(i);
});