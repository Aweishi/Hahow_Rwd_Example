$(function(){

	$(".menuopen").on("click",function(){

		$("#app").addClass("left");
	})

	$("#close_btn").on("click",function(){

		$("#menu").removeClass("left");
	})


})