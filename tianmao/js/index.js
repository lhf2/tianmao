$(function(){
    //出现下拉
    $('.has-hidden').hover(function(){
        $('.has-hidden').stop();
        $(this).css('background','#fff');
        $($('.xsj')[$(this).index('.has-hidden')]).css('-webkit-transform','rotateZ(180deg)');
        var id=$(this).attr('hideId');
        $('#'+id).show();
    },function(){
        $('.has-hidden').stop();
        $(this).css('background','#f7f7f7');
        $($('.xsj')[$(this).index('.has-hidden')]).css('-webkit-transform','rotateZ(0deg)');
        var id=$(this).attr('hideId');
        $('#'+id).hide();
    })
    //单个 轮播
    var color1=['#CC100F','#EEEBEC','#F2B910','#970A00','#FFDF22'];
    var a= 0,num= 0,banner=$('.banner'),tupianall=$('.tupianall'),xiaodians=$('.xiaodian'),tupianjihes=$('.tupianjihe'),ysjs=$('.yousanjiao');
    var hh=function(){
        tupianall.stop();
        tupianjihes.css('-webkit-transform','translatex('+a+'px)');
        a=a-810;
        if(a<-3240){
            a=0;
        }
        tupianall.css('-webkit-transform','scale(1.1,1.1)');
        $(tupianall[num]).css('-webkit-transform','scale(1,1)');
        banner.css('background',color1[num]);
        xiaodians.css('background','black');
        $(xiaodians[num]).css('background','red');
        num++;
        if(num>4){
            num=0;
        }
    }
    var h=setInterval(hh,1200);
    //一一对应num
    xiaodians.hover(function(){
        xiaodians.stop();
        clearInterval(h);
        xiaodians.css('background','black')
        $(this).css('background','red');
        tupianjihes.css('-webkit-transform','translatex('+($(this).index())*(-810)+'px)');
        banner.css('background',color1[$(this).index()]);
        if($(this).index()==4){
            a=0;num=0;
        }else{
            a=(-810)*($(this).index());num=$(this).index();
        }
    },function(){
        xiaodians.stop();
        clearInterval(h);
        h=setInterval(hh,1000);
    })
    //左边导航栏
    var colors=['#CC100F','#EEEBEC','#FF8400','#FFDE21','#8011B2',
        '#FFF6FB','#FFCBDC','#EF1047','#F1C83A','#F7C41A',
        '#E9EDDE','#D2283F','#F62567','#9E1400','#0090FD','#D93C43'];
    $('.li').hover(function(){
        $('.li').css('background','#181818');
        $(this).css('background','#A90000');
        ysjs.hide();
        if($(this).index('.li')!=0){
            $(ysjs[$(this).index('.li')]).show();
            clearInterval(h);
            $($('.lit')[$(this).index('.li')]).css('-webkit-transform','scale(1,1)')
        }else{
            clearInterval(h);
            h=setInterval(hh,1000);
        }
        $(ysjs[$(this).index('.li')]).css('-webkit-transform','rotateZ(0deg)');
        $($('.yc1')[$(this).index('.li')]).show();
        $('.brl').hide();$('.bx').hide();
        $($('.brl')[$(this).index('.li')]).show();
        $($('.bx')[$(this).index('.li')]).show();
        banner.css('background',colors[$(this).index()]);
    },function(){
        if($(this).index('.li')!=0){
            clearInterval(h);
            $($('.lit')[$(this).index('.li')]).css('-webkit-transform','scale(1.1,1.1)')
        }else{
            clearInterval(h);
            h=setInterval(hh,1000);
        }
        $($('.yc1')[$(this).index('.li')]).hide();
        $(this).css('backgroundColor','#4a4a4a');
        $(ysjs[$(this).index('.li')]).css('-webkit-transform','rotateZ(90deg)');
    })
   /* $('.lit').hover(function(){
        $('yc1').hide();
        $($('.yc1')[$(this).index('.lit')]).show();
    },function(){
        $($('.yc1')[$(this).index('.lit')]).hide();
    })*/
    //热门品牌
    var worldArr=[],fashionArr=[],chinaArr=[],tianmao=[],index=0;
    //top 选项卡 换一批 图片集合
    var btn=$('.brand-title-link>a'),more=$('.more'),imglists=$('.img-list');
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
        for(var i=0;i<listArr.length;i++){
            var link=$('<a>'),img=$('<img>'),xin=$('<div>');
            link.addClass('ranimg');
            link.css({float:'left',width:'16.66666%',height:'81px'});
            img.attr('src',listArr[i]);
            link.append(img);
            $(imglists[index]).append(link);
            xin.addClass('xin');
            link.append(xin);
        }
        //出现心
        var ranimgs=$('.ranimg'),xins=$('.xin');
        for(var i=0;i<listArr.length;i++){
            ranimgs.hover(function(){
                $(xins[$(this).index('.ranimg')]).show();
            },function(){
                $(xins[$(this).index('.ranimg')]).hide();
            })
        }
    }
    show(0);
    //添加点击事件
    btn.click(function(){
        btn.lock=false;
        btn[0].lock=true;
        index=$(this).index();
        imglists.hide();
        btn.css({fontWeight:'normal',borderBottom:0});
        $(imglists[$(this).index()]).show();
        $(btn[$(this).index()]).css({fontWeight:'blod',borderBottom:'2px solid #000'});
        if(!$(this).lock){
            show($(this).index());
            $(this).lock=true;
        }
    })
    //换一批
    more.click(function(){
        $(imglists[index]).html('');
        show(index);
    })
    //点击图片 出其他图片
    var first=$('#imgl-1'),second=$('.hot-img2'),imgbox=$('.hot-img-list-1'),tip=0;
    first.hover(function(){
        first.stop();
        imgbox.show();
        for (var i = 0; i < second.length; i++) {
            if (tip) {
                var t = setTimeout(function () {
                    imgbox.css('width',tip);
                }, 100);
            } else {
                    imgbox.css('width','266px');
            }
            tip = tip + 266;
        }
    },function(){
        first.stop();
        for (var i = 0; i < second.length; i++) {
            if (tip) {
                var t = setTimeout(function () {
                    imgbox.css('width',tip);
                }, 100);
            } else {
                imgbox.css('width','266px');
            }
            tip = tip - 266;
        }
    })
    //楼层 轮播
    function wheel(leftB,rightB,box){
        var leftB=leftB;
        var rightB=rightB;
        var box=box;
        var list=box.children('.loucengtu');
        var winW=$(list[0]).outerWidth();
        var len=list.length;
        box.css('width',len*winW+"px");
        var num1=0;
        var t=setInterval(move,2000);
        function move(){
            box.stop();
            num1--;
            if (num1 == -(len - 1)) {
                box.animate({marginLeft: num1 * winW}, function () {
                    box.css('marginLeft',0);
                })
                num1 = 0;
            } else {
                box.animate({marginLeft: num1* winW});
            }
        }
        function move1(){
            box.stop();
            num1++;
            if (num1 == 1) {
                box.css('marginLeft',-(len - 1) * winW + "px");
                num1 = -(len - 2);
                box.animate({marginLeft: num1 * winW});
            } else {
                box.animate({marginLeft: num1 * winW});
            }
        }
        leftB.hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,2000);
        });
        rightB.hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,2000);
        });
        leftB.click(function(){move()});
        rightB.click(function(){move1()});
    }
    for (var i = 0; i < $('.qian').length; i++) {
        wheel($($('.qian')[i]), $($('.hou')[i]), $($('.loucengjihe')[i]));
    }
    //返回顶部
    var rtn;
    $('.return').click(function(){
        rtn=$(window).scrollTop();
        var tmp=rtn/10;
        var rt=setInterval(function(){
            rtn=rtn-tmp;
            $(window).scrollTop(rtn);
            if(rtn<0){
                clearInterval(rt);
            }
        },30);
    })
    //楼层跳转
    var floors=$('.floor'),jumpbtn=$('.mui-lift-nav'),search1=$('.title-search'),jump=$('.sn-nav-wrapper'),jumpyc=$('.mui-lift-nav-name'),fimg=$('.mui-lift-nav img');
    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();
        if(scrollT>400){
            search1.animate({top:0},100);
        }else{
            search1.animate({top:-50},100);
        }
        //jump
        if(scrollT>700){
            jump.show();
        }else{
            jump.hide();
        }
        for(var i=0;i<floors.length;i++){
            floors[i].h=$(floors[i]).position().top;
            if(scrollT>=floors[i].h-400){
                jumpyc.hide();fimg.show();$(fimg[i]).hide();
                $(jumpyc[i]).css({display:'block',color:'#c40000'});
             }
        }
        jumpbtn.click(function(){
           $({aa:$(window).scrollTop()}).animate({aa:floors[$(this).index()].h-50},{duration:500,step:function(){
             $(window).scrollTop(this.aa);
             }})
             jumpyc.hide();fimg.show();
             $(fimg[$(this).index('.mui-lift-nav')]).hide();
             $(jumpyc[$(this).index('.mui-lift-nav')]).css({color:'#FFFFFF',display:'block'});
        })
    })
    //右边显示隐藏
    var imgbtn=$('.mui-mbar-tab'),imgdel=$('.mui-mbar-tab-tip');
    imgbtn.hover(function(){
        imgdel.stop();
        $(imgdel[$(this).index('.mui-mbar-tab')]).show();
        $(imgdel[$(this).index('.mui-mbar-tab')]).animate({right:35},70);
    },function(){
        imgdel.stop();
        $(imgdel[$(this).index('.mui-mbar-tab')]).hide();
        $(imgdel[$(this).index('.mui-mbar-tab')]).animate({right:70},70);
    })
})
