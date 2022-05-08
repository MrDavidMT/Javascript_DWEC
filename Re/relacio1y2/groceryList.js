
var alrt,timeout,submitEdit,clear,ul,numeroLista,input,edit=false,lista=[]
window.onload=()=>{
    alrt=document.querySelector('.alert')
    
    submitEdit=document.querySelector('div>button')
    input=document.querySelector('input')
    clear=document.querySelector('section>button')
    ul=document.querySelector('ul')

    clear.addEventListener('click',limpiaLista)
    input.addEventListener('keydown',(e)=>{if (e.key==='Enter')agrega()})
    submitEdit.addEventListener('click',agrega)
    if(localStorage.Lista){
        JSON.parse(localStorage.getItem('Lista')).forEach(element => {
            add(element.valor)
        });
    }
}
function limpiaLista(){
    let newUl=document.createElement('ul')
    ul.replaceWith(newUl)
    ul=newUl
    alrt.textContent='Empty List'
    clear.style.cssText='visibility: hidden'
    alrtStyleDanger()
    lista=[]
    localStorage.setItem(`Lista`,JSON.stringify(lista))
}
function agrega(){
    if(/[\wñÑ]/.test(input.value.trim())){
        if(edit){
            edita()
            alrt.textContent='Value Changed'
            submitEdit.textContent='Submit'
            edit=false
        }else{
            add(input.value.trim())
            alrt.textContent='Item Added To The List'
        }
        if (!alrt.classList.contains('alert-success')) {
            alrt.classList.remove('alert-danger')
            alrt.classList.add('alert-success')
            clearTimeout(timeout)
            timeout=setTimeout(()=>{
                alrt.classList.remove('alert-success')
                alrt.textContent=''
            },3000)
        }
        localStorage.setItem(`Lista`,JSON.stringify(lista))
    }else{
        alrt.textContent='Please Enter Value'
        alrtStyleDanger()
    }
    input.value=''
}
function alrtStyleDanger(){
    if (!alrt.classList.contains('alert-danger')) {
        alrt.classList.add('alert-danger')
        
        alrt.classList.remove('alert-success')
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            alrt.classList.remove('alert-danger')
            alrt.textContent=''
        },3000)
    }
}
function add(texto){
    lista.push({
        li: maqueta(texto),
        valor:texto
    })
    if(lista.length>0)clear.style.cssText='visibility: visible'
    
    
}
function edita(){
    lista[numeroLista].li.firstChild.textContent=input.value
    lista[numeroLista].valor=input.value
    
    
    
}
function maqueta(texto){
    let li =document.createElement('li')
    let p=document.createElement('p')
    p.textContent=texto
    let btnEdt=document.createElement('button')
    let btnDlt=document.createElement('button')
    
    btnDlt.setAttribute('class','delete')
    btnEdt.setAttribute('class','edit')
    iEd=document.createElement('i')
    iDel=document.createElement('i')
    iEd.setAttribute('class','fas fa-edit')
    iDel.setAttribute('class','fas fa-trash')
    btnEdt.appendChild(iEd)
    btnDlt.appendChild(iDel)
    btnEdt.addEventListener('click',(e)=>{
        numeroLista=lista.findIndex(ele=>ele.li===e.currentTarget.parentNode)
        let obj=lista[numeroLista] 
        input.value=`${obj.valor}`
        submitEdit.textContent='Edit'
        edit=true
    })
    btnDlt.addEventListener('click',(e)=>{
        numeroLista=lista.findIndex(ele=>ele.li===e.currentTarget.parentNode)
        
        ul.removeChild(lista[numeroLista].li)
        lista.splice(numeroLista,1)
        
        
        if(lista.length>0){
            alrt.textContent='Item Removed'
        }else{
            alrt.textContent='Empty List'
            clear.style.cssText='visibility: hidden'
        }
        alrtStyleDanger()
        localStorage.setItem(`Lista`,JSON.stringify(lista))
    })
    li.appendChild(p)
    li.appendChild(btnEdt)
    li.appendChild(btnDlt)
    ul.appendChild(li)
    return li
}
