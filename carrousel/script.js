const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let index = 0

function run(){
    index ++
    if(index > 3){
        index = 0
    }

    imgs.style.transform = `translateX(${-index * 500}px)`

}

setInterval(run, 2000)