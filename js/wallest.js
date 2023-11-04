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
  function wishlist()
   {
  var returnhidden=document.querySelector('.returnhidden')
  returnhidden.style.display = returnhidden.style.display === 'block' ? 'none' : 'block';
  var myorders=document.querySelector('.my-orders');
  myorders.style.display=myorders.style.display === 'none' ? 'block' : 'none';
  var alsolike=document.querySelector('.alsolike');
  alsolike.style.display=alsolike.style.display === 'none' ? 'block' : 'none';  
}
  function toggleCheckboxes() {
    var checkboxes = document.querySelector('.setings');
    checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
    
  }
  function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';

  }
  function wallet(){
    var  wallest = document.querySelector('.wallest');
    wallest.style.backgroundColor =  wallest.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
 
 

  }
  window.onload = wallet;
  document.getElementById('wallest').addEventListener('click', wallet);
