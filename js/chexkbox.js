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
back.style.visibility="hidden";
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
   
    if (currentActive === 2) {
        hiddenshapping()
        // next.textContent="Next Steps  →";
        next.style.color="#fff";
        back.style.visibility="visible";

    } else if (currentActive === 3) {
        summaryshow()
        next.textContent='Continue Order →';
        next.style.color="#fff"
        back.style.visibility="visible";
    } 
    else if (currentActive === 4) {
        successshow()
        next.disabled=true
    }
}
function updateback() {
    const increment = 1 / (circles.length - 2) * 100;
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
    
     if (currentActive === 1) {
        hiddenpayment()
        back.disabled=true
        back.style.visibility='hidden'

    }

    else if(currentActive === 2) {
        hiddensummary()
        next.textContent=' Next Steps → ';
        next.style.color="#fff";
        back.style.visibility="visible";
    }
    else if(currentActive === 3) {
            hiddensucess()
            back.style.visibility="visible";
            
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


function clickwallet(){
    var visacontainer= document.querySelector('.visacontainer')
    visacontainer.style.display="none";
    var card1=document.querySelector('.card1')
    card1.style.backgroundColor="transparent";
    var spancard1=document.querySelector('.card span ')
    spancard1.style.color="black"
    var card2=document.querySelector('.card2')
    card2.style.backgroundColor="#8CA17A";
    card2.style.color="#fff"
    var wallestshow=document.querySelector('.wallest-show')
    wallestshow.style.display="block";
    var spancard2=document.querySelector('.card2 span ')
    spancard2.style.color="white"

}

function visashow(){
    var visacontainer= document.querySelector('.visacontainer')
    visacontainer.style.display="block";
    var wallestshow=document.querySelector('.wallest-show')
    wallestshow.style.display="none";

    var card2=document.querySelector('.card2')
    card2.style.backgroundColor="transparent";
    var spancard2=document.querySelector('.card2 span ')
    spancard2.style.color="black"
    var card1=document.querySelector('.card1')
    card1.style.backgroundColor="#8CA17A";
    card1.style.color="#fff"
    var spancard1=document.querySelector('.card1 span ')
    spancard1.style.color="white"

}
















/////////////
