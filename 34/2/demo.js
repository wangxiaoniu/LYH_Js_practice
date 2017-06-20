
/*
Base是一个基础库的核心对象
Base.getId('box')返回的是一个divElement
*/



window.onload=function(){
	var base=new Base();
	base.getId('box').css('color','red');
}