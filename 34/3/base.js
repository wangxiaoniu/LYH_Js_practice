
//前台调用
var $=function(){
	return new Base();
}
//基础库
function Base(){

}

//创建一个数组，来保存获取节点和节点数组
Base.prototype.elements=[];
//获取ID节点
Base.prototype.getId=function(id){
	this.elements.push(document.getElementById(id));
	return this;
}
//获取标签节点数组
Base.prototype.getTagName=function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		this.elements.push(tags[i]);
	}
	return this;
}

//获取class节点数组
Base.prototype.getClass=function(className,idName){
	var node =null;
	if(arguments.length == 2){
		node = document.getElementById(idName);
	}else{
		node = document;
	}
	var all=node.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className == className){
			this.elements.push(all[i]);
		}
	}
	return this;
}

//获取某一个节点
Base.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
}
//设置Css
Base.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length == 1){
			if(typeof window.getComputedStyle != "undefined"){//w3c
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle != 'undefined'){//IE
				return this.elements[i].currentStyle[attr];
			}		
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}

//设置innerHTML
Base.prototype.html=function(str){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML=str;
	}
	return this;
}
//触发点击事件
Base.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
}