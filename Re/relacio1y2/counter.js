var botones,h2;
var number=0;
window.onload=()=>{
    botones=document.getElementsByTagName('button')
    h2=document.querySelector('h2')
    botones[0].onclick=()=>{
        maquetar(--number)
    }
    botones[1].onclick=()=>{
        number=0
        maquetar(number)
    }
    botones[2].onclick=()=>{
        maquetar(++number)
    }
}
function maquetar(n) {
    h2.textContent=`${n}`
    h2.style.cssText=`color:${(n>0)?'green':(n<0)?'red':'black'}`
}