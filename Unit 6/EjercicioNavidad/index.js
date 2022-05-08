/* 

---------- EL INPUT DE BUSQUEDA (arriba a la derecha) POR AHORA NO HACE NADA --------------
Falta por terminar, corregir fallos, y mejorar código

En primer lugar te pide permiso para acceder tu ubicacion para buscarte el tiempo que hace(un poco resumido) del dia de hoy hasta pasado mañana
y además con ello busca las top stories del país que te encuentres. Si no se permite acceder la ubicación no te busca el tiempo pero te busca 
en un principio las topstories globales.

En el menu bar de la izquierda se puede buscar las top stories por pais y sus categorias, o todas las noticias (all news) por idioma y categorías.
----
Busco el lugar en el input del tiempo en el lado derecho con opencagedata.com y con sus coord busco el el tiempo 
porque en weatherapi.com no reconoce bien la busqueda de por escrito de algunos lugares

------------------APIS USADAS ---------------------
api.thenewsapi.com api_token=cAiDZoxX7sc3LSCaOd53UjKGAcdy608cSPeXCzZ5
150 llamadas por dia

weatherapi.com   key=540bc0ffbd5341a8bc7161559212412 
1,000,000 por mes

https://api.opencagedata.com key=00643323011641e89018c4688327e85b
 Gratis max: 2500 busquedas por dia (En este codigo por cada letra que se escriba se hace una busqueda)
 */


var menuOpen,siteNav,menudespl,menuPrincipal,ciudadTiempo,c,tituloDoc,loading,posibLugares,esperandLocalizacion,divListaLugares,tipo='top',categoria='',idioma='',pais='',oldestNew='',haciendoPeticion=false;
//datos necesarios de la api de news para las busquedas
var idiomas=['ar','bg','bn','cs','da','de','el','en','es','et','fa','fi','fr','he','hi','hr','hu','id','it','ja','ko','lt','multi','nl','no','pl','pt','ro','ru','sk','sl','sv','ta','th','tr','uk','vi','zh'];
var paises=[{pais:'Argentina',cod:'ar'},{pais:'Armenia',cod:'am'},{pais:'Australia',cod:'au'},{pais:'Austria',cod:'at'},
    {pais:'Belarus',cod:'by'},{pais:'Belgium',cod:'be'},{pais:'Bolivia',cod:'bo'},{pais:'Brazil',cod:'br'},
    {pais:'Bulgaria',cod:'bg'},{pais:'Canada',cod:'ca'},{pais:'Chile',cod:'cl'},{pais:'China',cod:'cn'},
    {pais:'Colombia',cod:'co'},{pais:'Croatia',cod:'hr'},{pais:'Czechia',cod:'cz'},{pais:'Ecuador',cod:'ec'},
    {pais:'Egypt',cod:'eg'},{pais:'France',cod:'fr'},{pais:'Germany',cod:'de'},{pais:'Greece',cod:'gr'},
    {pais:'Honduras',cod:'hn'},{pais:'Hong Kong',cod:'hk'},{pais:'India',cod:'in'},{pais:'Indonesia',cod:'id'},
    {pais:'Iran',cod:'ir'},{pais:'Ireland',cod:'ie'},{pais:'Israel',cod:'il'},{pais:'Italy',cod:'it'},
    {pais:'Japan',cod:'jp'},{pais:'Korea',cod:'kr'},{pais:'Mexico',cod:'mx'},{pais:'Netherlands',cod:'nl'},
    {pais:'New Zealand',cod:'nz'},{pais:'Nicaragua',cod:'ni'},{pais:'Pakistan',cod:'pk'},{pais:'Panama',cod:'pa'},
    {pais:'Peru',cod:'pe'},{pais:'Poland',cod:'pl'},{pais:'Portugal',cod:'pt'},{pais:'Qatar',cod:'qa'},
    {pais:'Romania',cod:'ro'},{pais:'Russia',cod:'ru'},{pais:'Saudi Arabia',cod:'sa'},{pais:'South Africa',cod:'za'},
    {pais:'Spain',cod:'es'},{pais:'Switzerland',cod:'ch'},{pais:'Syria',cod:'sy'},{pais:'Taiwan',cod:'tw'},
    {pais:'Thailand',cod:'th'},{pais:'Turkey',cod:'tr'},{pais:'Ukraine',cod:'ua'},{pais:'United Kingdom',cod:'gb'},
    {pais:'United States Of America',cod:'us'},{pais:'Uruguay',cod:'uy'},{pais:'Venezuela',cod:'ve'}];

