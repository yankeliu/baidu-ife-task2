Array.prototype.unreapeat=function(){
    var newArry=[];
    var pa={};
    for (var i=0;i<this.length;i++){
        if((!pa[this[i]])&&(this[i]!=='')&&(this[i]!==' ')) newArry.push(this[i]);
        pa[this[i]]=true;
    }
    return newArry;
}
function showInterest(){
    var ist=document.getElementById("interest").value;
    var arr=ist.split(/，|,| 　|、|；|；|;|\n| /);
    var arr1=arr.unreapeat();
    
    if ((arr1.length>10)||(arr1.length<1)){
        var warn=document.createElement('p');
        warn.innerHTML="请输入正确的兴趣爱好数";
        warn.setAttribute("id",'warn');
        document.getElementsByTagName('div')[0].appendChild(warn);
        return;
    }
    else{
        if (document.getElementById('warn')){
            var warn=document.getElementById('warn');
            warn.parentNode.removeChild(warn);
        }
        if (document.getElementsByClassName('showtext').length>0){
            var p=document.getElementsByClassName('showtext');  
            p[0].parentNode.removeChild(p[0]);
        }
        var showtext=document.createElement('div');
        showtext.setAttribute("class","showtext");
        document.getElementById('container').appendChild(showtext);
        for(var i=0;i<arr1.length;i++){
            var  islist=document.createElement('input');
            islist.setAttribute("type","checkbox");
            islist.setAttribute("name","interest");
            islist.setAttribute("value",arr1[i]);
            document.getElementsByClassName('showtext')[0].appendChild(islist);  
            var txt=document.createElement('span');
            txt.innerHTML=arr1[i]+"    ";
            document.getElementsByClassName('showtext')[0].appendChild(txt);
            
        }
    }
    
    
}

var sh=document.getElementById("show");
sh.onclick=showInterest;