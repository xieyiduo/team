init();
function init(){
	addEvent();
}
function addEvent(){
	var getCode = document.querySelector('.getCode');
	getCode.onclick = function(){
		console.log(1);
	}
}