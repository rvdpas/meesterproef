// Declare socket variable
var socket = io();

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

// Save like and dislike to local storage
var icon = document.querySelector(".like");
var likes =  document.querySelector(".amountOfLikes");
var dislikeButton = document.querySelector('.dislikeArticle').addEventListener("click", function() {
  scrollToTop();
  setTimeout(dislikeCounter,700);
});

var likeButton = document.querySelector('.likeArticle').addEventListener("click", function() {
  scrollToTop();
  setTimeout(likeCounter,700);
});

function likeCounter() {
  if (localStorage !== "undefined") {
      if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
          localStorage.clickcount = 1;
      }
      like = localStorage.clickcount;
  }
  icon.classList.add('changeColor');
  likes.innerHTML = localStorage.clickcount + ' likes';
}

function dislikeCounter() {
  if (localStorage !== "undefined") {
      if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)-1;
      } else {
          localStorage.clickcount = -1;
      }
      like = localStorage.clickcount;
  }
  likes.innerHTML = localStorage.clickcount + ' likes';
}

// scroll to top when someone likes or dislikes the article
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut = setTimeout('scrollToTop()',20);
  }
  else clearTimeout(timeOut);
}
