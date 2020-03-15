let writeUs = document.querySelector(".write_us");
let modal = document.querySelector(".modal_wrap");
let close = modal.querySelector(".modal_close");
let login = modal.querySelector("[name=popoup-name]");
let mapLink = document.querySelector(".about_map");
let mapModal = document.querySelector(".map_modal");
let closeMap = mapModal.querySelector(".modal_close");
let buyBtn = document.querySelector(".product_item_buy");
let modalBuy = document.querySelector(".modal_buy");

writeUs.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.add("modal_wrap_show");
  login.focus();
});

close.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal_wrap_show");
});

mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  mapModal.classList.add("map_modal_show");
});

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  mapModal.classList.remove("map_modal_show");
});

buyBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  modalBuy.classList.add("modal_buy_show");
});
