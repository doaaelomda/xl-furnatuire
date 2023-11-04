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
