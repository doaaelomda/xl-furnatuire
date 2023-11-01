function addresssetting() {
    var checkbox = document.querySelector('.setings-address');
    checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
    var activesettings = document.querySelector('.add-settings');
    activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  }
  function Returns() {
    var Returns = document.querySelector('.return');
    Returns.style.backgroundColor = Returns.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  var returnhidden=document.querySelector('.returnhidden')
  returnhidden.style.display = returnhidden.style.display === 'block' ? 'none' : 'block';
  var myorders=document.querySelector('.my-orders');
  myorders.style.display=myorders.style.display === 'none' ? 'block' : 'none';

  }
  function wishlist() {
    var wishlist = document.querySelector('.wishlist');
    wishlist.style.backgroundColor = wishlist.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  }