function toggleCheckboxes() {
  var checkboxes = document.querySelector('.setings');
  checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';

  var activesettings = document.querySelector('.active-settings');
  activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
}

// Call the function when the page loads
window.onload = toggleCheckboxes;

// Add event listeners to each of the links to open "Settings" div
document.getElementById('profile-link').addEventListener('click', toggleCheckboxes);
document.getElementById('security-link').addEventListener('click', toggleCheckboxes);
document.getElementById('manage-account-link').addEventListener('click', toggleCheckboxes);
  
  function addresssetting() {
    var checkbox = document.querySelector('.setings-address');
    checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
   
  }
  
  function addorders() {
    var orders = document.querySelector('.orders');
    orders.style.display = orders.style.display === 'block' ? 'none' : 'block';

  }
