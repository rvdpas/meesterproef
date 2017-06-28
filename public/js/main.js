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
// Create a suggest list
var title = document.getElementById('title');
var image = document.getElementById('image');
var link = document.getElementById('link');
var readLater = document.getElementById('readLater');
var suggest = document.getElementById('suggest');
var heading = document.getElementsByTagName('H2');

readLater.addEventListener('click', function() {
  socket.emit('suggest', {
    title: title,
    link: link,
    image: image
  });
});

socket.on('suggest', function(data) {
  heading[0].classList.remove('hide');
  link = link.innerHTML;
  suggest.innerHTML += '<a href="/' + link + '">' + title.outerHTML + image.outerHTML + '</a>';
});


// Save like to local storage
var likes =  document.querySelector(".amountOfLikes");
var dislikeButton = document.querySelector('.dislikeArticle').addEventListener("click", function() {
  dislikeCounter();
});
var likeButton = document.querySelector('.likeArticle').addEventListener("click", function() {
  likeCounter();
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




