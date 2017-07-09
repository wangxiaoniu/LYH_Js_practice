
//前台调用
var $=function(_this){
	return new Base(_this);
}
//基础库
function Base(_this){
	//创建一个数组，来保存获取节点和节点数组
	this.elements=[];
	if(_this != undefined){
		this.elements[0]=_this;
	}
}


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
			return getStyle(this.elements[i],attr);	
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}
//添加class
Base.prototype.addClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!hassClass(this.elements[i],className)){
			this.elements[i].className +=' '+ className;
		}
	}
	return this;
}
//移除class
Base.prototype.removeClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(hassClass(this.elements[i],className)){
			this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)')," ");
		}
	}
}
//添加link或style的css规则

Base.prototype.addRule=function(num,selectorText,cssText,position){
	var sheet=document.styleSheets[num];
	insertRule(sheet,selectorText,cssText,position)
	return this;
}

//移除link或style的css规则
Base.prototype.removeRule=function(num,index){
	var sheet=document.styleSheets[num];
	deleteRule(sheet,index);
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
//设置鼠标移动事件
Base.prototype.hover=function(over,out){
	for(var i=0; i<this.elements.length;i++){
		this.elements[i].onmouseover=over;
		this.elements[i].onmouseout=out;
	}
}
//设置显示
Base.prototype.show=function(){
	for(var i =0;i<this.elements.length;i++){
		this.elements[i].style.display='block';
	}
	return this;
}
//设置隐藏
Base.prototype.hide=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}
	return this;
}

//设置物体居中
Base.prototype.center=function(width,height){
	var top =(getInner().height-height)/2;
	var left=(getInner().width - width)/2;
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.top=top+'px';
		this.elements[i].style.left=left+'px';
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

//锁屏事件
Base.prototype.lock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.width=getInner().width+'px';
		this.elements[i].style.height=getInner().height+'px';
		this.elements[i].style.display='block';
		document.documentElement.style.overflow='hidden';
	}
	return this;
}
Base.prototype.unlock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}
	return this;
}
//触发浏览器窗口事件
Base.prototype.resize=function(fn){
	window.onresize=fn;
	return this;
}

//获取Event对象
function getEvent(event){
	return event||window.event;
}

//拖拽功能
Base.prototype.drag=function(){
	for(var i=0;i<this.elements.length;i++){
			this.elements[i].onmousedown=function(e){	
			var e=getEvent(e);
			var _this=this;
			var diffX=e.clientX-_this.offsetLeft;
			var diffy=e.clientY-_this.offsetTop;

			document.onmousemove=function(e){
				var e=getEvent(e);
				_this.style.left=e.clientX-diffX +'px';
				_this.style.top=e.clientY-diffy +'px';
			};
			document.onmouseup=function(){
				this.onmousemove=null;
				this.onmouseup=null;
			}
		};

	}
}