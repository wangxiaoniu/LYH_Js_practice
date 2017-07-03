
/*
Base是一个基础库的核心对象
Base.getId('box')返回的是一个divElement，这个对象是没有css方法的
将Base.getid('box')返回改成Base即可
Base.getid('box').css()返回Base对象
Base.getid('box').css().html()也返回base对象
一次类推


在Base对象中，添加css，html，click方法
*/



window.onload=function(){
	
	//alert(base.getId('box'));
	$().getId('box').css('color','red');
	$().getTagName('p').css('color','green').html('标题').click(function(){
		alert('abc');
	});
}
