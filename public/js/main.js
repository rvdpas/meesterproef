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

// Save like to local storage
function clickCounter() {
  if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
          localStorage.clickcount = 1;
      }
      like = localStorage.clickcount;
      document.getElementById("likeCounter").innerHTML = localStorage.clickcount + ' likes';
  }
}
var like = document.getElementById('like').addEventListener("click", clickCounter);




