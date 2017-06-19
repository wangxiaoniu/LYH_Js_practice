

// var Base={
// 	getId:function(id){
// 		return document.getElementById(id);
// 	},
// 	getName:function(name){
// 		return document.getElementsByName(name)
// 	},
// 	getTagName:function(tag){
// 		return document.getElementsByTagName(tag);
// 	}
// }

function Base(){
	//创建一个数组，来保存获取节点和节点数组
	this.elements=[];
	this.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}
}

Base.prototype.css=function(attr,value){
	this.elements[0].style[attr]=value;
	return this;
}