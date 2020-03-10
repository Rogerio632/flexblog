let value = document.getElementsByTagName('h1')[0];

let oldValue = value;

value.innerHTML = "Ok, mude isso";
value.style.color = "#f00";
value.style.textShadow="1px 1px 1px #000";

alert(oldValue.innerHTML);