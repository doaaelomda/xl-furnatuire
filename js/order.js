function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';
    var activesettings = document.querySelector('.orders-settings');
    activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
    
  }
//open the addressing option
function addresssetting() {
  var checkbox = document.querySelector('.setings-address');
  checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
}

//open the return option and open the empty page return
function Returns() {
var returnhidden=document.querySelector('.returnhidden')
returnhidden.style.display = returnhidden.style.display === 'block' ? 'none' : 'block';
var myorders=document.querySelector('.my-orders');
myorders.style.display=myorders.style.display === 'none' ? 'block' : 'none';

}
//open the wishlistes option
function wishlist() {
  var wishlist = document.querySelector('.wishlist');
  wishlist.style.backgroundColor = wishlist.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  
}

// to get the address option alwayes open when going to pages
window.onload = addorders;
document.getElementById('allorders').addEventListener('click', addorders);
document.getElementById('unpaid').addEventListener('click', addorders);

//open the togglecheches option
function toggleCheckboxes() {
var checkboxes = document.querySelector('.setings');
checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';


}

//open confirm details 
function toggleDetailsConfirm() {
  var detailsConfirm = document.querySelector('.details-confirm');
  detailsConfirm.style.display = detailsConfirm.style.display === 'block' ? 'none' : 'block';

  var trow2 = document.querySelector('.trow2');
trow2.style.height = trow2.style.height === '100vh' ? '0' : '100vh';
}


