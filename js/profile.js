function toggleCheckboxes() {
    var checkboxes = document.querySelector('.setings');
    checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
    var activesettings = document.querySelector('.active-settings');
    activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  }
  
  function addresssetting() {
    var checkbox = document.querySelector('.setings-address');
    checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
   
  }
  
  function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';

  }
  // function Returns(){
  //   var Returns = document.querySelector('.return');
  //   Returns.style.backgroundColor = Returns.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  //   // Returns.style.marginBottom = Returns.style.marginBottom === '32px' ? 'none' : '32px';
  
  // }