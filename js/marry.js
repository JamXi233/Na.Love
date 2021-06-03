
function time(){
    var vWeek,vWeek_s,vDay;
    vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    var date =  new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
};
setInterval("time()",10);

function tab(date){
    var oDate = new Date();
    var nY = oDate.getFullYear();
    var nM = oDate.getMonth();
    var nD = oDate.getDate();
    var newDate = new Date(nY,nM,nD,0,0,0);
    var date = date.split('-');
    var lastDate = new Date(date[0],(date[1]-1),date[2],0,0,0);
    var result = '';
    if(newDate.getTime() > lastDate.getTime()){
        //result = date[0]+'年'+date[1]+'月'+date[2]+'日到今天已经过去了（'+ (newDate.getTime()-lastDate.getTime())/86400000 +'）天了';
        result = '我们已经相爱（'+ (newDate.getTime()-lastDate.getTime())/86400000 +'）天了';
    }else{
        //result = date[0]+'年'+date[1]+'月'+date[2]+'日到今天还有（'+ Math.abs(newDate.getTime()-lastDate.getTime())/86400000 +'）天了';
    }
    return result;
}
document.getElementById("marrytime").innerHTML = tab('2020-03-17');

function gotime(){
    X=new Date("5/19/2021 14:22:00");
    Y=new Date();
    T=(Y.getTime()-X.getTime());
    M=24*60*60*1000;
    a=T/M;
    A=Math.floor(a);
    b=(a-A)*24;
    B=Math.floor(b);
    c=(b-B)*60;
    C=Math.floor((b-B)*60);
    D=Math.floor((c-C)*60);
    document.getElementById("gotime").innerHTML = "网站已运行"+A+"天"+B+"小时"+C+"分"+D+"秒";
}
setInterval("gotime()",10);

console.log('%c*-*让我来看看是哪个小可爱在看控制台呢*-*', 'color: #43bb88;font-size: 24px;font-weight: bold;text-decoration: underline;');
console.log('%c'+tab('2020-03-17'), 'color: #1565c0;font-size: 16px;font-weight: bold;');
console.log('%c永远爱你哦', 'color: #ec407a;font-size: 16px;font-weight: bold;');
console.log('%c小笨蛋', 'color: #d500f9;font-size: 14px;font-weight: bold;');
