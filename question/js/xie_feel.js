;(function($){
	$.fn.extend({
		"ajax":function(){
			$.ajax({
				url:"json/data.json",
				type:"get",
				async:false,
				dataType:"json",
				success:function(data){
					render(data.result);
				},
				error:function(){
					alert("请求错误");
				}
			})
		},
		"chosiceBg":function(){
			$(this).addClass("chosiceBg")
			.siblings().removeClass("chosiceBg");
		},
		"changePage":function(){
			var len=$('.xie_mainList').length;
			$(this).find('.xie_mainList').eq(i).css({
				'left':'-100%',
				'transition':'all .5s'
			})
			i++;
			if(i>=len-1){
				$('.xie_btn').text('提交');
			}
		},
		"addData":function(){
			var txt=$(this).text();
			if(txt=="没有"){
				console.log("没有");
			}else if(txt=="很少"){
				console.log("很少");
			}else if(txt=="有时"){
				console.log("有时");
			}else if(txt=="经常"){
				console.log("经常");
			}else if(txt=="总是"){
				console.log("总是");
			}
		}
	});	
	function render(dataResult){
		var str="";
		for(var i=0;i<dataResult.length;i++){
			var num=100;
			str+='<li class="xie_mainList" style="z-index:'+Number(dataResult.length-i)+'">';
			for(var j=0;j<dataResult[i].question.length;j++){
				str+='<div class="xie_opation"><p>'+dataResult[i].question[j]+'</p><ul><li>没有</li><li>很少</li><li>有时</li><li>经常</li><li>总是</li></ul></div>';
			}
			str+='</li>';			
		}
		$(".xie_feelMain").html(str);
	}
	var i=0,max=100;
	$(".xie_feelMain").ajax();
	$(".xie_feelMain").find('.xie_opation').on("click","li",function(){
		$(this).chosiceBg();
		$(this).addData();
	})
	$(".xie_btn").on("click",function(){
		$('.xie_feelMain').changePage(i,max);
	})

})(jQuery)
