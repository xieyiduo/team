$(function(){
	$("#ul1").on("click","li",function(){alert(1)
		$(this).css("background","red");
		$(this).siblings().css("background","#fff");
	})
})