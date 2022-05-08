var cuerpo,simple,hex,button,span;
var simpleHex=true;
var colorName=['red','yellow','green', 'white','purple','blue','orange']
window.onload=()=>{
    cuerpo=document.getElementById('cuerpo')
    simple=document.querySelector('#encabezado div :first-child')
    hex=document.querySelector('#encabezado div :last-child')
    button=document.querySelector('button')
    span=document.querySelector('span')

    button.addEventListener('click',cambiaColor)
    hex.onclick=()=>{simpleHex=false;maquetar('#E5E9EC')}
    simple.onclick=()=>{simpleHex=true;maquetar('#E5E9EC')}
    
}
function cambiaColor(){
    var color;
    if(simpleHex){
        switch(Math.round(Math.random()*3)){
            case 1:color=randColorName();break;
            case 2:color=randColorRGB();break;
            default:color=randColorHex();
        }
    }else{
        color=randColorHex()
    }
    maquetar(color)
}
function maquetar(color){
    cuerpo.style.cssText=`background-color:${color}`
    span.textContent=`${color}`
}
function randColorName(){
    let c=colorName[Math.round(Math.random()*(colorName.length-1))]
    return c
}
function randColorRGB(){
    let c=[Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255)]
    return `rgb(${c[0]},${c[1]},${c[2]})`
}
function randColorHex() {
    let c = Math.floor(Math.random()*16777215).toString(16);
    return `#${c}`
}