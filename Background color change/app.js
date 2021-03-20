$(document).ready(function(){


var arr = ['black', 'yellow', 'green', 'blue', 'pink'];

var i = 0;

	$(".btn").on('click', function(){
		if(i >= arr.length){
			i=0;
		}
	  //for(i=0; i<=arr.length; i++){
		$(".bg_box").css('background-color',arr[i]);
	 // }

	 i++;


	});



});

