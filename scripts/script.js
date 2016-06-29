window.onload = function() {
  var showSidebar = false;

  var toggleHTML = '<div class="button" id="toc-toggle"> ' + '&#62;' + '</div>';


  // document.getElementById("toc-sidebar").innerHTML =toggleHTML + document.getElementById("toc-inline").innerHTML;
  document.getElementById("toc-sidebar").innerHTML = document.getElementById("toc-inline").innerHTML;


  document.getElementById( 'toc-toggle' ).addEventListener( 'click', function() {
    if(showSidebar) {
      document.getElementById("sidebar").style.left = '-400px';
      document.getElementById("sidebar").style.overflow = 'hidden';
      document.getElementById("toc-sidebar").style.opacity = '0';
      showSidebar = false;
      // document.getElementById("toc-toggle").innerHTML = '&#62;'; 
    } else {
      document.getElementById("sidebar").style.left = '0px';
      document.getElementById("sidebar").style.overflow = 'auto';
      document.getElementById("toc-sidebar").style.opacity = '1';
      showSidebar = true;
      // document.getElementById("toc-toggle").innerHTML = '&#60;';
    }

  }, false );

  document.getElementById( 'to-top-button' ).addEventListener( 'click', function() {
    window.scrollTo(0,1130);
  }, false );
}

