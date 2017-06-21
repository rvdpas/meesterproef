// document.getElementById("getInterests").addEventListener("click", function() {

//   var showInterests = document.querySelectorAll(".hide");
//   [].forEach.call(showInterests, function(el) {
//     el.classList.remove("hide");
//   });

//   var interests = document.getElementById("interests");
//   interests.classList.add("hide");
// });


// function getCheckedCheckboxesFor(checkboxName) {
//     var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
//     Array.prototype.forEach.call(checkboxes, function(el) {
//         values.push(el.value);
//     });
//   return values;
// }

// function toggleClass(el) {
//   if(el.className == "hide") {
//     el.className = "";
//   } else {
//     el.className = "hide";
//   }
// }

// var checkbox = document.getElementsByClassName(".toggle").addEventListener("change", function(elem){
//   checkBox.checked = false;
//   elem.style.display = this.checked ? 'block' : 'none';
// });
// checkBox.onchange();

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
