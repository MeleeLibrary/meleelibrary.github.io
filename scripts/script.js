window.onload = function() {
  var showSidebar = false;

  document.getElementById("toc-sidebar").innerHTML = document.getElementById("toc-inline").innerHTML;


  document.getElementById( 'toc-toggle' ).addEventListener( 'click', function() {
    if(showSidebar) {
      document.getElementById("sidebar").style.left = '-470px' 
      showSidebar = false;
      document.getElementById("toc-toggle").innerHTML = '&#x2192;' 
    } else {
      document.getElementById("sidebar").style.left = '20px';
      showSidebar = true;
      document.getElementById("toc-toggle").innerHTML = '&#x2190;' 
    }

  }, false );
};

