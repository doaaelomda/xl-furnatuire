// to show more Details in Strore LivingRoom Page
function showmore() {
    var showmore = document.querySelector('.showmore');
    showmore.style.display = showmore.style.display === 'block' ? 'none' : 'block';
    var show=document.querySelector('.showword');
    show.style.display = show.style.display === 'block' ? 'block' : 'none';
  }

// to show Less Details in Strore LivingRoom Page
  function showless() {
    var showmore = document.querySelector('.showmore');
    showmore.style.display = showmore.style.display === 'none' ? 'block' : 'none';
    var showless=document.querySelector('.showless');
    showless.style.display = showless.style.display === 'block' ? 'block' : 'none';
  }
  
// to Change Image in container in Store Living Room
  function changeImage(element) {
    var clickedImage = element.querySelector('img');
    var mainImage = document.getElementById('mainImage');
    mainImage.src = clickedImage.src;
  }

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

//Slide Of Store Living 
  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');
  const productsRow = document.querySelector('.Products');
  nextButton.addEventListener('click', () => {
    const firstItem = productsRow.querySelector('.col-3:first-child');
    productsRow.appendChild(firstItem);
  });
  prevButton.addEventListener('click', () => {
    const lastItem = productsRow.querySelector('.col-3:last-child');
    productsRow.insertBefore(lastItem, productsRow.firstChild);
  });
