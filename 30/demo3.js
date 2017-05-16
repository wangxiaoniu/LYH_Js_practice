/*


//创建
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


====================
//异步加载xml文件
var xmlDom=document.implementation.createDocument('','root',null);//创建xmlDom对象
xmlDom.async=true; //true异步，flase 同步
xmlDom.onload=function(){//异步加载。通过load即可，相当于IE的就绪状态事件
	alert(xmlDom.getElementsByTagName('user')[0].textContent);
}
xmlDom.load('demo.xml');
//load()方法只支持firefox浏览器，和最新版的opera，其他W3Cb不支持,没办法解决
//alert(xmlDom.xml); 没有此方法
//alert(xmlDom.getElementsByTagName('user')[0].tagName);
//alert(xmlDom.getElementsByTagName('user')[0].firstChild.nodeValue);


================
*/


/*function createXMLDOM(){
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

*/

//模拟loadXML()方法
//D O M 2 没有 l o a d X M L ( ) 方法直接解析 X M L 字符串，所以提供了 D O M P a r s e r 类型 来创建 X M L D O M 对象。
// I E 9 、 S a f a r i 、 C h r o m e 和 O p e r a 都支持这个类型
var xmlParser=new DOMParser();//创建DOMParser对象
var xmlStr='<root>\n\t<user>wang</uer>\n</root>';//xml字符串
var xmlDom=xmlParser.parseFromString(xmlStr,'text/xml');
//alert(xmlDom);


//模拟.xml属性序列化字符串
//于 D O M 2 没有序列化 X M L 的属性，所以提供了 X M L S e r i a l i z e r 类型来帮助序列 化 X M L 字符串。
// I E 9 、 S a f a r i 、 C h r o m e 和 O p e r a 都支持这个类型。
var serializer=new XMLSerializer();
var xml=serializer.serializeToString(xmlDom);
alert(xml);

//解析错误
//在DOM2级处理,XML发生错误时，并没有提供特有的对象来捕获错误
//而是直接生成另一个错误的xml文档，通过做这个文档可以获取错误信息

var errors =xmlDom.getElementsByTagName('parsererror');
if(errors.length>0){
	throw new Error('XML 格式有误：'+errors[0].textContent);
}
//PS：errors[0].firstChild.nodeValue也可以使用 errors[0].textContent来代替。