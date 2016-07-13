
	var Dialog=function(opt){
		/*var defaults={
			title:"标题",
			msg:"",
			btn:["确定","取消"],
			callback1:null
		},*/

		//扩展默认参数
		settings=$.extend({},defaults,opt);
		//创建HTML结构
		/*var html=$("<div class='mask'></div>"+
						"<div class='dia_box'>"+
							"<p class='dia_msg'>"+settings.msg+"</p>"+
							"<p class='dia_btn'></p>"+
						"</div>");*/
var html=$('<section class="cao-tan">'+
		'<div class="x"></div>'+
		'<p>亲。我们为您准备60道体能测试题，请您耐心如实答题，获取真实体质结果!!!</p>'+
		'<div class="an"><a href="#/page6">开始测试</a></div>'+
	'<section>');
		$('body').prepend(html);
		//动态添加按钮
		/*if(settings.btn.length==0) return;
		for(var i=0,len=settings.btn.length;i<len;i++){
			var Btn=$("<span id='btn"+i+"'>"+settings.btn[i]+"</span>");
			$(".dia_btn").append(Btn);
		}*/

		//给按钮添加单击事件
		$("#btn0").on("click",function(){
			close();
			settings.callback1 && settings.callback1();
		})

		//第二个按钮
		$("#btn1").on("click",function(){
			close();
		})

		//关闭弹出框
		function close(){
			$(".mask").remove();
			$(".dia_box").remove();
		}
	}

	$.dialog=function(opt){
		return new Dialog(opt);
	}
