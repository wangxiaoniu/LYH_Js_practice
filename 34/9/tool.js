//跨浏览器获取视口大小

function getInner(){
	if(typeof window.innerWidth != 'undefined'){
		return{
			width:window.innerWidth,
			height:window.innerHeight
		}
	}
	else{
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
}

//跨浏览器获取css
function getStyle(element,attr){
	if(typeof window.getComputedStyle != "undefined"){//w3c
				return window.getComputedStyle(element,null)[attr];
			}else if(typeof element.currentStyle != 'undefined'){//IE
				return element.currentStyle[attr];
			}
}

//判断class是否存在
function hassClass(element,className){
	return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))
}

//跨浏览器添加link规则
function insertRule(sheet,selectorText,cssText,position) {
	if(typeof sheet.insertRule != 'undefined'){
		sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}else if(typeof sheet.addRule != 'undefined'){
		sheet.addRule(selectorText,cssText,position);
	}
}

//跨浏览器移除link的css规则
function deleteRule(sheet,index){
	if(typeof sheet.deleteRule != 'undefined'){//w3c
		sheet.deleteRule(index);
	}else if(typeof sheet.removeRule != 'undefined'){//IE
		sheet.removeRule(index);
	}
}

//阻止默认行为
function preDef(event){
	var e=getEvent(event);
	//event.preventDefault()方法阻止事件 默认行为
	if(typeof e.preventDefault != 'undefined'){//w3c
		e.preventDefault();
	}else{//IE
		e.returnValue=false;
	}
}