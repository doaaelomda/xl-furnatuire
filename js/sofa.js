function toggleCheckboxes() {
  var checkboxes = document.querySelector('.checks');
  checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
  var sizename=document.querySelector('.size-name');
  sizename.style.textDecoration = sizename.style.textDecoration === 'underline' ?  'none':'underline';

}


function togglcolors(){
  var checkboxes = document.querySelector('.colors');
  checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
  var colorname=document.querySelector('.color-name');
  colorname.style.textDecoration = colorname.style.textDecoration === 'underline' ?  'none':'underline';

}
function price(){
  var price = document.querySelector('.Price');
  price.style.display = price.style.display === 'block' ? 'none' : 'block';
  var pricename=document.querySelector('.price-name');
  pricename.style.textDecoration = pricename.style.textDecoration === 'underline' ?  'none':'underline';

}
function material(){
  var material = document.querySelector('.material ');
  material.style.display = material.style.display === 'block' ? 'none' : 'block';
  var materialname =document.querySelector('.material-name ');
  materialname .style.textDecoration = materialname .style.textDecoration === 'underline' ?  'none':'underline';

}
function seats(){
  var seats = document.querySelector('.seats ');
  seats.style.display = seats.style.display === 'block' ? 'none' : 'block';
  var seatsname =document.querySelector('.seats-name ');
  seatsname .style.textDecoration = seatsname .style.textDecoration === 'underline' ?  'none':'underline';

}
function producats(){
  var seatsname =document.querySelector('.new-producats ');
  seatsname .style.textDecoration = seatsname .style.textDecoration === 'underline' ?  'none':'underline';

}
function topsallers(){
  var seatsname =document.querySelector('.new-sallers ');
  seatsname .style.textDecoration = seatsname .style.textDecoration === 'underline' ?  'none':'underline';

}
function shapes(){
  var seats = document.querySelector('.shapes ');
  seats.style.display = seats.style.display === 'block' ? 'none' : 'block';
  var shapename =document.querySelector('.shapes-name');
  shapename.style.textDecoration =shapename .style.textDecoration === 'underline' ?  'none':'underline';

}


//filter price range progress
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};