window.onload=()=>{
    menuOpen = document.querySelector('header>div');
    siteNav= document.querySelector('nav');
    menuOpen.onclick=abreCierraMenu;
    
    tituloDoc=document.querySelector('section h2');
    migasPan=document.querySelector('body section>p');
    rellenaMenus();
    loading=Array.from(document.querySelectorAll('section>div span'));
    divListaLugares=document.querySelector('aside>div');
    getPosition();
    
    ciudadTiempo=document.querySelector('aside input');
    ciudadTiempo.onkeyup=(e)=>{prediccionTiempo(e)}

    window.onscroll=()=>{
        if((document.body.clientHeight<(2*window.innerHeight+window.scrollY))&&!haciendoPeticion){searchNews()} 
    };
    
}
function abreCierraMenu(){
    siteNav.classList.toggle('nav-open');
    menuOpen.classList.toggle('menu-open');
}

function rellenaMenus(){
    menuPrincipal=document.querySelectorAll('nav>ul>li');
    for(let s=0;s<menuPrincipal.length;s++){
        switch (s) {
            case 0:menuPrincipal[s].childNodes[0].addEventListener('click',(e)=>{
                limpiaParametros();
                tipo='top';
                migasPan.textContent='';
                tituloDoc.textContent='Top Stories';
                peticionCambioParametros();
            });break;
            case 1:menuPrincipal[s].childNodes[0].onclick=(e)=>{
                limpiaParametros();
                tipo='all';
                migasPan.textContent='';
                tituloDoc.textContent='All News';
                peticionCambioParametros();
            };break;
            default:menuPrincipal[s].childNodes[0].onclick=(e)=>{
                categoria=`&categories=${e.currentTarget.textContent.toLowerCase()}`;
                migasPan.textContent=`${tipo.toUpperCase()} > ${e.currentTarget.textContent}`
                peticionCambioParametros();
            };
        }
    }
    menudespl=document.querySelectorAll('nav ul ul');
    for(p of paises){
        let l=document.createElement('li');
        let span=document.createElement('span');
        span.onclick=(e)=>{
            limpiaParametros();
            pais=`&locale=${paises.filter((p)=>{return p.pais==e.currentTarget.textContent})[0].cod}`;
            tipo='top';
            migasPan.textContent='';
            peticionCambioParametros();
        }
        span.textContent=p.pais;
        l.appendChild(span);
        menudespl[0].appendChild(l);
    } 
    for(let i in idiomas){
        let l=document.createElement('li');
        let span=document.createElement('span');
        span.onclick=(e)=>{
            limpiaParametros();
            idioma=`&language=${idiomas[idiomas.indexOf(e.currentTarget.textContent)]}`;
            tipo='all';
            migasPan.textContent='';
            peticionCambioParametros();
        }
        span.textContent=idiomas[i];
        l.appendChild(span);
        menudespl[1].appendChild(l);
    }
}
function limpiaParametros(){
    tipo='';
    categoria='';
    idioma='';
    pais='';
    oldestNew='';
}
function peticionCambioParametros(){
    cargandoBusqueda();
    removeNews();
    searchNews();
    abreCierraMenu();
}
function getPosition(){
    esperandLocalizacion=setInterval(()=>{
        if(posibLugares!=undefined){
            pais=`&locale=${posibLugares[0].components.country_code}`;
            cargandoBusqueda();
            searchNews();
            clearInterval(esperandLocalizacion);
        }
    },500);
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success,error,options);  
}
function success(pos) {
    document.querySelector('aside table').style.cssText='display:block';
    let lugar=`${pos.coords.latitude},${pos.coords.longitude}`;
    obtenerTiempo(lugar);
    localizaLugar(lugar);
}
function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    clearInterval(esperandLocalizacion);
    cargandoBusqueda();
    searchNews();
}
function obtenerTiempo(coord){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=540bc0ffbd5341a8bc7161559212412&q=${coord}&days=3&lang=es`).then(response=>{
        response.json().then(data=>{maquetarTiempo(data)});
    });    
}
function maquetarTiempo(tiempo){
    document.querySelector('aside h3').textContent=`Tiempo en ${tiempo.location.name} (${tiempo.location.region},${tiempo.location.country})`;
    for(let i=0;i<3;i++){
        let dia=Array.from(document.querySelectorAll(`aside table td:nth-child(4n+${i+2})`));
        for(let j=0;j<dia.length;j++){
            switch(j){
                case 0:dia[j].textContent=`${tiempo.forecast.forecastday[i].day.mintemp_c} a ${tiempo.forecast.forecastday[i].day.maxtemp_c} (ºC)`;break;
                case 1:dia[j].firstElementChild.setAttribute('src',`${tiempo.forecast.forecastday[i].hour[7].condition.icon}`);break;
                case 2:dia[j].firstElementChild.setAttribute('src',`${tiempo.forecast.forecastday[i].hour[15].condition.icon}`);break;
                case 3:dia[j].firstElementChild.setAttribute('src',`${tiempo.forecast.forecastday[i].hour[21].condition.icon}`);break;
                default:dia[j].textContent=`${tiempo.forecast.forecastday[i].day.totalprecip_mm} mm`;
            }
        }
    }
    let day=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    let d=new Date().getUTCDay()+1;
    if(d>6)
        d=d-7;
    document.querySelector('aside table th:last-child').textContent=`${day[d]}`;
}
function prediccionTiempo(e){
    let lugar=e.currentTarget.value.trim();
    if(valida(lugar)){
        localizaLugar(lugar.replace(' ','%'));
        if(!divListaLugares.classList.contains('div-ubic')){
            despliegaBusqueda();
        }
    }else if(divListaLugares.classList.contains('div-ubic')){
        despliegaBusqueda();
    }       
}
function valida(texto){
    return (!/[0-9!@#$%^&]/.test(texto)&&(/[a-zñA-ZÑ]/.test(texto))&&(texto.length>1))
}
function localizaLugar(lugar){
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lugar}&pretty=1&limit=50&key=00643323011641e89018c4688327e85b`).then(response=>{
        response.json().then(data=>{
            posibLugares=data.results;
            maquetarPosibLugares();
        })
    })
}
function maquetarPosibLugares(){
    while (divListaLugares.firstChild) {
        divListaLugares.removeChild(divListaLugares.firstChild);
    }
    let ulListaPosibLugares=document.createElement('ul');
    if(posibLugares.length==0)
        posibLugares.push({formatted:'No results found...'})
    for(let i of posibLugares){
        let li=document.createElement('li');
        li.textContent=i.formatted;
        li.onclick=eligeLugar;
        ulListaPosibLugares.appendChild(li);
    }
    divListaLugares.appendChild(ulListaPosibLugares);   
}
function despliegaBusqueda(){
    divListaLugares.classList.toggle('div-ubic');
}
function eligeLugar(e){
    let l=posibLugares.find(lugar=>lugar.formatted==e.currentTarget.textContent);
    obtenerTiempo(`${l.geometry.lat},${l.geometry.lng}`);
    despliegaBusqueda();
    ciudadTiempo.value='';
}

