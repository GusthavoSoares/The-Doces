var icon = document.getElementById('icon')
var ul = document.getElementById('list')

icon.addEventListener("click", ativarMenu)

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