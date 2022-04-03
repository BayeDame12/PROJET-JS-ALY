const addColone=document.getElementById('colone')
const addNote=document.getElementById('note')
const divForm=document.querySelector('.div-form')
const contener=document.querySelector('.contener')
const image=document.querySelector('#image')
const body=document.querySelector('body')
const main= document.querySelector('.main')
let j=1;
//*******FONCTION QUI RETOURNE UN DIV******** */
function ajout(){
    const mainDiv1= document.createElement('div')
    mainDiv1.setAttribute('id','divColons'+j)
    mainDiv1.setAttribute('class','divColons')


    mainDiv1.style.display='flex'
    mainDiv1.style.flexDirection='column'
    mainDiv1.style.backgroundColor="rgba(255, 255, 255, 0.432);"
    const span= document.createElement('span') 
    const mainDiv1child=document.createElement('div')
    mainDiv1child.setAttribute('id','mainDiv1child')


 
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

        mainDiv1.appendChild(mainDiv1child)

        span.appendChild(imagsup)
//**********EVENEMENT QUI SUPPRIMER UNE COLONNE******** */
imagsup.addEventListener('click',()=>{
    
    body.appendChild(notification())
    
    sup.addEventListener('click',()=>{
        imagsup.parentNode.parentNode.remove()
        
            main.setAttribute('class','main')
                refresh()
                

    })
    annul.addEventListener('click',()=>{

        alert("damebaye")
    })






    
        })
        return (mainDiv1)
    }
    //*******FONCTION QUI LIMITE LA CREATIONS DES  DIV A 5******** */
    //******EVENEMENT QUI AJOUTE UNE COLONE******** */
    addColone.addEventListener('click',()=>{  
        if (main.childElementCount<5) {     
            main.appendChild(ajout())   
            j++   
            if (j>5) {
                j=1;
            }
            refresh()    
        }
          
    })


    //*******EVENEMENT QUI AFFICHE LE POP_UP******** */
    
    addNote.addEventListener('click',()=>{
        body.appendChild(formulaire())
       
        const imclo=document.querySelector('.imageform')

imclo.addEventListener('click',()=>{

    imclo.parentNode.parentNode.parentNode.remove()
    
})


        //*******RECUPERATION SAISIE POP UP */
        const textarea =document.getElementById('textra')
        const date1 =document.querySelector('#date')
        const heureDebut1 =document.querySelector('#heure-debut')
        const heureFin1 =document.querySelector('#heure-fin')
        const btnajout=document.querySelector('#button')

        btnajout.addEventListener('click',(e)=>{
         
//     //*******EVENENMENT QUI AJOUTE UN US SUR LE DIC DANS LA COLONNE******** */

const convertirDateDebut=Date.parse(`${date1.value} ${heureDebut1.value}`)
const convertirDateFin=Date.parse(`${date1.value} ${heureFin1.value}`)
const NowDate=Date.parse(new Date())


if ((convertirDateFin<convertirDateDebut) || (convertirDateDebut<NowDate) || textarea.value=="" || date1.value=="") {
 e.preventDefault() 
}

else{

  const mainDiv1child=document.getElementById('mainDiv1child')

     const mainDiv11=document.createElement('div')
      mainDiv11.setAttribute('id','mainDiv11')
          const mainDiv111=document.createElement('div')
      mainDiv111.setAttribute('id','mainDiv111')


                const spanBtnleft=document.createElement('span')
                spanBtnleft.setAttribute('id','spanBtnleft')
 
                const divMidle=document.createElement('div')
                const pMidle=document.createElement('p')
                 pMidle.innerText=textarea.value
                 pMidle.setAttribute('id','pMidle')
                 pMidle.style.color='black'
                const spanBtnright=document.createElement('span')

                const imges1=document.createElement('img')
                const imgesdelete=document.createElement('img')
                imgesdelete.setAttribute('src','../images/remove.png')
                imgesdelete.setAttribute('id','imgesdelete')


                imges1.setAttribute('id','sy')


                const imges2=document.createElement('img')
                imges2.setAttribute('id','mor')

                const mainDiv112=document.createElement('div')

                const date=document.createElement('span')
                const heureDebut=document.createElement('span')
                const heureFin=document.createElement('span')


                date.innerText=date.value
                date.innerText=date1.value
                heureDebut.innerText=heureDebut1.value
                heureFin.innerText=heureFin1.value


        //===========CREATION D EVENEMENT SUR LES LE BOUTTON DROITE IMAGES ==============/
        imges2.addEventListener('click',(e)=>{
            const coloneactive=e.target.parentElement.parentElement.parentElement.parentElement.parentElement
            const idColoneActuel=+coloneactive.id;
            const idColonesuivant=document.getElementById(idColoneActuel+1)
            idColonesuivant.lastChild.appendChild(e.target.parentElement.parentElement.parentElement)


        })



        //===========CREATION D EVENEMENT SUR LES LE BOUTTON DROITE IMAGES ==============/

        imges1.addEventListener('click',(e)=>{
            const coloneactive=e.target.parentElement.parentElement.parentElement.parentElement.parentElement
            const idColoneActuel=+coloneactive.id;
            const idColonesuivant=document.getElementById(idColoneActuel-1)
            idColonesuivant.lastChild.appendChild(e.target.parentElement.parentElement.parentElement)
          })
        //===========CREATION D EVENEMENT SUR LES LE BOUTTON GAUCHE IMAGES ==============/


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
mainDiv111.appendChild(imgesdelete)
mainDiv111.appendChild(divMidle)
mainDiv111.appendChild(spanBtnright)
mainDiv11.appendChild(mainDiv111)
divMidle.appendChild(pMidle)

mainDiv112.appendChild(date)
mainDiv112.appendChild(heureDebut)
mainDiv112.appendChild(heureFin)
mainDiv11.appendChild(mainDiv112)


mainDiv1child.appendChild(mainDiv11)



btnajout.parentNode.parentNode.parentNode.remove()



const divcorbsupjs=document.getElementById('divcorbsup')
imgesdelete.addEventListener('click',()=>{

    divcorbsupjs.appendChild(mainDiv11 )

        })
}    
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

    //===========FUNCTION MBOUSSE==============/
    function mbousse(formulaire){
        const mbousse=document.createElement('div');
        mbousse.className='mbousse';
        mbousse.appendChild(formulaire)
        return mbousse
    }
    //===========FUNCTION FORMULAIRE==============/ 
    function formulaire(){
    //===========creation dic contener formulaire ==============/
      const divFormulaire=document.createElement('div')
      divFormulaire.setAttribute('class','div-form')
    // divFormulaire.classList.add('div-form')

    //===========creation dic contener span et image close ==============/ 
        const divspansapn=document.createElement('div')
        divspansapn.setAttribute('class','spansapn')
        // divspansapn.classList.add('spansapn')
    //===========creation span et image a l interieur du div span ==============/
            const spanform=document.createElement('span')
            spanform.innerText="NOUVELLE TACHE"
            spanform.setAttribute('id','span11')
            const imgclose=document.createElement('img')
            imgclose.setAttribute('src','../images/outline_clear_white_24dp.png')
            imgclose.setAttribute('class','imageform')
    //===========creation H4 balise ==============/
        const h4=document.createElement('h4')
        h4.innerText="Remplir les information de la nouvelle tache"
    //===========creation balise du formulaire avec form ==============/
        const Form=document.createElement('form')
            const labelTextarea=document.createElement('label')
            const textra=document.createElement('textarea')
            textra.setAttribute('id','textra')

            Form.setAttribute('class','form')
            labelTextarea.innerText="Tache"
    
            const labelDate=document.createElement('label')

            const dateid=document.createElement('input')      // dateid.setAttribute('')
            labelDate.innerText="Date"
            dateid.setAttribute('id','date')
            dateid.setAttribute('type','Date')

    
            const labelheureDebut=document.createElement('label')
            const inputheuredebut=document.createElement('input')
            labelheureDebut.innerText="Heure de debut"
            inputheuredebut.setAttribute('id','heure-debut')
            inputheuredebut.setAttribute('type','Time')

            
            const labelheureFin=document.createElement('label')
            const inputheureFin=document.createElement('input')
            labelheureFin.innerText="Heure de Fin"
            inputheureFin.setAttribute('id','heure-fin')
            inputheureFin.setAttribute('type','Time')

    
            const butt=document.createElement('button')
            butt.innerText="Ajouter"
            butt.setAttribute('id','button')
            butt.setAttribute('type','button')

            butt.setAttribute('class','button1')

    
    //===========APPENCHILD Du SPAN ET CES FILS==============/
    divspansapn.appendChild(spanform)
    divspansapn.appendChild(imgclose)
    //===========APPENCHILD DES LABEL ET DES INPUT SUR FORM==============/
    Form.appendChild(labelTextarea)
    Form.appendChild(textra)
    Form.appendChild(labelDate)
    Form.appendChild(dateid)
    
    Form.appendChild(labelheureDebut)
    Form.appendChild(inputheuredebut)
    
    Form.appendChild(labelheureFin)
    Form.appendChild(inputheureFin)
    
    Form.appendChild(butt)
    divFormulaire.appendChild(divspansapn)
    divFormulaire.appendChild(h4)
    divFormulaire.appendChild(Form)
    
    mbousse(divFormulaire)
    
    return mbousse(divFormulaire)
    }
//*******FONCTION QUI CREER DES NOTIFICATIONS******** */

function notification(){

    const contenerNotif=document.createElement('div')
    contenerNotif.setAttribute('id','contenerNotif')

        const imagenotif=document.createElement('img')
        imagenotif.setAttribute('src','../images/exclamation-mark.png')
        imagenotif.setAttribute('id','imagenotif')

        const pnotif=document.createElement('p')
        pnotif.setAttribute('id','pnotif')
        pnotif.innerText="Voulez vous vraiment supprimer cette tache !"  



        const div2button=document.createElement('div')
        div2button.setAttribute('id','div2button')

        const sup=document.createElement('button')
        sup.setAttribute('id','sup')

        const annul=document.createElement('button')
        annul.setAttribute('id','annul')
        sup.innerText="OUI"  

        annul.innerText="NON"  
    
        div2button.appendChild(sup)
        div2button.appendChild(annul)

        contenerNotif.appendChild(imagenotif)
        contenerNotif.appendChild(pnotif)
        contenerNotif.appendChild(div2button)
    mbousse(contenerNotif)
    


    return   mbousse(contenerNotif)
}

//     //*******CORBEILLE ******** */
//================  EVENEMENT SUR LE BTN CORBEILLE ==================//
const btnCorbeille=document.querySelector('#corbeille')
    btnCorbeille.addEventListener('click',()=>{
    const corbeillediv=document.getElementById('corbeillediv')
    corbeillediv.classList.toggle('visibledivCorbeille')
  
})
            
sup.addEventListener('clic',()=>{

})