function cargandoBusqueda(){
    let i=0;
    let a=true;
    document.querySelector('section>div').style.cssText='display:block';
    document.querySelector('body').style.cssText='opacity:0.5';
    c=setInterval(()=>{
        if(i==loading.length){
            a=!a;
            i=0;
        }
        if(a){
            loading[i].style.cssText='opacity:0.5';
        }else{
            loading[i].style.cssText='opacity:1';
        }
        i++;
    },150);
}
function stopCarga(){
    clearInterval(c);
    document.querySelector('section>div').style.cssText='display:none';
    document.querySelector('body').style.cssText='opacity:1';
}

function removeNews(){
    let news=Array.from(document.querySelectorAll('section article'));
    for (n of news){
        n.remove();
    }
}
function searchNews(){
    haciendoPeticion=true;
    let url=`https://api.thenewsapi.com/v1/news/${tipo}?api_token=cAiDZoxX7sc3LSCaOd53UjKGAcdy608cSPeXCzZ5${idioma}${categoria}${pais}${oldestNew}`;
    
    fetch(url).then(response=>{
        if(response.ok)
            response.json().then(data=>{maquetaNoticias(data.data);haciendoPeticion=false;});
        stopCarga();
    });
}

function maquetaNoticias(a){
    if (a.length>0){
        for(let news of a){
            let articulo=document.createElement('article');
            let title=document.createElement('h3');
            let description=document.createElement('p');
            let img=document.createElement('img');
            let url=document.createElement('a');
            let fecha=document.createElement('p');
            title.textContent=news.title;
            description.textContent=`${news.description}`;
            url.setAttribute('href',`${news.url}`);
            url.textContent=news.source;
            img.setAttribute('src',`${news.image_url}`);
            oldestNew=`&published_before=${news.published_at.slice(0,16)}`;
            fecha.textContent=`${news.published_at.slice(0,16)}`;
            articulo.appendChild(title);
            articulo.appendChild(img);
            articulo.appendChild(description);
            articulo.appendChild(url);
            articulo.appendChild(fecha);
            document.querySelector('body>section').appendChild(articulo);
        }
    }else{
        let articulo=document.createElement('article');
        let title=document.createElement('h3');
        title.textContent='No results found...';
        articulo.appendChild(title);
        document.querySelector('body>section').appendChild(articulo);
    }    
}
