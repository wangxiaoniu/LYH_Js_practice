/*

报错===
//模拟loadXML()方法，可以建议的创建XML字符串
var xmlParser=new DOMParser();//创建DOMParser对象
var xmlStr='<root><user>wang<user></root>';//xml字符串
var xmlDom=xmlParser.parseFromString(xmlStr,'text/xml');
//alert(xmlDom);


//模拟.xml属性序列化字符串
var serializer=new XMLSerializer();
var xml=serializer.serializeToString(xmlDom);
var errors=xmlDom.getElementsByTagName('parsererror');
if(errors.length == 0){
	alert(xml);
}else{
	throw new Error('错误信息：'+errors[0].textContent);
}

=================
*/




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


var xmlStr = '<root><user>Lee</user></root>';
var xmlDom = getXMLDOM(xmlStr);
alert(serializerXML(xmlDom));




