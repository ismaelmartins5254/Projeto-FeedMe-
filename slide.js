//inicio carrossel
var link1 ="./imagem/cafe.jpg" 
var link2 = "/imagem/feijoada.jpg"
var link3 = "./imagem/legumes.jpg"


function imagem1(){
    var imagem1 = document.getElementById('imagem1').src = link1

    document.getElementById('btn1').style.backgroundColor = '#000'
    document.getElementById('btn1').style.opacity = '1'
    document.getElementById('btn2').style.backgroundColor = '#f83c3c'
    document.getElementById('btn3').style.backgroundColor = '#f83c3c'
    

    setTimeout(imagem2, 5000)
    
}
function imagem2(){
    var imagem2 = document.getElementById('imagem1').src= link2

    document.getElementById('btn2').style.backgroundColor = '#000'
    document.getElementById('btn2').style.opacity = '1'
    document.getElementById('btn1').style.backgroundColor = '#f83c3c'
    document.getElementById('btn3').style.backgroundColor = '#f83c3c'


    setTimeout(imagem3, 5000)
    
    
}
function imagem3(){
    var imagem3 = document.getElementById('imagem1').src= link3

    document.getElementById('btn3').style.backgroundColor = '#000'
    document.getElementById('btn3').style.opacity = '1'
    document.getElementById('btn1').style.backgroundColor = '#f83c3c'
    document.getElementById('btn2').style.backgroundColor = '#f83c3c'


    setTimeout(imagem1, 5000)

    
}

//fim carrossel
//inicio eventos


var lin1 = '../imagem/alceu.webp'
var lin2 = '../imagem/eventomatue.jpg'
var lin3 = '../imagem/shawn-mendes.jpg'


function imagem() {
    document.getElementById("imagem").src = lin1
    document.getElementById('botao1').style.backgroundColor= '#000'
    document.getElementById('botao2').style.backgroundColor = '#c93522'
    document.getElementById('botao3').style.backgroundColor = '#c93522'

    document.getElementById('span').innerHTML="imagem 1"


    document.getElementById('botao1').style.opacity = '1'
    document.getElementById('botao2').style.opacity = '0.8'
    document.getElementById('botao3').style.opacity = '0.8'
}
function image2() {
    document.getElementById("imagem").src = lin2
    document.getElementById('botao1').style.backgroundColor= '#c93522'
    document.getElementById('botao2').style.backgroundColor = '#000'
    document.getElementById('botao3').style.backgroundColor = '#c93522'

    document.getElementById('span').innerHTML="imagem 2"

    document.getElementById('botao1').style.opacity = '0.8'
    document.getElementById('botao2').style.opacity = '1'
    document.getElementById('botao3').style.opacity = '0.8'
}
function image3() {
    document.getElementById("imagem").src = lin3
    document.getElementById('botao1').style.backgroundColor= '#c93522'
    document.getElementById('botao2').style.backgroundColor = '#c93522'
    document.getElementById('botao3').style.backgroundColor = '#000'

    document.getElementById('span').innerHTML="imagem 3"

    document.getElementById('botao1').style.opacity = '0.8'
    document.getElementById('botao2').style.opacity = '0.8'
    document.getElementById('botao3').style.opacity = '1'
}

//fim eventos
