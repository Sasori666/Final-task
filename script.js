// Модальное окно Done
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Модальное окно Create Border
var border = document.getElementById("myBorder")
var button = document.getElementById("Btn")
var close = document.getElementsByClassName("shut")[0]
button.onclick = function() {
  border.style.display = "block";
}
close.onclick = function() {
  border.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display="none";
  }
let bcg=document.getElementById("input-id").value;
let width=document.getElementById("width-id").value;
let height=document.getElementById("number-id").value
modal.style.background= bcg
modal.style.width=width+"px"
modal.style.height=height+"px"
}
let btd = document.getElementById("button")
btd.addEventListener("click", createElement)

// Создание newDiv
function createElement(){
    newDiv = document.createElement("div")
    let bcg=document.getElementById("input-id").value;
    newDiv.style.background= bcg
    newDiv.style.width=180+"px"
    newDiv.style.height=180+"px"
    newDiv.style.border=2 +"px solid black"
    newDiv.style.display= "inline-block"
    document.querySelector(".container").appendChild(newDiv)
}
// Создание Тасков
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
    }
}, false);
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

// Модальное окно help
var dora = document.getElementById("Modal");
var click = document.getElementById("help");
var joy = document.getElementsByClassName("lock")[0];
click.onclick = function() {
  dora.style.display = "block";
}
joy.onclick = function() {
  dora.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
document.getElementById('hider').onclick = function() {
  document.getElementById('to_do').hidden = true;
}
}