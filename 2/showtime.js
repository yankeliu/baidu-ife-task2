function run(){
    var today=Date.now();
    
    var dat=document.getElementById("date").value;
    var ymd=dat.match(/(^\d{4})-(\d{2})-(\d{2}$)/);
    if(ymd){
        var tarda=new Date();
        tarda.setFullYear(ymd[1]);
        tarda.setMonth(ymd[2]-1);     
        tarda.setDate(ymd[3]);
        tarda.setHours(0);
        tarda.setMinutes(0);
        tarda.setSeconds(0);
        var tartime=tarda.getTime();
        var time=(tartime-today)/1000;//毫秒变秒
        var day=parseInt(time/(60*60*24));//秒变日，下面以此类推；
        var hours=parseInt(time/(60*60)%24);//小时
        var min=parseInt((time/60)%60);//分钟
        var sec=parseInt(time%60);//秒
       // console.log('s');
        if (time>0){
            document.getElementById("container").innerHTML="<span>"+"距离设置时间还有："+day+"天"+hours+"小时"+min+"分钟"+sec+"秒"+"</span>";
            setTimeout(run,1000);
        }
        else{
            clearTimeout(run);
            document.getElementById("container").innerHTML="时间到了";
        }
    }
    else{
        document.getElementById("container").innerHTML="请输入正确的时间格式"
    }
}

var butn=document.getElementById('show');
butn.onclick=run;