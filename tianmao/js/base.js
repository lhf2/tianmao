window.onload=function(){
	var $hashiddens=document.getElementsByClassName('has-hidden');
		for(var i=0;i<$hashiddens.length;i++){
             $hashiddens[i].onmousemove=function(){
             this.style.backgroundColor='#fff';
			 var $xsjs=this.getElementsByClassName('xsj')[0];
			 $xsjs.style.webkitTransform='rotateZ(180deg)';
	  	     var id=this.getAttribute('hideId');
			 var $hidden=document.getElementById(id);
			 $hidden.style.display='block';
			 }
			$hashiddens[i].onmouseout=function(){
			  var $xsjs=this.getElementsByClassName('xsj')[0];
			 $xsjs.style.webkitTransform='rotateZ(0deg)';
			 this.style.backgroundColor='#f7f7f7';
	  	     var id=this.getAttribute('hideId');
			 var $hidden=document.getElementById(id);
			 $hidden.style.display='none';
			 } 
		}
    //**********************轮播*****************************
     var $zanshi=document.getElementById('zanshi');
     var color1=['#CC100F','#EEEBEC','#F2B910','#970A00','#FFDF22'];
	 var $tupianjihes=document.getElementsByClassName('tupianjihe')[0];
	 var $xiaodians=document.getElementsByClassName('xiaodian');
	 var $tupianalls=document.getElementsByClassName('tupianall');
	 var a=0;
	 var num=0;
	 for (var i = 0; i < $xiaodians.length; i++) {
	 	$xiaodians[i].index=i;
	 	$xiaodians[i].onmouseover=function(){
	 		 $tupianjihes.style.webkitTransform='translatex('+(this.index)*(-810)+'px)';
	 		 clearInterval(h);
	 		 for (var i = 0; i < $xiaodians.length; i++) {
	 		 	$xiaodians[i].style.backgroundColor='black';
	 		 }
	 		 	$xiaodians[this.index].style.backgroundColor='red';
				$bs[0].style.backgroundColor=color1[this.index];
			if(this.index==4){
	 		 		a=0;num=0;
	 		 	}else{
	 		 		a=(-810)*(this.index);num=this.index;
	 		 	}
	 	}
	 	$xiaodians[i].onmouseout=function(){
	 		clearInterval(h);
	 		h=setInterval(hh,1000);
	 	}
	 }
	 var hh=function(){
	 		 $tupianjihes.style.webkitTransform='translatex('+a+'px)';
	 		 a=a-810;
	 		 if(a<-3240){
	 		 	a=0;
	 		 }
	 		 $bs[0].style.backgroundColor=color1[num];
	 		 for(var j=0;j<$tupianalls.length;j++){
				$tupianalls[j].style.webkitTransform='scale(1.1,1.1)';
	 		 }
	 		    $tupianalls[num].style.webkitTransform='scale(1,1)';
	 		 for (var i = 0; i < $xiaodians.length; i++) {
	 		 	$xiaodians[i].style.backgroundColor='black';
	 		 }   
	 		 	$xiaodians[num].style.backgroundColor='red';
	 		 	 num++;
	 		 	if(num>4){
	 		 		num=0;	 		 		
	 		 	}
	 }
	 var h=setInterval(hh,1000);
	//*******************************************************
	var $liss=document.getElementsByClassName('li');
	var $ul=document.getElementById('ul');
	var $bxs=document.getElementsByClassName('bx');
	var $lits=document.getElementsByClassName('lit');
	var $yousanjiaos=document.getElementsByClassName('yousanjiao');
	var $brs=document.getElementsByClassName('brl');
	var $bs=document.getElementsByClassName('banner');
	var colors=['#CC100F','#EEEBEC','#FF8400','#FFDE21','#8011B2',
	'#FFF6FB','#FFCBDC','#EF1047','#F1C83A','#F7C41A',
	'#E9EDDE','#D2283F','#F62567','#9E1400','#0090FD','#D93C43'];
	var flag='';
	    for(var i=0;i<$liss.length;i++){
			$liss[i].index=i;
	$liss[i].onmouseover=function(e){
				if(flag!=''){
					$yousanjiaos[Number(flag)].style.display='none';
					$liss[Number(flag)].style.backgroundColor='#181818';
					$yousanjiaos[this.index].style.webkitTransform='rotateZ(0deg)';
				}
					this.style.backgroundColor='#A90000';
					if(this.index!=0){
			    $yousanjiaos[this.index].style.display='block';
			  }
				if(this.index!=0){
					clearInterval(h);
				}else{
					clearInterval(h);
					 h=setInterval(hh,1000);
				}			    				
				var $ycs=this.getElementsByClassName('yc1')[0];
			    if($ycs){
			     $ycs.style.display='block';				
			  }
			  
			  for(var j=0;j<$bxs.length;j++){
			     $bxs[j].style.display='none';
				 $brs[j].style.display='none';
			  }
			  $bxs[this.index].style.display='block';
			  $brs[this.index].style.display='block';
			  if(this.index!=0){
			     $lits[this.index].style.webkitTransform='scale(1,1)';
			  }
                $bs[0].style.backgroundColor=colors[this.index];
			}
	$liss[i].onmouseout=function(e){
				if($ul.contains(e.relatedTarget)){
			    	this.style.backgroundColor='#181818';
			    	 if(this.index!=0){
			    $yousanjiaos[this.index].style.display='none';
			  }
			    	}else{
			    	flag=String(this.index);
			    	this.style.backgroundColor='#4a4a4a';
			   	if(this.index!=0){
			        $yousanjiaos[this.index].style.webkitTransform='rotateZ(90deg)';
			     }
			    	}
				var $ycs=this.getElementsByClassName('yc1')[0];
			    if($ycs){
			    $ycs.style.display='none';				
			  }
			  if(this.index!=0){
               $lits[this.index].style.webkitTransform='scale(1.1,1.1)';
              }
              
			}
		}
	//热门品牌
	var worldArr=[];
	var fashionArr=[];
	var chinaArr=[];
	var tianmao=[];
	var index=0;
	//top 选项卡
	var btn=getClass('brand-title-link')[0].getElementsByTagName('a');
	//alert(btn.length);
	//换一批
	var more=getClass('more')[0];
	//图片集合
	var imglists=getClass('img-list');
	//alert(imglists.length)
	//将24张图片分别存入不同的数组中
	for(var i=1;i<=24;i++){
		worldArr.push("images/h"+i+".jpg");
		fashionArr.push("images/h"+i+".jpg");
		chinaArr.push("images/h"+i+".jpg");
		tianmao.push("images/h"+i+".jpg");
	}
	var imgsArr=[worldArr,fashionArr,chinaArr,tianmao];
	//随机排列图片
	function random(arr,num){
		var newarr=[];
		var num=num||24;
		for(var i=0;i<arr.length;i++){
			newarr.push(arr[parseInt(Math.random()*num)]);
		}
		return newarr;
	}
	//显示图片
	function show(index){
		switch (index){
			case 1:
				var imgs=random(worldArr);
				break;
			case 2:
				var imgs=random(fashionArr);
				break;
			case 3:
				var imgs=random(chinaArr);
				break;
			case 4:
				var imgs=random(tianmao);
				break;
		}
		var listArr=random(imgsArr[index]);
		//console.log(listArr);
		for(var i=0;i<listArr.length;i++){
			var link=document.createElement('a');
			link.setAttribute('class','ranimg');
			link.style.cssText="float:left;width:16.66666%;height:81px";
			var img=document.createElement('img');
			img.src=listArr[i];
			link.appendChild(img);
			imglists[index].appendChild(link);
			var xin=document.createElement('div');
			xin.setAttribute('class','xin');
			link.appendChild(xin);
		}
		//出现心
		var ranimgs=getClass('ranimg');
		//console.log(ranimgs);
		var xins=getClass('xin');
		//console.log(xins);
		for(var i=0;i<listArr.length;i++) {
			for (var j = 0; j < ranimgs.length; j++) {
				ranimgs[j].index = j;
				ranimgs[j].onmouseover = function () {
					xins[this.index].style.display = 'block';
				}
				ranimgs[j].onmouseout = function () {
					xins[this.index].style.display = 'none';
				}
			}
		}
	}
	show(0);
	//添加点击事件
	for(var j=0;j<btn.length;j++){
		btn[j].lock=false;
		btn[0].lock=true;
		btn[j].index=j;
		btn[j].onclick=function(){
			index=this.index;
			for(var k=0;k<imglists.length;k++){
				imglists[k].style.display='none';
				btn[k].style.fontWeight='normal';
				btn[k].style.borderBottom='0px';

			}
			imglists[this.index].style.display='block';
			btn[this.index].style.fontWeight='bold';
			btn[this.index].style.borderBottom='2px solid #000';
			if(!this.lock){
				show(this.index);
				this.lock=true;
			}
		}
	}
	//换一批
	more.onclick=function(){
		imglists[index].innerHTML='';
		show(index);
	}
	//点击图片 出其他图片
	var $first=document.getElementById('imgl-1');
	var $kuan=getClass('hot-img-list-1')[0];
	var $second=getClass('hot-img2');
	var tip=0;
	$first.onmouseover=function(){
		$kuan.style.display='block';
		for (var i = 0; i < $second.length; i++) {
			if(tip){
				var time=setTimeout(function(){
					$kuan.style.width=tip+'px';
				},100)
			}else{
				$kuan.style.width=266+'px';
			}
			tip=tip+266;
		}
	}
	$first.onmouseout=function(){
		for (var i = 0; i < $second.length; i++) {
			if(tip){
				var time=setTimeout(function(){
					$kuan.style.width=tip+'px';
				},100)
			}else{
				$kuan.style.width=266+'px';
			}
			tip=tip-266;
		}
	}
	 //*********************************************************
	 	  var leftBs=getClass("qian");
		  for (var i = 0; i < leftBs.length; i++) {
		    wheel(getClass("qian")[i],getClass("hou")[i],getClass("loucengjihe")[i])
		  };
		  function wheel(leftB,rightB,box){
		  var leftB=leftB;
		  var rightB=rightB;
		  var box=box;
		  var list=getClass("loucengtu",box);
		  var winW=list[0].offsetWidth;
		  var len=list.length;
		  box.style.width=len*winW+"px";
		  var num=0;
		  var t=setInterval(move,2000);
		  function move(){
		    num--;
		   if(num==-(len-1)){
		    animate(box,{marginLeft:num*winW},function(){
		      box.style.marginLeft=0;
		    })
		    num=0;
		   }else{
		   animate(box,{marginLeft:num*winW})
		   }
		  }
		   function move1(){
		    num++;
		   if(num==1){
		    box.style.marginLeft=-(len-1)*winW+"px";
		    num=-(len-2);
		    animate(box,{marginLeft:num*winW})
		   }else{
		   animate(box,{marginLeft:num*winW})
		   }
		  }

		  leftB.onmouseover=rightB.onmouseover=function(){
		    clearInterval(t)
		  }
		  leftB.onmouseout=rightB.onmouseout=function(){
		    t=setInterval(move,2000);
		  }
		  leftB.onclick=function(){
		   move();
		  }
		   rightB.onclick=function(){
		    move1();
		  }

		}
	/**************************************************************************/
	var $return=document.getElementsByClassName('return')[0];
	var st;var ts;
	/*window.onscroll=function(){
		st=document.body.scrollTop;
		if(st>800){
			$('#title-search').show();
			$('#sn-nav-wrapper').show();
			clearTimeout(ts);
			ts=setTimeout(function(){
				$('#title-search').setCss({height:'50px'});
				$('#sn-nav-wrapper').setCss({height:'367px'});
			},200)			
		}
		if(st<100){
			$('#title-search').hide();
			$('#title-search').setCss({height:'0px'});
			$('#sn-nav-wrapper').hide();
			$('#sn-nav-wrapper').setCss({height:'0px'});
		}
	}*/
	var t;
	$return.onclick=function(){
			//y 微秒 要从 X 到 0
			//10微秒做一次改变
			//每次改变多长距离 tmp=x/(y/10)
			t=document.body.scrollTop;
			var tmp=t/10;
		var rt=setInterval(function(){
			t=t-tmp;
			document.body.scrollTop=t;
			if(t<0){
				clearInterval(rt);
			}
		},10);
	}

	//楼层跳转
	var floors=$('.floor');
	var jumpbtn=$('.mui-lift-nav');
	var search1=$('.title-search')[0];
	var jump=$('.sn-nav-wrapper')[0];
	var jumpyc=$('.mui-lift-nav-name');
	window.onscroll=function(){
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		var flag=true;
		var flag1=true;
		if(scrollT>400){
			animate(search1,{top:0});
			flag=false;
			flag1=true;
		}else{
			animate(search1,{top:-50});
			flag1=false;
			flag=true;
		}
		//jump
		if(scrollT>700){
			jump.style.display='block';
		}else{
			jump.style.display='none';
		}
		for(var i=0;i<floors.length;i++){
			floors[i].h=floors[i].offsetTop;
			if(scrollT>=floors[i].h-225){
				for(var j=0;j<jumpyc.length;j++){
					jumpyc[j].style.display='none';
					//fimg[j].style.display='block';
				}
					jumpyc[i].style.color='#C40000';
					jumpyc[i].style.display='block';
					jumpyc[i].style.background='#F5F5F5';
					//fimg[i].style.display='none';
			}

		}

		for(var i=0;i<jumpbtn.length;i++){
			(function(i) {
				jumpbtn[i].onclick = function () {
					var obj=document.documentElement.scrollTop?document.documentElement:document.body;
					animate(obj,{scrollTop:floors[i].h-225});
					for (var k = 0; k < jumpyc.length; k++) {
						jumpyc[k].style.display = 'none';
					}
					jumpyc[i].style.display = 'block';
					jumpyc[i].style.color = '#fff';
					jumpyc[i].style.background = '#C40000';
				}
			})(i)
		}
	}
}