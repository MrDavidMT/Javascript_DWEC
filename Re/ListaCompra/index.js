
var alrt,timeout,ul,numeroLista,input,edit=false,lista=[]
window.onload=()=>{
    alrt=$('.alert')
    $('div>button').click(agrega)
    input=$('input').keydown(function(e){if (e.key==='Enter')agrega()})
    $('section>button').click(limpiaLista)
    ul=$('ul')
    if(localStorage.Lista){
        JSON.parse(localStorage.getItem('Lista')).forEach(element => {
            add(element.valor)
        });
    }
}
function limpiaLista(){
    $(ul).empty()  
    $(alrt).text('Empty List')
    $('section>button').css('visibility','hidden')
    alrtStyleDanger()
    lista=[]
    localStorage.setItem(`Lista`,JSON.stringify(lista))
}
function agrega(){
    if(/[\wñÑ]/.test($(input).val().trim())){
        if(edit){
            edita()
            $(alrt).text('Value Changed')
            $('div>button').text('Submit')
            edit=false
        }else{
            add($(input).val().trim())
            $(alrt).text('Item Added To The List')
        }
        if ($(alrt).attr('class').indexOf('alert-success')) {
            $(alrt).removeClass('alert-danger')
            $(alrt).addClass('alert-success')
            clearTimeout(timeout)
            timeout=setTimeout(()=>{
                $(alrt).removeClass('alert-success')
                $(alrt).text('')
            },3000)
        }
        localStorage.setItem(`Lista`,JSON.stringify(lista))
    }else{
        $(alrt).text('Please Enter Value')
        alrtStyleDanger()
    }
    $(input).val('')
}
function alrtStyleDanger(){
    if ($(alrt).attr('class').indexOf('alert-danger')) {
        $(alrt).addClass('alert-danger')
        $(alrt).removeClass('alert-success')
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            $(alrt).removeClass('alert-danger')
            $(alrt).text('')
        },3000)
    }
}
function add(texto){
    lista.push({
        li: maqueta(texto),
        valor:texto
    })
    if(lista.length>0)$('section>button').css('visibility',' visible')   
}
function edita(){
    lista[numeroLista].li.firstChild.textContent=$(input).val()
    lista[numeroLista].valor=$(input).val()   
}
function maqueta(texto){
    let li=$('<li></li>').append(
        $('<p></p>').text(texto),
        $('<button></button>').attr('class','edit').click(function(e){
            numeroLista=lista.findIndex(ele=>ele.li===e.currentTarget.parentNode)
            $(input).val(`${lista[numeroLista].valor}`)
            $('div>button').text('Edit')
            edit=true
        }).append($('<i></i>').attr('class','fas fa-edit')),
        $('<button></button>').attr('class','delete').click(function(e){
            numeroLista=lista.findIndex(ele=>ele.li===e.currentTarget.parentNode)
            $(e.currentTarget).parent().remove()
            lista.splice(numeroLista,1)
            if(lista.length>0){
                alrt.text('Item Removed')
            }else{
                alrt.text('Empty List')
                $('section>button').css('visibility','hidden')
            }
            alrtStyleDanger()
            localStorage.setItem(`Lista`,JSON.stringify(lista))
        }).append($('<i></i>').attr('class','fas fa-trash'))
    );
    $(ul).append($(li))
    return $(li)[0]
}
