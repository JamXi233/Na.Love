function day520(){
    
    var date =  new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    if (Cookies.get(520)!="1"){
        if (year+month+day==2046) {
            document.getElementById("titlemain").innerHTML = "520/我爱你"
            document.getElementById("titlesecond").innerHTML = "今天呀,今天是5月20日哦,祝我们永远长久哦！"
            document.getElementById("titlethird").innerHTML = "我本来打算给你买东西来着,但是我没钱了,唉,希望你不会嫌弃我吧..."
            document.getElementById("four").innerHTML = "昨天真的好累,为了这个页面学了好久CSS"
            document.getElementById("five").innerHTML = "昨晚给你弄了个好看的东西,你看看好不好看><a href='Heart'><button>给娜娜的Heart</button></a>"
            document.getElementById("six").innerHTML = "这个页面只会显示一次哦,不是开玩笑哦,不信你刷新一下试试,嘻嘻"
            document.getElementById("ulmain").style.display="none";
            snow();
        }
        Cookies.set("520","1",{ expires:999, path:"/" });
    }
}

function snow() {
            //    1、定义一片雪花模板
            var flake = document.createElement('div');
            // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
            flake.innerHTML = '❤';
            flake.style.cssText = 'position:absolute;color:#fff;';

            //获取页面的高度 相当于雪花下落结束时Y轴的位置
            var documentHieght = window.innerHeight;
            //获取页面的宽度，利用这个数来算出，雪花开始时left的值
            var documentWidth = window.innerWidth;

            //定义生成一片雪花的毫秒数
            var millisec = 100;
            //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
            setInterval(function() { //页面加载之后，定时器就开始工作
                //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
                var startLeft = Math.random() * documentWidth;

                //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
                var endLeft = Math.random() * documentWidth;

                //随机生成雪花大小
                var flakeSize = 5 + 20 * Math.random();

                //随机生成雪花下落持续时间
                var durationTime = 4000 + 7000 * Math.random();

                //随机生成雪花下落 开始 时的透明度
                var startOpacity = 1;

                //随机生成雪花下落 结束 时的透明度
                var endOpacity = 1;

                //克隆一个雪花模板
                var cloneFlake = flake.cloneNode(true);

                //第一次修改样式，定义克隆出来的雪花的样式
                cloneFlake.style.cssText += `
                        left: ${startLeft}px;
                        opacity: ${startOpacity};
                        font-size:${flakeSize}px;
                        top:-25px;
                              transition:${durationTime}ms;
                      `;

                //拼接到页面中
                document.body.appendChild(cloneFlake);

                //设置第二个定时器，一次性定时器，
                //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
                setTimeout(function() {
                    //第二次修改样式
                    cloneFlake.style.cssText += `
                                left: ${endLeft}px;
                                top:${documentHieght}px;
                                opacity:${endOpacity};
                            `;

                    //4、设置第三个定时器，当雪花落下后，删除雪花。
                    setTimeout(function() {
                        cloneFlake.remove();
                    }, durationTime);
                }, 0);

            }, millisec);
        }



/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});