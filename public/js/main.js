// var socket = io();
// var messageWindow = document.querySelector('.msg-window');
// var message = document.querySelector('#send');
// var sendMessage = document.querySelector('#sendform');

// var newUserWindow = document.querySelector('.user-window');
// var userName = document.querySelector('#user');
// var newUser = document.querySelector('#newuser');

// socket.on('new message', newMsg);
// sendMessage.addEventListener('submit', sendMsg);

// function sendNewUser(e) {
//   socket.emit('new user', userName.value, function(data) {
//     if(data) {
//       newUserWindow.style.display = 'none';
//       messageWindow.style.display = 'block';
//     }
//   });
//   e.preventDefault();
//   socket.on('get users', function(data) {
//     data.forEach(function(e) {
//         console.log(e);
//     })
//   })
// }

// function sendMsg(e) {
//   socket.emit('send message', message.value);
//   message.value = '';
//   e.preventDefault();
// }

// function newMsg(data) {
//   console.log(data);
//   var li = document.createElement('li');
//   li.className = "message";
//   li.innerHTML = '<strong>' + data.user + '</strong>: ' + data.msg;

//   document.querySelector('#messages').appendChild(li);
// }

document.getElementById("getInterests").addEventListener("click", recieveInterests);

function recieveInterests() {
    alert(getCheckedCheckboxesFor('interest'));
}

function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
  return values;
}
