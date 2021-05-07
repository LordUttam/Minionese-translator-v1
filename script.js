var btnTranslate = document.getElementById("btn-translate");
var minion = document.getElementById("minion-lang");
var english = document.querySelector("#english");

var serverURL = "https://api.funtranslations.com/translate/minion.json?text="

function translationURL(text){
    return serverURL = "https://api.funtranslations.com/translate/minion.json?text="+text
}

function errorHandler(text){
    console.log("Some error occurred within the server. Try a few minutes later.");
}

function clickHandler(){
    var text = english.value;
    text = encodeURI(text);
    console.log(text);
    fetch(translationURL(text)).then(response=>response.json())
    .then(json => {var translatedText = (json.contents.translated);
                console.log(translatedText);
                minion.innerText = translatedText;})
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler);

english.addEventListener("keydown", (e) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode=== 13 && !e.shiftKey) {
        e.preventDefault();
        console.log(e.keyCode);
        clickHandler();
       }
});

