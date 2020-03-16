var writeUs = document.querySelector(".write_us");
var modal = document.querySelector(".modal_wrap");
var name = modal.querySelector("[name=popup-name]");
var form = modal.querySelector(".writeus_form");
form.action = "https://echo.htmlacademy.ru";
form.method = "GET";
var close = modal.querySelector(".modal_close");
var email = modal.querySelector("[name=popup-email]");
var yourComment = form.querySelector("[name=comment]");
var mapLink = document.querySelector(".about_map");
var mapModal = document.querySelector(".map_modal");
var closeMap = mapModal.querySelector(".modal_close");

writeUs.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.add("modal_wrap_show");
});

close.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal_wrap_show");
});

form.addEventListener("submit", function(evt){
  if (!name.value || !email.value || !yourComment.text) {
    evt.preventDefault();
    console.log("EMPTY")
  } else {
    form.submit();
  }
});

mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  mapModal.classList.add("map_modal_show");
});

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  mapModal.classList.remove("map_modal_show");
});

