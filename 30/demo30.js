


var xmlDom=new ActiveXObject('MSXML2.DOMDocument');
function createXMLDOM(){
	var version =[
		'MSXML2.DOMDocument6.0',
		'MSXML2.DOMDocument3.0',
		'MSXML2.DOMDocument'
	];
	for(var i=0;i<version.length;i++){
		try{
			var xmlDom=new ActiveXobject(version[i]);
			return xmlDom;
		}catch(e){
			//跳过
		}
	}
	throw new Error('您的浏览器不支持MSXML');

}
