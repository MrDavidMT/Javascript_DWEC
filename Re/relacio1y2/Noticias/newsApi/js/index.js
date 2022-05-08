
var filtro,news,cargar,menu,spanFiltro,spin,arrow,haciendoPeticion=false
var news={
    dominiosFuentes:[],
    fuentes:[],
    filtroDominios:[],
    pageN:1,
    paramDominio:[],
    noticias:[]
}
window.onload=()=>{
    spin=document.querySelector('.spin')
    arrow=document.querySelector('.arrow')
    filtro=document.getElementById('filtro')
    spanFiltro=document.querySelector('header + div p')
    menu=document.querySelector('header>div')
    menu.addEventListener('click',abrirCerrarMenu)
    cargar=document.querySelector('button')
    cargar.onclick=busqueda
    //Si no hay noticias guardadas en el localStorage se maqueta el menu con las fuentes de las ultimas 100 noticias
    if(localStorage.Noticias){
        news=JSON.parse(localStorage.getItem('Noticias'))
        maquetaFiltroNav()
        news.noticias.forEach(n=>maquetaNoticias(n))
        maquetaSpanFiltro()     
    }else{
        fetch(`https://newsapi.org/v2/everything?q=a&pageSize=100&apiKey=4065c1376d3b40c596498520357330fe`).then(response=>{
            response.json().then(data=>{
                data.articles.forEach(element => {
                    news.fuentes.push(element.source.name.split('.')[0])
                    news.dominiosFuentes.push(element.url.split('/')[2].replace('www.',''))
                });
                //fuentes es para la maquetacion de las opciones del menu y para que aparezca de que fuentes hemos buscado
                news.fuentes=Array.from(new Set(news.fuentes))
                //dominios es para guardar los posiblies dominios de las fuentes que querramos buscar
                news.dominiosFuentes=Array.from(new Set(news.dominiosFuentes))
                maquetaFiltroNav()
            });
        });
    }
    //con el evento scroll hacemos otra peticion si se baja a partir de cierta parte y que no se esté ya haciendo una petición
    window.onscroll=()=>{
        if((document.body.clientHeight<(2*window.innerHeight+window.scrollY))&&!haciendoPeticion){busqueda()} 
        arrow.style.cssText=(window.innerHeight<window.scrollY)?'display:block':'display:none';
    }
}

function maquetaFiltroNav(){
    news.fuentes.forEach((f,i)=>{
        let li=document.createElement('li')
        let input=document.createElement('input')
        input.setAttribute('type','checkbox')
        input.setAttribute('id',f)
        input.valor=news.dominiosFuentes[i]
        //si en el localSotage hay noticias, con esto marcamos en el menu las fuentes de las noticias qeu hay
        input.checked=news.filtroDominios.some(s=>s==input.valor)
        input.addEventListener('change',filtrar)
        li.appendChild(input)
        let label=document.createElement('label')
        label.textContent=f
        label.setAttribute('for',f)
        li.appendChild(label)
        filtro.appendChild(li)
    })
}
function filtrar(e){
    if(e.target.checked){
        news.filtroDominios.push(e.target.valor)
    }else{
        news.filtroDominios.splice(news.filtroDominios.indexOf(e.target.valor),1)
    }
}
function abrirCerrarMenu(){
    menu.classList.toggle('menu-open')
    if(menu.classList.contains('menu-open')){
        filtro.parentNode.style.cssText='display:block'
    }else{
        filtro.parentNode.style.cssText='display:none'
        //Si al cerrar el menu los parametros utilizados en la ultima busqueda son los mismos no se realiza la peticion        
        if( !news.filtroDominios.every(q=>news.paramDominio.some(w=>w==q))){
            document.querySelector('section').remove()
            document.querySelector('body').appendChild(document.createElement('section'))
            news.pageN=1;
            (news.filtroDominios.length>0)?busqueda():news.paramDominio='';
        }
        maquetaSpanFiltro()
    }
}
function maquetaSpanFiltro() {
    var p=document.createElement('p')
    if(news.filtroDominios.length>0){
        news.filtroDominios.forEach(f=>{
            let span=document.createElement('span')
            span.textContent=f.split('.')[0].toLocaleUpperCase()
            p.appendChild(span)
        })
    }else{
        let span=document.createElement('span')
        span.textContent='Select a source of information'
        p.appendChild(span)
    }
    spanFiltro.replaceWith(p)
    spanFiltro=p
}
//En vez de controlar con la fecha en los parametros voy aumentando page 1,2,3... 
function busqueda(){
    news.paramDominio=`&domains=${news.filtroDominios.join(', ')}`
    haciendoPeticion=true
    fetch(`https://newsapi.org/v2/everything?q=a${news.paramDominio}&pageSize=10&page=${news.pageN}&apikey=4065c1376d3b40c596498520357330fe`).then(response=>{
        if(response.status!=200)
            throw Error(response.status)
        return response
//Se intenta controlar el error de la petición haciendo visible un boton al final para intentarlo de nuevo
    }).then(response=>{//hacemos funcionar un loading con css mientras en lo que se tarda recibir y maquetar la peticion
        spin.style.cssText='animation:spin 1s infinite; display:block;'
        response.json().then(data=>{
            news.noticias=Array.from(data.articles).sort((a,b)=>new Date(b.publishedAt)-new Date(a.publishedAt))
            news.noticias.forEach(noticia=>{
                maquetaNoticias(noticia)
                haciendoPeticion=false
            })
            news.pageN++
            spin.style.cssText='animation:""; display:none;'
            cargar.style.cssText='display:none'
            localStorage.setItem(`Noticias`,JSON.stringify(news))
        });
    }).catch(error=>{
        console.log(error)
        cargar.style.cssText='display:block'
        haciendoPeticion=false
    });
    news.paramDominio=[...news.filtroDominios]
}

function maquetaNoticias(noticia) {
    let art=document.createElement('article')
    let fech=document.createElement('p')
    let texto=document.createElement('p')
    let direcc=document.createElement('p')
    let a=document.createElement('a')
    let a2=document.createElement('a')
    let tit=document.createElement('h3')
    let img=document.createElement('img')
    //en caso de no recibir un src valido para la img se mostrara el alt
    img.setAttribute('alt','Imagen de noticia no disponible')
    let div=document.createElement('div')
    fech.textContent=`${new Date(noticia.publishedAt)}`.split('(')[0]
    texto.textContent=noticia.description
    tit.textContent=noticia.title
    img.setAttribute('src',noticia.urlToImage)
    a.setAttribute('href',noticia.url)
    a2.setAttribute('href',noticia.url)
    a.setAttribute('target','_blank')
    a2.setAttribute('target','_blank')
    a.textContent='Leer más sobre la noticia'
    div.appendChild(fech)
    div.appendChild(tit)
    div.appendChild(texto)
    direcc.appendChild(a)
    div.appendChild(direcc)
    art.appendChild(div)
    a2.appendChild(img)
    art.appendChild(a2)
    document.querySelector('section').appendChild(art)

}

    