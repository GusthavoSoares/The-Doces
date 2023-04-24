
var rotate = 0
var rotate2 = 0 
var rotate3 = 0
var gallery_container = document.getElementById('container')
var gallery = document.querySelectorAll('.img-item')
var icon = document.getElementById('icon')
var ul = document.getElementById('list')
var left = document.getElementById('left')
var right = document.getElementById('right')
var one = document.getElementById(1)
var two = document.getElementById(2)
var three = document.getElementById(3)
var four = document.getElementById(4)
var five = document.getElementById(5)
var six = document.getElementById(6)
var btn_cone = document.getElementById('rotate-cone')
var btn_trufa = document.getElementById('rotate-trufa')
var btn_ovo= document.getElementById('rotate-egg')





icon.addEventListener("click", ativarMenu)
left.addEventListener("click", changeImg)
right.addEventListener("click", changeImg)
setImg()
three.addEventListener('click', mudarUrlTrufa)
four.addEventListener('click', mudarUrlTrufa)
five.addEventListener('click', mudarUrlOvo)
six.addEventListener('click', mudarUrlOvo)
btn_cone.addEventListener('click', virarConeCard)
btn_trufa.addEventListener('click', virarTrufaCard)
btn_ovo.addEventListener('click', virarOvoCard)

function ativarMenu(){
    if(ul.classList == "visible"){
        ul.classList.add('hidden')
        ul.classList.remove('visible')
        ul.style.transition = '1s'
    }else if(ul.classList == "hidden"){
        ul.classList.remove('hidden')
        ul.classList.add('visible')
    }
}

function randomNumber(max, min){
    return String(Math.round((Math.random() * (max - min) + min)))
}

function setImg(){

for(i=0; i< gallery.length;i++){
    if(randomNumber(3,1) % 2 == 0){
        gallery[i].style.backgroundImage = `url('./img/ovos${randomNumber(3,1)}.png')`
    }else if(randomNumber(3,1) % 3 == 0){
        gallery[i].style.backgroundImage = `url('./img/cone.png')`
    }
    else if(randomNumber(3,1) % 1 == 0){
        gallery[i].style.backgroundImage = `url('./img/trufa${randomNumber(3,1)}.png')`
    }
    gallery[i].classList.add('bg-img')
}
}

function changeImg(){
    for(i = 0; i< gallery.length;i++){
        if(randomNumber(3,1) % 2 == 0){
            gallery[i].style.backgroundImage = `url('./img/ovos${randomNumber(3,1)}.png')`
        }else if(randomNumber(3,1) % 3 == 0){
            gallery[i].style.backgroundImage = `url('./img/cone.png')`
        }
        else if(randomNumber(3,1) % 1 == 0){
            gallery[i].style.backgroundImage = `url('./img/trufa${randomNumber(3,1)}.png')`
        }
    }
}

function mudarUrlTrufa(){
    let img = document.getElementById('trufaImg')
   
    if(img.src == "http://127.0.0.1:5500/img/trufa1.png" || img.src == "./img/trufa1.png" || img.src == "https://gusthavosoares.github.io/The-Doces/img/trufa1.png"){
        img.setAttribute('src','./img/trufa2.png')
    }else if(img.src == "http://127.0.0.1:5500/img/trufa2.png" || img.src == "./img/trufa2.png" || img.src == "https://gusthavosoares.github.io/The-Doces/img/trufa2.png"){
        img.setAttribute('src','./img/trufa3.png')
    }else if(img.src == "http://127.0.0.1:5500/img/trufa3.png" || img.src == "./img/trufa3.png" || img.src == "https://gusthavosoares.github.io/The-Doces/img/trufa3.png"){
        img.setAttribute('src','./img/trufa1.png')
    
}

}

function mudarUrlOvo(){
    let img2 = document.getElementById('ovoImg')
    if(img2.src == "http://127.0.0.1:5500/img/ovos1.png" || img2.src == "./img/ovos1.png" || img2.src == "https://gusthavosoares.github.io/The-Doces/img/ovo1.png"){
        img2.setAttribute('src','./img/ovos2.png')
    }else if(img2.src == "http://127.0.0.1:5500/img/ovos2.png" || img2.src == "./img/ovos2.png" || img2.src ==  "https://gusthavosoares.github.io/The-Doces/img/ovo2.png"){
        img2.setAttribute('src','./img/ovos3.png')
    }else if(img2.src == "http://127.0.0.1:5500/img/ovos3.png" || img2.src == "./img/ovos3.png" ||  img2.src == "https://gusthavosoares.github.io/The-Doces/img/ovo3.png"){
        img2.setAttribute('src','./img/ovos1.png')
    }
}

