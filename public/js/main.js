// Toggle checkbox and show associated content
var checkboxes = document.querySelectorAll('input[name="interest"]');
checkboxes.forEach(function(el) {
  el.addEventListener('change', function() {
    var content = document.querySelectorAll('.'+el.id);
    content.forEach(function(contentEl) {
      if(el.checked) {
        contentEl.style.display = 'block';
      } else {
        contentEl.style.display = 'none';
      }
    })
  });
});
