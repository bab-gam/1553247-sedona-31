

const openClosePopupBtn = document.querySelector(".map-section-btn");
const popup = document.querySelector(".popup");

openClosePopupBtn.addEventListener("click", function() {
  popup.classList.toggle("modal-visibility");
});



const btnPlus = document.querySelector(".btn-js-1-plus");
const btnMinus = document.querySelector(".btn-js-1-minus");
const numberText = document.querySelector(".text-js-1");

let cont = 0;
let cont1 = 0;

btnPlus.addEventListener("click", function() {
  cont++;
  numberText.value = cont;
});

btnMinus.addEventListener("click", function() {

  if (cont > 0) {
    cont--;
    numberText.value = cont;
  };
});


const btnPlus2 = document.querySelector(".btn-js-2-plus");
const btnMinus2 = document.querySelector(".btn-js-2-minus");
const numberText2 = document.querySelector(".text-js-2");


btnPlus2.addEventListener("click", function() {
  cont1++;
  numberText2.value = cont1;
});

btnMinus2.addEventListener("click", function() {

  if (cont1 > 0) {
    cont1--;
    numberText2.value = cont1;
  };
});

//error


const formPopup = document.querySelector(".popup__form");
const popupError = document.querySelector(".popup_Error");
const arrival = document.querySelector("[name=arrival]");
const departure = document.querySelector("[name=departure]");

formPopup.addEventListener("submit", function (evt){
  if(!arrival.value || !departure.value){
    evt.preventDefault();
    popup.classList.remove("popupError");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popupError");
    console.log("нужно ввести дату выезда");
  }
});
