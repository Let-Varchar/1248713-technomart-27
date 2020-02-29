let link = document.querySelector(".write_us");
let modal = document.querySelector(".modal_writeus");
let close = modal.querySelector(".modal_close");


link.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.add("modal_writeus_show");
});

close.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal_writeus_show");
});