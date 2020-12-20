var translateBtn = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#input");
var outputTxt = document.querySelector("#output");

var serverUrl = "	https://api.funtranslations.com/translate/pirate.json";

function getTransactionUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error Occurred", error);
  alert("Possible Server Error Please Try After Some Time");
}

function onClick() {
  var inputText = inputTxt.value;

  fetch(getTransactionUrl(inputText))
    .then((res) => res.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;

      outputTxt.innerHTML = translatedTxt;
    });
}

translateBtn.addEventListener("click", onClick);
