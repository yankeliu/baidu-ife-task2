window.onload=function(){
    var inpt=document.getElementsByClassName('text')[0];
    var ul=document.getElementsByClassName('date')[0];
    var data=['a','abandon','javascript','vae','be','ball','basketball','love','guowen','fh','git','abdomen', 'abide', 'ability', 'able', 'abnormal', 'aboard', 'abolish', 'abound', 'about', 'above', 'fiction', 'field', 'fierce', 'fight', 'test2', 'test3','html','aaa','bbbbb','b3','bmnb'];
    
    inputChange();
    clickfun();
    keydownli();


//输入值改变时触发事件
function inputChange(){
    if (inpt.addEventListener){
        inpt.addEventListener('input',OnInput,false);
    }
    else if (inpt.attachEvent){
        inpt.attachEvent('onpropertychange',OnPropChanged)
    }
}

function OnInput(event){
    var val=event.target.value;
    handle(val);
}
function OnPropChanged(event){
    if (event.propertyName.toLowerCase=='value'){
        var val=event.srcElement.value;
        handle(val);
    }
}

//根据输入的值来改变显示
function handle(str){
    if (str==''){
        ul.style.display='none';
    }
    else{
        var arr=eval(data);
        var matc='^'+str;
        var li="";
        for (var i=0;i<arr.length; i++){
            if(arr[i].match(matc)){
                li=li+'<li><span>'+arr[i].match(matc)[0]+'</span>'+arr[i].substr(arr[i].match(matc)[0].length) +"</li>";
            }
            ul.innerHTML=li;
            ul.style.display='block';
        }
    }   
}
    //添加事件监听
    function addEvent(element, event, listener) {
        if (element.addEventListener) { //标准
            element.addEventListener(event, listener, false);
        } else if (element.attachEvent) { //低版本ie
            element.attachEvent("on" + event, listener);
        } else { //都不行的情况
            element["on" + event] = listener;
        }
}
    //事件代理
    function delegateEvent(elem,tag,eventName,listen){
        return addEvent(elem,eventName,function(ev){
            var ev=ev||event;
            var target=ev.target||ev.srcElement;
            if (target.nodeName.toLowerCase()==tag){
                listen.call(target,ev);
            }
        });
    }
    
    
    /*function delegateEvent(element, tag, eventName, listener) {
    // your implement
    return addEvent(element, eventName, function(ev) {
        var oEvent = ev || event; //兼容处理
        var target = oEvent.target || oEvent.srcElement; //兼容处理
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    });
}*/
    
    
    function hasClass(element, sClass) {
    if (element && element.className) {
        return element.className.match(new RegExp("(\\s|^)" + sClass + "(\\s|$)"));
    } else {
        return false;
    }
}
    function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className += " " + newClassName;
    }
}
    
    // 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if (hasClass(element, oldClassName)) {
        var reg = new RegExp("(\\s|^)" + oldClassName + "(\\s|$)");
        element.className = element.className.replace(reg, "");
    }
}
function removeliclass(){
    var allli=document.getElementsByTagName('li');
    for (var j=0;j<allli.length;j++){
        allli[j].className='';
    }
}
    
    //为li元素添加点击、悬浮事件
    function clickfun(){
        delegateEvent(ul,'li','click',function(){
            var taval=this.innerHTML;
            var reg=/^<span>(\w+)<\/span>(\w+)/;
            var trm=taval.match(reg);
            if (trm){
                inpt.value=trm[1] + trm[2];
            }
            else{
                inpt.value='';
            }
            ul.style.display='none';
        });
        //鼠标悬浮
        delegateEvent(ul,'li','mouseover',function(){
            removeliclass();
            addClass(this,'active');
        });
         //鼠标移出
        delegateEvent(ul,'li','mouseout',function(){
            removeClass(this,'active');
        });
    
    }
    //输入框聚焦时的键盘事件
function keydownli(){
    addEvent(inpt,"keydown",function (ev){
        var act=document.getElementsByClassName('active')[0];
        //向上
        if (ev.keyCode==38){
            if (act){
                var pre=act.previousElementSibling;
                if (pre){
                    act.className='';
                    addClass(pre,'active');
                }
            }else{
                var fli=document.getElementsByTagName('li')[0];
                addClass(fli,'active');
                }
        }
        //向下
        if(ev.keyCode==40){
            if (act){
                var next=act.nextElementSibling;
                if (next){
                    act.className='';
                    addClass(next,'active');
                }
            }else{
                var fli=document.getElementsByTagName('li')[0];
                addClass(fli,'active');
                }
        }
        //enter
        if (ev.keyCode==13){
            var taval=act.innerHTML;
            var reg=/^<span>(\w+)<\/span>(\w+)/;
            var trm=taval.match(reg);
            if (trm){
                inpt.value=trm[1] + trm[2];
            }
            else{
                inpt.value='';
            }
            ul.style.display='none';
        }
    });
}
}


