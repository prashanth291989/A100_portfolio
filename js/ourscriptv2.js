        $('#image_1').show();    
        $('#image_2').hide();
        $('#image_3').hide();
        $('#image_4').hide();
        $('#para_1').show();
        $('#para_2').hide();
        $('#para_3').hide();
        $('#para_4').hide();

$('a').click(function(){
	console.log($(this).text())

	switch($(this).text()) {
    case "A100 Website Redesign":
        $('#image_1').show();    
    	$('#image_2').hide();
    	$('#image_3').hide();
        $('#image_4').hide();
        $('#para_1').show();
        $('#para_2').hide();
		$('#para_3').hide();
        $('#para_4').hide();
        break;
    case "A100 Website Revamp":
    	$('#image_1').hide();    
        $('#image_2').show();
        $('#image_3').hide();
        $('#image_4').hide();
        $('#para_1').hide();
        $('#para_2').show();
        $('#para_3').hide();
        $('#para_4').hide();
        break;
    case "A100 Student Application":
    	$('#image_1').hide();    
        $('#image_2').hide();
        $('#image_3').show();
        $('#image_4').hide();
        $('#para_1').hide();
        $('#para_2').hide();
        $('#para_3').show();
        $('#para_4').hide();
        break;
    case "Job Board for WhiteBoard":
        $('#image_1').hide();    
        $('#image_2').hide();
        $('#image_3').hide();
        $('#image_4').show();
        $('#para_1').hide();
        $('#para_2').hide();
        $('#para_3').hide();
        $('#para_4').show();
        break;
    default:
        break;
} 
});

