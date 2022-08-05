const documentTextInput = document.querySelector(".text-input");
const encriptarButton = document.querySelector(".encript-button");
encriptarButton.onclick = encriptar;

const decriptButton = document.querySelector(".decript-button");
decriptButton.onclick = desencriptar;

function showResult(text) {
  document.querySelector("#p-1").style.display = "none";
  document.querySelector("#p-2").style.display = "none";
  document.querySelector(".muñeco").style.display = "none";
  document.querySelector("#p-3").style.display = "block";
  document.querySelector(".messages").style.top = "30px";
  document.querySelector("#p-3").innerHTML = text;
}

function desencriptar() {
  let value = documentTextInput.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase(); //Removing accents, code from stackoverflow https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  let valueArray = value.split(""); //Also making the string lowercase
  let decriptedString = "";
}

function encriptar() {
  let value = documentTextInput.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase(); //Removing accents, code from stackoverflow https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  let valueArray = value.split(""); //Also making the string lowercase
  let encriptedString = "";

  for (let i = 0; i < valueArray.length; i++) {
    switch (valueArray[i]) {
      case "e":
        encriptedString += "enter";
        break;
      case "i":
        encriptedString += "imes";
        break;
      case "a":
        encriptedString += "ai";
        break;
      case "o":
        encriptedString += "ober";
        break;
      case "u":
        encriptedString += "ufat";
        break;

      default:
        encriptedString += valueArray[i];
    }
  }
  showResult(encriptedString);
}
