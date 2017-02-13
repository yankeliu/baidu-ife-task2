function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "-500px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}


function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload!='function'){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

//添加点击事件
function addClickNum(){
    var ele=document.getElementById("btn").getElementsByTagName('li');
    for (var i=0; i<ele.length; i++){
       // var nth=parseInt(ele[i].value);
       // var leftDis=-(nth-1)*500;
        ele[i].onclick=function(){
            clearInterval(lunboagain);
            
            //闭包
            var nth=parseInt(this.value);
            var leftDis=-nth*500;
            moveElement('ul',leftDis,0,20);
            
            var active=document.getElementsByClassName("active");
            if (active.length>0){
                for (var a=0; a<active.length; a++){
                    active[a].className='';
                }
            }
            this.className='active';  
            lunboagain=setInterval('lunbo()',3000);
        };
    }
    return;
}

addLoadEvent(addClickNum());

//轮播
function lunbo(){
    var elem = document.getElementById('ul');
    if (!elem.style.left) {
    elem.style.left = "-500px";
  }
    var xpos = parseInt(elem.style.left);
    if(xpos<-2499){
        elem.style.left=0+'px';
    }
    var newxpos=parseInt(elem.style.left);
    var xd=newxpos-500;
    moveElement('ul', xd ,0,20);
    var active=document.getElementsByClassName("active");
            if (active.length>0){
                for (var a=0; a<active.length; a++){
                    active[a].className='';
                }
            }
    var lith=-xd/500-1;
    document.getElementById("btn").getElementsByTagName('li')[lith].className='active';       
        
}
var lunboagain=setInterval('lunbo()',3000);



//向左滑动
function leftbod(){
    var left=document.getElementsByClassName("left")[0];
    left.onclick=function(){
        clearInterval(lunboagain);
        var elem = document.getElementById('ul');
        var act=document.getElementsByClassName("active")[0];
        var nth=parseInt(act.value);
        if(nth==1){
            elem.style.left=-3000+'px';
            nth=6;
        }
        var leftDis=-(nth-1)*500;
        moveElement('ul',leftDis,0,20);
        var active=document.getElementsByClassName("active");
            if (active.length>0){
                for (var a=0; a<active.length; a++){
                    active[a].className='';
                }
            }
        document.getElementById("btn").getElementsByTagName('li')[nth-2].className='active';    
        lunboagain=setInterval('lunbo()',3000);
    }
}

addLoadEvent(leftbod());

//向右滑动
function rightbod(){
    var right=document.getElementsByClassName("right")[0];
    right.onclick=function(){
        clearInterval(lunboagain);
        var elem = document.getElementById('ul');
        var act=document.getElementsByClassName("active")[0];
        var nth=parseInt(act.value);
        if(nth==5){
            elem.style.left=0+'px';
            nth=0;
        }
        var leftDis=-(nth+1)*500;
        moveElement('ul',leftDis,0,20);
        var active=document.getElementsByClassName("active");
            if (active.length>0){
                for (var a=0; a<active.length; a++){
                    active[a].className='';
                }
            }
        document.getElementById("btn").getElementsByTagName('li')[nth].className='active';    
        lunboagain=setInterval('lunbo()',3000);
    }
}

addLoadEvent(rightbod());




















