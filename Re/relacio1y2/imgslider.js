var numeroImg=1;
var img;
window.onload=()=>{
    img=document.querySelector('img');
    var iz=document.querySelector('div :nth-child(2)');
    iz.onclick=()=>{
        if(--numeroImg<1) numeroImg=4
        img.setAttribute('src',`img/${numeroImg}.jpg`)
    }
    document.querySelector('div :nth-child(3)').onclick=()=>{
        if(++numeroImg>4) numeroImg=1
        img.setAttribute('src',`img/${numeroImg}.jpg`)
    }
}