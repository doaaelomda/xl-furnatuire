const progress = document.getElementById('progress');
const back = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
let accumulatedPercentage = 0;


next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    updatenext();
});

back.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    updateback();
});

function updatenext() {
    const increment = 1 / (circles.length - 2) * 100;
    accumulatedPercentage += increment;

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = accumulatedPercentage + '%';
    progress.style.backgroundColor = "#8CA17A";
    console.log( progress.style.width)
    if (currentActive === 2) {
        hiddenshapping()
    } else if (currentActive === 3) {
        summaryshow()
    } 
    else if (currentActive === 4) {
        successshow()
        next.disabled=true
    }
}

function updateback() {
    const increment = 1 / (circles.length - 1) * 100;
    accumulatedPercentage -= increment;

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = accumulatedPercentage + '%';
    progress.style.backgroundColor = "#8CA17A";
    console.log( progress.style.width)

    if (currentActive === 1) {
        hiddenpayment()
        back.disabled=true
        // back.display='none'

    }
    else if(currentActive ===0){
        back.style.visibility='hidden'
    }
    else if(currentActive === 2) {
        hiddensummary()
    }
    else if(currentActive === 3) {
            hiddensucess()
}
}

function hiddenshapping(){
    var shapping =document.querySelector('.shapping');
    shapping.style.display="none"
    var paymentchechbox=document.querySelector('.paymentchechbox')
    paymentchechbox.style.display="block"

}
function summaryshow(){
    var paymentchechbox=document.querySelector('.paymentchechbox')
    paymentchechbox.style.display="none";
    var summary=document.querySelector('.summary');
    summary.style.display="block"

}
function successshow(){
    var summary=document.querySelector('.summary')
    summary.style.display="none";
    

    var sucess=document.querySelector('.sucess');
    sucess.style.display="block"

    let back=document.querySelector('#back')
    back.style.display='none'

    let next=document.querySelector('#next')
    next.style.display='none'

}




function hiddenpayment(){
    var shapping =document.querySelector('.shapping');
    shapping.style.display="block";
    var back=document.querySelector('#back')
    back.style.display='none'
    var paymentchechbox=document.querySelector('.paymentchechbox');
    paymentchechbox.style.display="none";


   
}
function hiddensummary(){
    var paymentchechbox=document.querySelector('.paymentchechbox')
    paymentchechbox.style.display="block";
    var summary=document.querySelector('.summary');
    summary.style.display="none"

}

function  hiddensucess(){
    var summary=document.querySelector('.summary')
   summary.style.display="block";

   var sucess=document.querySelector('.sucess');
   sucess.style.display="none"

}
















/////////////
