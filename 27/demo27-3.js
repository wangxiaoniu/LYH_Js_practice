
addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	var user=fm.elements['user'];

	//select事件
	addEvent(user,'select',function(){
		//alert(this.value);
		//alert(this.selectionStart);
		//alert(this.selectionEnd);
		//alert(this.value.substring(this.selectionStart,this.selectionEnd));
		//alert(document.selection.createRange().text);
		document.getElementById('p').innerHTML=getSelectText(user);
	});
	//取得选择的文本
	function getSelectText(text){
		if(typeof text.selectionStart == 'number'){
			//W3C确定文本的方法
			return text.value.substring(text.selectionStart,text.selectionEnd)
		}else if(document.selection){
			//ie取得文本的方法
			return document.selection.createRange().text;
		}
	}
	
		//document.selection对象可以选择，它有一个方法可以创建文本范围对象，createRange();
		//createRange()有个属性是text，可以得到你想要的文本。
});