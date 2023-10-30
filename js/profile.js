function toggleCheckboxes() {
    var checkboxes = document.querySelector('.setings');
    checkboxes.style.display = checkboxes.style.display === 'block' ? 'none' : 'block';
    var activesettings = document.querySelector('.active-settings');
    activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  }
  
  function addresssetting() {
    var checkbox = document.querySelector('.setings-address');
    checkbox.style.display = checkbox.style.display === 'block' ? 'none' : 'block';
    var activesettings = document.querySelector('.add-settings');
    activesettings.style.backgroundColor = activesettings.style.backgroundColor === 'rgba(113, 140, 89, 0.12)' ? 'none' : 'rgba(113, 140, 89, 0.12)';
  }
  