function virarConeCard(){
    let boxCone = document.getElementById('cone-box')
    let coneText = document.getElementById('coneText')
    let conePrice = document.getElementById('conePrice')
    let coneLink = document.getElementById('coneLink')
    let coneImg = document.getElementById('coneImg')
    let infoText1 = document.getElementById('info-text-cone')
    let infoTitle1= document.getElementById('info-title-cone')
    if(rotate == 0 || rotate == 360){
        rotate = 180
        boxCone.style.transform = `rotateY(${rotate}deg)`
        coneText.style.transform='scale(-1,1)'
        boxCone.style.transition = "1s"
        coneText.innerHTML = 'Cones'
        conePrice.style.display = "none"
        coneLink.innerHTML = 'Experimente!'
        coneLink.style.transform="scale(-1,1)"
        coneImg.style.display="none"
        infoText1.style.transform="scale(-1,1)"
        infoTitle1.style.transform="scale(-1,1)"
        infoText1.style.display = "block"
        infoTitle1.style.display = "block"
        
    }else if(rotate == 180){
        rotate = 360
        boxCone.style.transform = `rotateY(${rotate}deg)`
        boxCone.style.transition = "1s"
        coneText.innerHTML = 'Cones'
        conePrice.style.display = "inline-block"
        coneLink.innerHTML = 'Saiba mais!'
        coneText.style.transform='scale(1,1)'
        coneLink.style.transform="scale(1,1)"
        coneImg.style.display="inline-block"
        infoText1.style.display = "none"
        infoTitle1.style.display = "none"
    }
}

function virarTrufaCard(){
    let boxTrufa = document.getElementById('trufa-box')
    let trufaText = document.getElementById('trufaText')
    let trufaPrice = document.getElementById('trufaPrice')
    let trufaLink = document.getElementById('trufaLink')
    let trufaImg = document.getElementById('trufaImg')
    let infoText2 = document.getElementById('info-text-trufa')
    let infoTitle2= document.getElementById('info-title-trufa')
    if(rotate2 == 0 || rotate2 == 360){
        rotate2 = 180
        boxTrufa.style.transform = `rotateY(${rotate2}deg)`
        trufaText.style.transform='scale(-1,1)'
        boxTrufa.style.transition = "1s"
        trufaText.innerHTML = 'Trufas'
        trufaPrice.style.display = 'none'
        trufaLink.innerHTML = 'Experimente!'
        trufaLink.style.transform="scale(-1,1)"
        trufaImg.style.display="none"
        infoText2.style.transform="scale(-1,1)"
        infoTitle2.style.transform="scale(-1,1)"
        infoText2.style.display = "block"
        infoTitle2.style.display = "block"
        
    }else if(rotate2 == 180){
        rotate2 = 360
        boxTrufa.style.transform = `rotateY(${rotate2}deg)`
        boxTrufa.style.transition = "1s"
        trufaText.innerHTML = 'Trufas'
        trufaPrice.style.display = "inline-block"
        trufaLink.innerHTML = 'Saiba mais!'
        trufaText.style.transform='scale(1,1)'
        trufaLink.style.transform="scale(1,1)"
        trufaImg.style.display="inline-block"
       infoText2.style.display = "none"
        infoTitle2.style.display = "none"
    }
}

function virarOvoCard(){
    let boxOvo = document.getElementById('ovo-box')
    let ovoText = document.getElementById('ovoText')
    let ovoPrice = document.getElementById('ovoPrice')
    let ovoLink = document.getElementById('ovoLink')
    let ovoImg = document.getElementById('ovoImg')
    let infoText3 = document.getElementById('info-text-ovo')
    let infoTitle3= document.getElementById('info-title-ovo')
    if(rotate3 == 0 || rotate3 == 360){
        rotate3 = 180
        boxOvo.style.transform = `rotateY(${rotate3}deg)`
        ovoText.style.transform='scale(-1,1)'
        boxOvo.style.transition = "1s"
        ovoText.innerHTML = 'Ovos'
        ovoPrice.style.display = "none"
        ovoLink.innerHTML = 'Experimente!'
        ovoLink.style.transform="scale(-1,1)"
        ovoImg.style.display="none"
        infoText3.style.transform="scale(-1,1)"
        infoTitle3.style.transform="scale(-1,1)"
        infoText3.style.display = "block"
        infoTitle3.style.display = "block"
        
    }else if(rotate3 == 180 ){
        rotate3 = 360
        boxOvo.style.transform = `rotateY(${rotate3}deg)`
        boxOvo.style.transition = "1s"
        ovoText.innerHTML = 'Ovos'
        ovoPrice.style.display = 'inline-block'
        ovoLink.innerHTML = 'Saiba mais!'
        ovoText.style.transform='scale(1,1)'
        ovoLink.style.transform="scale(1,1)"
        ovoImg.style.display="inline-block"
       infoText3.style.display = "none"
        infoTitle3.style.display = "none"
    }

}
