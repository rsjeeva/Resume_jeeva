var cn = document.getElementById('content');
var main = document.createElement('main_content');
var count=1;

var next = document.getElementById('next');
var prev = document.getElementById('prev');
var c1 = document.getElementById('content1');
var c2 = document.getElementById('content2');
var c3 = document.getElementById('content3');
var c4 = document.getElementById('content4');
next.addEventListener('click', function()
{
    
    if(count>=1 && count<4)
    {
    count++;
    display(count);
    // count++;
    }
    console.log(count);
});

prev.addEventListener('click',function(){
    if(count>1 && count<=4)
    {
    count--;
    display(count);
    }
    console.log('prev: ',count);
});

function display(x){
    if(count===1)
    {
        cn.innerHTML='';
        cn.append(c1);
    }

    else if(count===2)
    {
        c2.setAttribute('id', 'cont2');
        cn.innerHTML='';
        cn.append(c2);
    }
    else if(count===3)
    {
        c3.setAttribute('id','cont3');
        cn.innerHTML='';
        cn.append(c3);
    }
    else
    {
        c4.setAttribute('id','cont4');
        cn.innerHTML='';
        cn.append(c4);
    }
}