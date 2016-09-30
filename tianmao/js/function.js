//1.添到原型上
//可以先使用后调用 $(a)
/*(function(){//匿名函数的自执行
	function $(str){
	//.test  #test
	var perfix=str.charAt(0);
	if(perfix=='#')
		return document.getElementById(str.slice(1));
	if(perfix=='.')
		return document.getElementsByClassName(str.slice(1));
	}//定义在函数内部的局部变量外部访问不到
	window.$1=$;//给window添加一个$1属性($函数)
	//Js强烈不建议我们修改他自己的对象，添到原型上会拖慢运行速度
	Element.prototype.hide=function(){
		console.log(this);
		this.style.display='none';
	}
})();*/
//2.自己创建一个新的类数组对象
(function(){
	var jq = function(str){
		if(typeof(str)=='object'){
			this.length=1;
			this[0]=str;
			//return this;
		}else{
				var perfix=str.charAt(0);
				//#xxx
				if(perfix=='#'){
					this.length=1;
					this[0]=document.getElementById(str.slice(1));
				}
				//.xxx
				if(perfix=='.'){
					var el=document.getElementsByClassName(str.slice(1));
					this.length=el.length;
					for (var i = 0; i < el.length; i++) {
						this[i]=el[i];
					}
				}
			}
		}
		//显示块
		jq.prototype.show=function(){
			for (var i = 0; i < this.length; i++) {
				this[i].style.display='block';
			}
		}
		//隐藏块
		jq.prototype.hide=function(){
			if(this.length==1){
				this[0].style.display='none';
			}else{
					for (var i = 0; i < this.length; i++) {
						this[i].style.display='none';
					}
				 }
		}
		//把指定的块变成红色
		jq.prototype.red=function(){
			if(this.length==1){
				this[0].style.backgroundColor='red';
			}else{
					for (var i = 0; i < this.length; i++) {
						this[i].style.backgroundColor='red';
					}
				 }
		}
		//看是否有类名
		jq.prototype.hasClass=function(str){
			var t=this[0].className.split(' ');
			for (var i = 0; i < t.length; i++) {
				if(t[i]==str){
					return true;
				}
			}
					return false;
		}
		//添加类名
		jq.prototype.addClass=function(str){
			if(!this.hasClass(str)){
				this[0].className=this[0].className+' '+str; 
			}
		}
		//删除指定的类名
		jq.prototype.removeClass=function(str){
			if(this.hasClass(str)){
				var t=this[0].className.split(' ');
				var r=[];
				for (var i = 0; i < t.length; i++) {
					if(t[i]!==str){
						r.push(t[i]);
					}
				}
				this[0].className=r.join(' ');
			}
		}
		//如果有此类名就删除，如果没有就加上
		jq.prototype.toggleClass=function(str){
			if(this.hasClass(str)){
				this.removeClass(str);
			}else{
				this.addClass(str);
			}
		}
		//解决兼容性问题
		jq.prototype.text=function(text){
			if(this[0].textContent){
				this[0].textContent=text;
			}else{
				this[0].innerText=text;//IE
			}
		}
		//获取css里的样式
		jq.prototype.getCss=function(style){
			if(getComputedStyle){
				return getComputedStyle(this[0],null)[style];
			}else{
				return this[0].currentStyle[style];//IE 
			}
		}
		//设置css里的样式
		jq.prototype.setCss=function(obj){
			for(var i in obj){
				this[0].style[i]=obj[i];
			}
		}
		//去除文本节点
		jq.prototype.myChildNodes=function(){
			var oldNodes=this[0].childNodes;
			var newNodes=[];
			for (var i = 0; i < oldNodes.length; i++) {
				if(oldNodes[i].nodeType==3&&oldNodes[i].nodeValue.trim()==''){
					continue;
				}
				if(oldNodes[i].nodeType==3){
					oldNodes[i].nodeValue=oldNodes[i].nodeValue.trim();
				}
				newNodes.push(oldNodes[i]);
			}
			return newNodes;
		}
		//取出第一个节点
		jq.prototype.myFirstChild=function(){
			return this.myChildNodes()[0];
		}
		//
		jq.prototype.myLastChild=function(){
			var tmp=this.myChildNodes();
			return tmp[tmp.length-1];
		}
		//当我们想知道文档坐标的那个div的一系列父元素中有某些div使用了定位属性的时候我们使用下面这个函数
		//确定文档坐标
		jq.prototype.getElementPosition=function(){
			var e=this[0];
			var x=0,y=0;
			//while(e.nodeName!='BODY'){
				while(e!=null){
				x+=e.offsetLeft;
				y+=e.offsetTop;
				//e=e.parentNode;
				e=e.offsetParent;//找有定位的那个div。不用考虑有没有定位
			}
			return{x:x,y:y}
		}
	function $(str){
		return new jq(str);
	}
	window.$=$;
})()
function getClass(classname,obj){
    var obj=obj||document;//确定所选范围
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(classname);
    }else{
        var arr=[];
        var all=obj.getElementsByTagName('*');
        for(var i=0;i<all.length;i++){
            if(checkClass(all[i].className,classname)){
                arr.push(all[i]);
            }
        }
        return arr;
    }
}
function checkClass(oldclass,newclass) {
    //oldclass:'two three' newclass:'two'
    var arr=oldclass.split(' ');
    for(var i=0;i<arr.length;i++){
        if(arr[i]==newclass){
            return true;
        }
    }
    return false;
}
//解决文本兼容性问题 获得纯文本
function getText(obj,val){
    if(obj.innerText==undefined){
        if(val==undefined){
           return obj.textContent;
        }else{
            obj.textContent=val;
        }
  }else{
        if(val==undefined){
            return obj.innerText;
        }else{
            obj.innerText=val;//IE
        }
    }
}
//获取css里的样式 获得元素的属性值
    function getStyle(obj,style){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj,null)[style];
        }else{
            return obj.currentStyle[style];
        }
    }



