const addColone=document.getElementById('colone')
const addNote=document.getElementById('note')
const divForm=document.querySelector('.div-form')
const contener=document.querySelector('.contener')
const image=document.querySelector('#image')

//*******RECUPERATION SAISIE POP UP */
const textarea =document.getElementById('textare')
const textara =document.querySelector('.textarea')

const date1 =document.querySelector('#date')
const heureDebut1 =document.querySelector('#heure-debut')
const heureFin1 =document.querySelector('#heure-fin')
const button =document.querySelector('#button')
const main= document.querySelector('.main')
let j=1;

//*******FONCTION QUI RETOURNE UN DIV******** */
function ajout(){
    const mainDiv1= document.createElement('div')
    mainDiv1.setAttribute('id','divColons'+j)
    mainDiv1.style.display='flex'
    mainDiv1.style.flexDirection='column'
    mainDiv1.style.backgroundColor="rgba(255, 255, 255, 0.432);"
    const span= document.createElement('span') 
    // span.setAttribute('class','spanincrement')
    const imagsup=document.createElement('img')
    imagsup.setAttribute('id','imagsup')
    imagsup.setAttribute('src','../images/outline_cancel_black_24dp.png')
    span.style.backgroundColor=color(j)

    const h3=document.createElement('h3')
    h3.innerHTML='colone'+j
    span.appendChild(h3) 
    h3.setAttribute('class','spanincrement')
    h3.onclick=function (e) {
        h3.setAttribute('contenteditable','true')
        
    }

    span.addEventListener('click',()=>{
    span.style.zIndex="7"
    mainDiv1.style.backgroundColor=color(j)

    })
        //ajoute des class 
        mainDiv1.classList.add('main-div1')
        span.appendChild(h3)
        span.style.justifyContent='space-between'
        mainDiv1.appendChild(span)
        span.appendChild(imagsup)
//**********EVENEMENT QUI SUPPRIMER UNE COLONNE******** */
        imagsup.addEventListener('click',()=>{
        imagsup.parentNode.parentNode.remove()
        main.setAttribute('class','main')
        refresh()
        
    
        })
        return (mainDiv1)
    }
    //*******FONCTION QUI LIMITE LA CREATIONS DES  DIV A 5******** */
    //******EVENEMENT QUI AJOUTE UNE COLONE******** */
    addColone.addEventListener('click',()=>{  
        if (main.childElementCount<=5) {     
            main.appendChild(ajout())   
            j++   
            if (j>5) {
                j=1;
            }
            refresh()    
        }
        
    //*******EVENEMENT QUI AFFICHE LE POP_UP******** */
    
            addNote.addEventListener('click',()=>{
            divForm.setAttribute('class','divFormvisible')
            main.classList.add('hide')  
            divForm.classList.add('divFormvisible')
        })    
    })

    //*******FONCTION QUI COLOR UN DIV******** */
    function color(n){
    switch (n){
            case 1:return "#ff9999"     
            case 2:return " #8080ff"     
            case 3:return "#ffff66"      
            case 4:return "#ff66cc"      
            case 5:return " #d9d9d9"

    }
}
//*******FONCTION REFRESH********/
function refresh(){
    const tabDiv=document.querySelectorAll('.spanincrement')
tabDiv.forEach((element,j)=> {
    element.innerHTML='colone'+(j+1);
    element.parentElement.parentElement.id=j+1

})
}


//*****OPERATION SAISIE POP UP 
image.addEventListener('click',()=>{
const divFormvisible=document.querySelector('.divFormvisible')
    divFormvisible.setAttribute('class','div-form')
    main.setAttribute('class','main')
})
    const divColons=document.querySelector('.main-div1')
    // divColons.setAttribute('id',divColons)

    //*******EVENENMENT QUI AJOUTE UN US SUR LE DIC DANS LA COLONNE******** */
  button.addEventListener('click',()=>{
     
    const mainDiv1prim=document.querySelector('.main-div1')
         const mainDiv11=document.createElement('div')
              const mainDiv111=document.createElement('div')
                    const spanBtnleft=document.createElement('span')
                    const divMidle=document.createElement('div')
                    const pMidle=document.createElement('p')
                     pMidle.innerText=textara.value
                     pMidle.style.color='black'
                    const spanBtnright=document.createElement('span')
                    const imges1=document.createElement('img')
                    const imges2=document.createElement('img')

                   
              const mainDiv112=document.createElement('div')
                    const date=document.createElement('span')
                    const heureDebut=document.createElement('span')
                    const heureFin=document.createElement('span')
                    date.innerText=date.value
                    date.innerText=date1.value
                    heureDebut.innerText=heureDebut1.value
                    heureFin.innerText=heureFin1.value
                    

//===========CREER ATTRIBUTE IMAGES ==============/
imges1.setAttribute('src','../images/outline_keyboard_double_arrow_left_black_24dp.png')
imges2.setAttribute('src','../images/outline_keyboard_double_arrow_right_black_24dp.png')
//===========AJOUTER DES CLASSE SUR LES BTN==============/
// mainDiv1.classList.add('main-div1')
mainDiv11.classList.add('main-div11')
mainDiv111.classList.add('main-div111')
mainDiv112.classList.add('main-div112')

    spanBtnleft.classList.add('btn-left')
    spanBtnleft.style.justifyContent=' flex-start'
    spanBtnright.classList.add('btn-right')
    spanBtnright.style.justifyContent=' flex-end'

    divMidle.classList.add('midle-div')  

    date.classList.add('datee')  
    heureDebut.classList.add('debut')  
    heureFin.classList.add('fin')  

//===========AJOUTER DES ELEMENT A LEURS PARENTS ==============/

spanBtnleft.appendChild(imges1)
spanBtnright.appendChild(imges2)
mainDiv111.appendChild(spanBtnleft)
mainDiv111.appendChild(divMidle)
mainDiv111.appendChild(spanBtnright)
mainDiv11.appendChild(mainDiv111)
mainDiv1prim.appendChild(mainDiv11)
divMidle.appendChild(pMidle)

mainDiv112.appendChild(date)
mainDiv112.appendChild(heureDebut)
mainDiv112.appendChild(heureFin)
mainDiv11.appendChild(mainDiv112)


button.parentNode.parentNode.remove()
main.classList.remove('hide')

})
    //*******FONCTION QUI CREER DES NOTIFICATIONS******** */

function notification(){
    // const divColons=document.getElementById('divColons')
    const contenerNotif=document.createElement('div')
    const pnotif=document.createElement('p')

    const div2button=document.createElement('div')
    const sup=document.createElement('button')
    const annul=document.createElement('button')
     
    divColons.appendChild(contenerNotif)
    contenerNotif.appendChild(p)
    contenerNotif.appendChild(div2button)
    div2button.appendChild(sup)
    div2button.appendChild(annul)
    
    sup.innerText="OUI"  
    annul.innerText="NON"  

}

    //*******RECUPERATION DU SAISI TEXTE_AREA ******** */
    //*******RECUPERATION DU SAISI INPUT DATE ******** */

    //*******RECUPERATION DU SAISI INPUT HEURE DEBUT ******** */

    //*******RECUPERATION DU SAISI INPUT HEURE FIN******** */






