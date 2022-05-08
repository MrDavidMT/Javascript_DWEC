var tipo='All News',categorias=[],span,paramTipo='all',haciendoPeticion=false
var news={
    categoriaPedidas:[],
    paramTipoPedido:'',
    page:1,
    search:'',
    noticias:[]
}
window.onload=()=>{
    $('input[type="radio"]').click(function(e){
        paramTipo=e.target.value
        if(paramTipo=='all'){
            $('label')[0].style.color='#f0e68c'
            $('label')[1].style.color='white'           
        }else{
            $('label')[0].style.color='white'
            $('label')[1].style.color='#f0e68c'
        }
        tipo=$(this).parent().text()
        span=$(this).parent().text()
        if(categorias.length>0)span+=' > '
        span+=`${categorias.join(', ')}`
        
        if($('h1').css('display')=='block'){
            limpiaNoticias()
            busqueda()
        }         
    })
    $('.menu').click(function(){      
        $(this).toggleClass('menu-open')
        $('nav').slideToggle(500)
        if($(this).attr('class').indexOf('menu-open')!=-1){
            $('nav').css('display','grid')
            if( !categorias.every(q=>news.categoriaPedidas.some(w=>w==q))|| news.paramTipoPedido!=paramTipo){
                limpiaNoticias()
                busqueda()
            }
        }
    })
    $('nav h3').click(function(){
        $(this).next().slideToggle(500)
        $(this).next().css('display','grid')       
        $(this).css('color',($(this).css('color')=='rgb(255, 255, 255)')?'rgb(240, 230, 140)':'rgb(255, 255, 255)')
        $(this).children('i').toggleClass('fa-angle-down')
        $(this).children('i').toggleClass('fa-angle-up')      
        if((($('h1').css('display')=='block')&&($(this).children('i').attr('class')=='fas fa-angle-down'))&&( !categorias.every(q=>news.categoriaPedidas.some(w=>w==q))|| news.paramTipoPedido!=paramTipo)){
            limpiaNoticias()
            busqueda()
        }
    })
    $('header div i').click(function(){
        $(this).next().fadeToggle(0)
        $(this).parent().css('position',($(this).parent().css('position')=='relative')?'absolute':'relative')
    })
    $('li').click(function(){
        var ctg=$(this).text();
        (categorias.some(c=>c==ctg))?categorias.splice(categorias.indexOf(ctg),1):categorias.push(ctg);
        span=`${tipo} > ${categorias.join(', ')}`;
        $(this).css('color',($(this).css('color')=='rgb(255, 255, 255)')?'#f0e68c':'white');      
    })
    $('input[type="search"]').keyup(function(e){
        if(!/[-+<>*()?¿%&$~@_/!¡]/.test($(this).val())&&($(this).val().length>0)){
            if(e.key=='Enter'){
                $(this).val('')
                paramTipo='all'
                span='All News'
                $('label')[0].style.color='#f0e68c'
                $('label')[1].style.color='white'
                limpiaNoticias()
                busqueda()
            }else{
                news.search=$(this).val();
            }
            $(this).css('color','black')
        }else{
            $(this).css('color','red')   
        } 
    })
    $(window).scroll(function(){
        if((document.body.clientHeight<(2*window.innerHeight+window.scrollY))&&!haciendoPeticion){ busqueda()}
        $('.arrow').css('display',(window.innerHeight<window.scrollY)?'block':'none')
    })
    window.onresize=()=>{
        if(document.body.clientWidth>=768){
            $('.menu').addClass('menu-open')
            $('nav').css('display','grid')
        }
    }
    if(localStorage.TheNewsApi){
        news=JSON.parse(localStorage.getItem('TheNewsApi'))
        maquetaNoticias(news.noticias)
    }else{
        busqueda()
    }
}

function limpiaNoticias(){
    $('section').empty()
    $('section').prepend($('<p></p>'))
    $('section>p').text(span)
    news.page=1
    news.search=''
    news.noticias=[]
}
function busqueda(){
    var catg=''
    if(categorias.length>0)catg='&categories='+categorias.join(',').toLowerCase()
    var pageN='page='+news.page
    if(news.search.length>0)news.search='&search='+news.search
    haciendoPeticion=true
    let url=`https://api.thenewsapi.com/v1/news/${paramTipo}?api_token=cAiDZoxX7sc3LSCaOd53UjKGAcdy608cSPeXCzZ5&language=es${catg}${news.search}&${pageN}`;
    $('.spin').css({'animation':'spin 1s infinite', 'display':'block'})
    fetch(url).then(response=>{
        if(response.ok){    
            response.json().then(data=>{
                maquetaNoticias(data.data);
                haciendoPeticion=false;
                news.page++
                categoriaPedidas=[...categorias]
                $('.spin').css({'animation':'""', 'display':'none'})
                news.paramTipoPedido=paramTipo
                news.noticias.push(...data.data)
                localStorage.setItem(`TheNewsApi`,JSON.stringify(news))
            });  
        }        
    });
}
function maquetaNoticias(a){
    if (a.length>0){
        for(let notic of a){
            $('section').append(
                $('<article></article>').append(
                    $('<h3></h3>').text(notic.title),
                    $('<img>').attr({'src':notic.image_url,'alt':'Imagen no disponible'}),
                    $('<p></p>').text(notic.description),
                    $('<a></a>').attr({'href':notic.url,'target':'_blank'}).text(notic.source),
                    $('<p></p>').text((''+new Date(notic.published_at)).split('GMT')[0])
                )
            )
        }
    }else{
        $('section').append($('<article></article>').append($('<h3></h3>').text('No results found...')))
    }   
}