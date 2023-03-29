const cardName = document.querySelector('#card-name')
const cardNumber = document.querySelector('#card-number')
const cardDateMes = document.querySelector('#dateMes')
const cardDateAno = document.querySelector('#dateAno')
const cardCvv = document.querySelector('#card-cvv')
const botao = document.querySelector('.botao')

const spanNumber = document.querySelector('.span-number-card')
const spanName = document.querySelector('.span-name-card')
const spanDateMes = document.querySelector('.span-date-card-mes')
const spanDateAno = document.querySelector('.span-date-card-ano')
const spanCvv = document.querySelector('.span-cvv-card')




cardName.addEventListener('input', ()=>{
    if(cardName.value.length <= 30){
        setName()
    }else{
        return
    }
})

cardNumber.addEventListener('input',()=>{
    if(cardNumber.value.length <= 16){
        setNumber()
    }else{
        cardNumber.value = cardNumber.value.substring(0, 16)
        return
    }
})


cardDateMes.addEventListener('input', ()=>{
    if(cardDateMes.value.length <= 2){
        setDateMes()
    }else{
        cardDateMes.value = cardDateMes.value.substring(0, 2)
        return
    }
})

cardDateAno.addEventListener('input', ()=>{
    if(cardDateAno.value.length <= 4){
        setDateAno()
    }else{
        cardDateAno.value = cardDateAno.value.substring(0, 4)
        return
    }
})

cardCvv.addEventListener('input', ()=>{
    if(cardCvv.value.length <= 3){
        setCvv()
    }else{
        cardCvv.value = cardCvv.value.substring(0, 3)
        return
    }
})

botao.addEventListener('click', ()=>{
    enviar()
})






function enviar(){
    cardCvv.value = ''
    cardDateAno.value = ''
    cardDateMes.value = ''
    cardName.value = ''
    cardNumber.value = ''

    spanCvv.innerHTML = 'CVV'
    spanDateAno.innerHTML = '00'
    spanDateMes.innerHTML = '00'
    spanName.innerHTML = 'Card Name'
    spanNumber.innerHTML = '0000 0000 0000 0000'
}


function setCvv(){
    spanCvv.innerHTML = cardCvv.value
}


function setDateMes(){
    spanDateMes.innerHTML = cardDateMes.value
}

function setDateAno(){
    spanDateAno.innerHTML = cardDateAno.value
}


function setName(){
    spanName.innerHTML = cardName.value
}


function setNumber(){
    spanNumber.innerHTML = cardNumber.value
}