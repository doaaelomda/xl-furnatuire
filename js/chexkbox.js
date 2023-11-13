const progress = document.getElementById('progress');
const back = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

back.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 3) /9)  * 100  + '%';
    console.log(progress.style.width)
    progress.style.backgroundColor="#8CA17A"
    if(currentActive === 1) {
        back.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        back.disabled = false;
        next.disabled = false;
    }
}
function hiddenshapping(){
    var shapping =document.querySelector('.shapping');
    shapping.style.display="none"
    var paymentchechbox=document.querySelector('.paymentchechbox')
    paymentchechbox.style.display="block"
   
}