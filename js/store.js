function showmore() {
    var showmore = document.querySelector('.showmore');
    showmore.style.display = showmore.style.display === 'block' ? 'none' : 'block';
    var show=document.querySelector('.showword');
    show.style.display = show.style.display === 'block' ? 'block' : 'none';
  }

  function showless() {
    var showmore = document.querySelector('.showmore');
    showmore.style.display = showmore.style.display === 'none' ? 'block' : 'none';
    var showless=document.querySelector('.showless');
    showless.style.display = showless.style.display === 'block' ? 'block' : 'none';
  }
  