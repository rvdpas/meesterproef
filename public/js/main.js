// Toggle checkbox and show associated content
var checkboxes = document.querySelectorAll('input[name="interest"]');
var categories = [];

checkboxes.forEach(function(el) {
  el.addEventListener('change', showArticles);
});

// Show category articles
function showArticles() {
  var allArticles = document.querySelectorAll('.stories > a');

  // Add/remove category from global array based on checkbox-state
  if (this.checked) {
    categories.push(this.id);
  } else {
    categories.splice(categories.indexOf(this.id), 1);
  }

  console.log(categories);

  // Hides all articles
  allArticles.forEach(function(article) {
    article.classList.add('hide');
    article.classList.remove('show');
  });

  // Shows all articles based on user's category input
  categories.forEach(function(category) {
    var categoryArticles = document.querySelectorAll('.stories > a[data-category="' + category + '"]' );

    categoryArticles.forEach(function(article) {
      article.classList.add('show');
      article.classList.remove('hide');
    });
  });
}

// Save like to local storage
var likes =  document.getElementById("likeCounter");
var likeButton = document.querySelector('input[name="like"]').addEventListener("click", function() {
    clickCounter();
  });
function clickCounter() {
  if (localStorage !== "undefined") {
      if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
          localStorage.clickcount = 1;
      }
      like = localStorage.clickcount;
  }
  likes.innerHTML = localStorage.clickcount + ' likes';
}



