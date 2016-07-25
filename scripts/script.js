window.onload = function() {
  var showSidebar = false;

  var toggleHTML = '<div class="button" id="toc-toggle"> ' + '&#62;' + '</div>';


  document.getElementById("toc-sidebar").innerHTML = document.getElementById("toc-inline").innerHTML;


  document.getElementById( 'toc-toggle' ).addEventListener( 'click', function() {
    if(showSidebar) {
      document.getElementById("sidebar").style.left = '-400px';
      document.getElementById("toc-sidebar").style.overflow = 'hidden';
      document.getElementById("toc-sidebar").style.opacity = '0';
      showSidebar = false;
    } else {
      document.getElementById("sidebar").style.left = '0px';
      document.getElementById("toc-sidebar").style.overflow = 'auto';
      document.getElementById("toc-sidebar").style.opacity = '1';
      showSidebar = true;
    }

  }, false );

  document.getElementById('toc-sidebar').addEventListener('scroll', function() {
    var opacity = document.getElementById('toc-sidebar').scrollTop;
    opacity = (opacity > 20 ? 20 : opacity) / 100;
    document.getElementById('sidebar-header').style.boxShadow = '0 5px 2px rgba(0, 0, 0, ' + opacity + ')';
  }, false);
}

