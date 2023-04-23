var gallery_container = document.getElementById('container')
var gallery = document.querySelectorAll('.img-item')
var icon = document.getElementById('icon')
var ul = document.getElementById('list')
var left = document.getElementById('left')
var right = document.getElementById('right')

icon.addEventListener("click", ativarMenu)
left.addEventListener("click", changeImg)
right.addEventListener("click", changeImg)
setImg()




function ativarMenu(){
    if(ul.classList == "visible"){
        ul.classList.add('hidden')
        ul.classList.remove('visible')
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



