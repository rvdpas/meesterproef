// queryselector polyfill (https://gist.github.com/chrisjlee/8960575)
if (!document.querySelectorAll) {
  document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'), elements = [], element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
  };
}

if (!document.querySelector) {
  document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return (elements.length) ? elements[0] : null;
  };
}

// Toggle checkbox and show associated content
var checkboxes = document.querySelectorAll('input[name="interest"]');
var categories = [];

// if AddEventListener isn't available fallback on attachEvent
if(document.addEventListener) {
  for (var i = 0; i<checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', showArticles);
  }
} else {
  for (var i = 0; i<checkboxes.length; i++) {
    checkboxes[i].attachEvent('change', showArticles);
  }
}

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
var dislikeButton = document.querySelector('.dislikeArticle');
var likeButton = document.querySelector('.likeArticle');

var liked = localStorage.getItem('liked'+likeButton.dataset.id);
if (liked) {
  likes.innerHTML = '1 like';
}

function likeCounter(id) {
  var liked = localStorage.getItem('liked'+id);
  if (! liked) {
    localStorage.setItem('liked'+id, true);
  }

  icon.classList.add('changeColor');
  likes.innerHTML = '1 like';
}

function dislikeCounter(id) {
  var liked = localStorage.getItem('liked'+id);
  if (liked) {
    localStorage.setItem('liked'+id, false);
  }

  icon.classList.add('changeColor');
  likes.innerHTML = '0 likes';
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

// make sure the button isn't null
if(dislikeButton || likeButton) {
  dislikeButton.addEventListener("click", function() {
    var button = this;

    scrollToTop();
    setTimeout(function() {
      dislikeCounter(button.dataset.id);
    },700);
  });

  if(document.addEventListener) {
    likeButton.addEventListener("click", function() {
      var button = this;

      scrollToTop();
      setTimeout(function() {
        likeCounter(button.dataset.id);
      },700);
    });
  }
}


var socket = io();
var message = document.querySelector('#send');
var sendMessage = document.querySelector('#sendform');

socket.on('new message', newMsg);
sendMessage.addEventListener('submit', sendMsg);

function sendMsg(e) {
  socket.emit('send message', message.value);
  message.value = '';
  e.preventDefault();
}

function newMsg(data) {
  var li = document.createElement('li');
  var error = document.createElement('li');
  var errorMessage = "Vul een bericht in";
  li.className = "message";
  error.className = "error";
  error.innerHTML = errorMessage;
  li.innerHTML = data.msg;

  if(li.innerHTML < 1) {
    var errorMsg = error.innerHTML;
    document.querySelector('#messages').appendChild(error);
  } else {
    document.querySelector('#messages').appendChild(li);
  }
}
