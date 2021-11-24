window.addEventListener('load',main);

function main(){
    document.getElementById('normal').addEventListener('click',cambioTemaNormal);
    document.getElementById('minimalista').addEventListener('click',cambioTemaMinimalista);
    
}
function cambioTemaMinimalista(e){
    e.preventDefault();
    document.getElementById('hojaEstilo').href="./css/estiloMinimalista.css";
}
function cambioTemaNormal(e){
    e.preventDefault();
    document.getElementById('hojaEstilo').setAttribute('href','./css/estiloNormal.css');
}