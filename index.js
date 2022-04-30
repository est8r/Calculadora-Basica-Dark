var result = document.querySelector("#input");
var enter = document.querySelector("#equal");
var eraseAC = document.querySelector("#eraseAll");
var btnDel = document.querySelector("#delete");

function operation(value) {
  result.innerHTML += value;
}

function clearAll() {
  result.innerHTML = " ";
}

function deleteOne() {
  if (result.textContent) {
    var resultTwo = document.getElementById("input").innerHTML;
    result.innerHTML = resultTwo.substring(0, resultTwo.length - 1);
  }
}

function send() {
  if (result.texConten != "Erro") {
    document.getElementById("input").innerHTML = eval(input.innerHTML);
  }
}
