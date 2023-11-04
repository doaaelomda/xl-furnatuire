//open the orders option
function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';
  }
//open the addressing option
function addresssetting() {
  var checkbox = document.querySelector('.setings-address');
  checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
}

//open the return option and open the empty page return
function Returns() {
  var Returns = document.querySelector('.return');
  Returns.style.backgroundColor = Returns.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
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
window.onload = Returns;
document.getElementById('returns').addEventListener('click', Returns);

//open the togglecheches option
function toggleCheckboxes() {
var checkboxes = document.querySelector('.setings');
checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';


}

