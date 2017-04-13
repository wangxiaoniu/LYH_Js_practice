window.onload=function(){
/*	var box =document.getElementById('box');
	var p= document.createElement('p');
	var text=document.createTextNode('test11');
	p.appendChild(text);
	box.insertBefore(p,box.firstChild);*/
	var box2=document.getElementById('box2');

	alert(box2.firstChild.nodeValue);
}




//父节点删除空格子节点
function removeWhiteNode(node){
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
			node.removeChild(node.childNodes[i]);
		}
	}
	return node;
}