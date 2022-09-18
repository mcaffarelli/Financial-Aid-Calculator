function doSearch(text, backgroundColor) {
  if (window.find && window.getSelection) {
    document.designMode = "on";
    var sel = window.getSelection();
    sel.collapse(document.body, 0);
    while (window.find(text)) {
      document.execCommand("HiliteColor", false, backgroundColor);
      sel.collapseToEnd();
    }
    document.designMode = "off";
  }
}

function readText2 (form) {
    
    window.location.href='StudentSelection.php'
    
    
}