var f,fechaExp,interval,t;
window.onload=()=>{
    f=Array.from(document.querySelectorAll('h3'));
    
    fechaExp=new Date('2022-04-15T11:30:00');
    t=fechaExp-new Date()+1000
    
    interval=setInterval(()=>{
        if(!countDown())clearInterval(interval)
    },1000)
   
}
function countDown(){
    t-=1000
    var rest=t/1000
    maqueta([Math.floor(rest/3600/24),Math.floor(rest/3600%24),Math.floor(rest/60%60),Math.floor(rest%60)])
    return t>1000
}
function maqueta(arr){
    f.forEach((h,i) => {
        h.textContent=`${arr[i]}`;
    });
}
/* console.log(new Date(rest*1000))
    if(rest){
        sec=rest
        if (sec>60) {
            sec=rest%60
            console.log(Math.round(rest%60))
            rest/=60 //sec a min
            min=rest
            
            if(min>60){
                min=rest%60
                console.log(Math.round(rest%60))
                rest/=60 // min a h
                hour=rest
                if(hour>24){
                    hour=rest%24
                    console.log(Math.round(rest%24))
                    rest/=24 //h a day
                    day=rest
                    console.log(Math.round(rest))
                }
            }
        }
    } */