

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

//两种方法创建XPathResult
//获取单一节点第一种方法：
//单一节点，W3C的XPath下标从1开始
/*var eva =new XPathEvaluator();
var result=eva.evaluate('root/user[2]',xmlDom,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
if(result !== null){
	alert(serializerXML(result.singleNodeValue));
}*/

//第二种方法
/*var result=xmlDom.evaluate('root/user[2]',xmlDom,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
if(result !== null){
	alert(serializerXML(result.singleNodeValue));
}*/

//节点集合
var result=xmlDom.evaluate('root/user',xmlDom,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
var nodes=[];

if(result!==null){
while((node=result.iterateNext())!==null){
	nodes.push(node);
	}
}
alert(serializerXML(nodes[1]));
