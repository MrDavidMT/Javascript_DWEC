var enlaces;
window.onload=()=>{
    enlaces=Array.from(document.querySelectorAll('section a'));
    enlaces.forEach((a)=>{
        a.addEventListener('mouseenter',(e)=>{
            let index=enlaces.indexOf(e.target);
            switch(index){
                case 0: e.target.firstChild.textContent='Introduccion a la programación';break;
                case 1: e.target.firstChild.textContent='Objetos globales de JavaScript';break;
                case 2: e.target.firstChild.textContent='Funciones, arrays y objetos';break;
                case 3: e.target.firstChild.textContent='Eventos y formularios';break;
                case 4: e.target.firstChild.textContent='DOM';break;
                case 5: e.target.firstChild.textContent='JSON';break;
            }
        });
        a.addEventListener('mouseleave',(e)=>{
            let index=enlaces.indexOf(e.target);
            switch(index){
                case 0: e.target.firstChild.textContent='Unit 1';break;
                case 1: e.target.firstChild.textContent='Unit 2';break;
                case 2: e.target.firstChild.textContent='Unit 3';break;
                case 3: e.target.firstChild.textContent='Unit 4';break;
                case 4: e.target.firstChild.textContent='Unit 5';break;
                case 5: e.target.firstChild.textContent='Unit 6';break;
            }
        });
    });
}
