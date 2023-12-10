// Open Serch Window in NavBar 
function searchapper(){
    search=document.querySelector('.search-window');
    search.style.display =search.style.display === 'block' ? 'none' : 'block';
}

// Open Profile-Page  Setting In Nav Bar
function profileset() {
    var profilePage = document.querySelector('.profile-page');
    profilePage.style.display = profilePage.style.display === 'block' ? 'none' : 'block';
}


// Open Cart-Content Settings In Nav Bar
function cart() {
    var cart = document.querySelector('.cart-content');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

// Close My Cart in Nav Bar
const closeImage = document.getElementById('closeCart');
const cartContent = document.getElementById('cartContent');
closeImage.addEventListener('click', () => {cartContent.style.display = 'none';})


//Slide Of Sofas by nextimage and perviousimage
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const row = document.querySelector('.sofas .row');
nextButton.addEventListener('click', () => {
    const firstItem = row.querySelector('.col-2:first-child');
    row.appendChild(firstItem);
});
prevButton.addEventListener('click', () => {
    const lastItem = row.querySelector('.col-2:last-child');
    row.insertBefore(lastItem, row.firstChild);
});




function nextslider(){ 
    var test1 = document.querySelector('.test1');
    test1.style.display = 'none'
    var test2Element = document.querySelector('.test2');
    test2Element.style.display = 'block'

}
function backslider(){ 
    var test2 = document.querySelector('.test2');
    test2.style.display = 'none'
    var test1Element = document.querySelector('.test1');
    test1Element.style.display = (test1Element.style.display === 'none' || test2Element.style.display === '') ? 'block' : 'none';

}