function addresssetting() {
    var checkbox = document.querySelector('.setings-address');
    checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
  }
  function Returns() {
    
  var returnhidden=document.querySelector('.returnhidden')
  returnhidden.style.display = returnhidden.style.display === 'block' ? 'none' : 'block';
  var myorders=document.querySelector('.my-orders');
  myorders.style.display=myorders.style.display === 'none' ? 'block' : 'none';

  }
  function wishlist() {
    var wishlist = document.querySelector('.wishlist');
    wishlist.style.backgroundColor = wishlist.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  // var returnhidden=document.querySelector('.returnhidden')
  // returnhidden.style.display = returnhidden.style.display === 'block' ? 'none' : 'block';
  // var myorders=document.querySelector('.my-orders');
  // myorders.style.display=myorders.style.display === 'none' ? 'block' : 'none';
  // var alsolike=document.querySelector('.alsolike');
  // alsolike.style.display=alsolike.style.display === 'none' ? 'block' : 'none'; 
  wishlist.style.padding="20px" 
}
  function toggleCheckboxes() {
    var checkboxes = document.querySelector('.setings');
    checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
    
  }
  function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';

  }
  window.onload = wishlist;
  document.getElementById('wishlist').addEventListener('click', wishlist);