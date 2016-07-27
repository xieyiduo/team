$(function(){
var n = 0,
	arr = [ "7670", "3571", "5210", "2956" ];

init();


function init(){
	changeNum();

	addEvent();
}



function addEvent(){
	$( ".getCode").on( "click", function(){
		$( ".ver").val("");
		if( $( ".phone").val().length > 0){
			var txt = $( ".phone").val();
			if( $( ".pic").val().length > 0 ){
				if( $( ".pic").val() == arr[n-1] ){
					Addtime( $(this));
					$( ".xie_show").css( "opacity", "1" ).find( "span").text(txt);
					$( ".xie_btn").addClass( "on");
				}else{
					alert( "验证码输入错误，请重新输入！");
				}
				
			}else{
				alert( "请输入图片验证码！");
			}
		}else{
			alert( "请输入登录手机号码！");
		}
	})
	$( ".xie_form").on( "click", ".on", function () {
		var ver = $( ".ver").val();
		if( ver.length > 0 ){
			if( ver == "111111" ){
				alert( "系统正在处理中，请稍后！");
			}else{
				alert( "验证码输入错误，请重新输入！");
			}
		}else{
			alert( "请输入验证码！");
		}
	})
	$( ".xie_change" ).on( "click", function(){
		changeNum();
	})
}



function Addtime(that){
	var num = 60,
		timer = null;
	clearInterval( timer);
	that.off( "click");
	timer = setInterval( function(){
		num--;
		that.addClass( "timer");
		that.html( num + "s后重发");
		if( num <= 0){
			clearInterval(timer);
			that.html( "重新发送验证码");
			that.removeClass( "timer");
			that.on( "click", function(){
				Addtime( $(this));
			})
		}
	}, 1000)
}



function changeNum(){
	n = Math.floor( ( Math.random() * arr.length ) + 1 ); 
	$( ".xie_picCode").find( "img").attr( "src", "img/img"+ n+ ".jpg" );
}


})