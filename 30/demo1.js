/*
IE中的xml

创建XML DOM
var xmlDom =new ActiveXObject('MSXML2.DOMDocument3.0');
alert(xmlDom);

//获取
function createXMLDOM(){
	var version=[
	'MSXML2.DOMDocument6.0',
	'MSXML2.DOMDocument3.0',
	'MSXML2.DOMDocument'
	];

	for(var i=0;i<version.length;i++){
		try{
			var xmlDom=new ActiveXObject(version[i]);
			return xmlDom;
		}catch(e){
			//跳过
		}
		
	}
	throw new Error('您的系统或浏览器不支持');
}

var xmlDom=createXMLDOM();
xmlDom.load('demo.xml');
//alert(xmlDom.xml); 
var user =xmlDom.getElementsByTagName('user')[0];
alert(user.firstChild.nodeValue);
*/

function createXMLDOM(){
	var version=[
	'MSXML2.DOMDocument6.0',
	'MSXML2.DOMDocument3.0',
	'MSXML2.DOMDocument'
	];

	for(var i=0;i<version.length;i++){
		try{
			var xmlDom=new ActiveXObject(version[i]);
			return xmlDom;
		}catch(e){
			//跳过
		}
		
	}
	throw new Error('您的系统或浏览器不支持');
}


var xmlDom=createXMLDOM();
xmlDom.load('demo.xml');
var bbb=xmlDom.createElement('bbb');
var root= xmlDom.documentElement;
root.appendChild(bbb);
var bbbtext=xmlDom.createTextNode('kkk');
bbb.appendChild(bbbtext);
alert(xmlDom.xml);//xml序列化