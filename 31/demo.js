

//跨浏览器获取XML DOM
function getXMLDOM(xmlStr){
	var xmlDom =null;

	if(typeof window.DOMParser != 'undefined'){
		xmlDom=(new DOMParser()).parseFromString(xmlStr,'text/xml');
		var errors=xmlDom.getElementsByTagName('parsererror');
		if(errors.length>0){
			throw new Error('XML 解析错误：'+errors[0].textContent);
		}
	}else if(typeof window.ActiveXObject !="undefined"){
		var version =[
			'MSXML2.DOMDocument6.0',
			'MSXML2.DOMDocument3.0',
			'MSXML2.DOMDocument'
		];
		for(var i=0;i<version.length;i++){
			try{
			  var xmlDom=new ActiveXObject(version[i]);

			}catch(e){
				//跳过
			}
		}
		xmlDom.loadXML(xmlStr);
		if(xmlDom.parseError != 0){
			throw new Error('XML 解析错误：'+xmlDom.parseError.reason);
		}
	}
	else{
		throw new Error('您所使用的系统或浏览器不支持 XML DOM');

	}

	return xmlDom;
}

//序列化XML
function serializerXML(xmlDom) {
	var xml = '';
	
	if (typeof window.XMLSerializer != 'undefined') {//W3C
		xml = (new XMLSerializer()).serializeToString(xmlDom);
	} else if (typeof xmlDom.xml != 'undefined') {//IE
		xml = xmlDom.xml;
	}
	
	return xml;
}


var xmlStr = '<root><user id="5">Lee</user><user id="6">Wang</user></root>';
var xmlDom = getXMLDOM(xmlStr);
//alert(serializerXML(xmlDom));
//IE的两种方法：1、selectSingleNode()获取单一节点
//2、selectNode()获取节点集合
//XPath查找手段，就是路径查找，结构树查找

//var node =xmlDom.selectSingleNode('root/user');
//alert(node.firstChild.nodeValue);
//ps:selectSingleNode()是获取单一节点，如果有多个就返回第一个
//xmlDom就是上下文节点，它的指针指向root之前

//var node = xmlDom.documentElement.selectSingleNode('user');
//alert(node.xml);
//ps:总结上下文节点，上下文节点对象必须和XPath路径配合好
//但一般来说，直接用根节点即可，xmlDom,防止混淆


//var node = xmlDom.selectSingleNode('root/user[1]');
//alert(node.xml);
//var node = xmlDom.selectSingleNode('root/user[1]');//获取第二个user
//alert(node.xml);
//var node = xmlDom.selectSingleNode('root/user[1]/text()');//text()获取节点内的值
//alert(node.nodeValue);

//var node = xmlDom.selectSingleNode('//user');//不关心层次的第一个user
//alert(node.xml);


//var node = xmlDom.selectSingleNode('root//user');//root//user表示在root范围内不关心层次的第一个user
//alert(node.xml);

//var node = xmlDom.selectSingleNode('root/user[@id=6]');//通过唯一的属性查找user节点
//alert(node.xml);

var nodes=xmlDom.selectNodes('root/user');//获取user节点数组
alert(nodes[1].xml);