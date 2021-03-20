$(document).ready(function(){


var i = 0;

	$(".btn_up").on('click', function(){
		i++;
		if(i == 0){
			$(".count_val").css('color', 'black');
		}
		else if(i == 1){
			$(".count_val").css('color', 'white');
		}
		// else{
		// 	$(".count_val").css('color', 'black');
		// }
		$(".count_val").text(i);

	});

	$(".btn_down").on('click', function(){
		i--;
		if(i == 0){
			$(".count_val").css('color', 'black');
		}
		else if(i == -1){
			$(".count_val").css('color', 'red');
		}
		// else{
		// 	$(".count_val").css('color', 'black');
		// }
		$(".count_val").text(i);

	});




});

