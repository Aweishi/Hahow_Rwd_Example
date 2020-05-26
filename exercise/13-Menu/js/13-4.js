$(function(){

	$(".menuopen").on("click",function(){

		$("footer").addClass("left");
		$("#menu").addClass("open");
		$("#app").addClass("left");
	})

	$("#close_btn").on("click",function(){
		$("#menu").removeClass("open");
		$("#app").removeClass("left");
		$("footer").removeClass("left");
	})


})