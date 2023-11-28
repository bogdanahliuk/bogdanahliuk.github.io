function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let list_boxes = document.querySelectorAll(".list_box");
let list_btns = document.querySelectorAll(".list_btn");
list_btns.forEach((element) => {
  element.addEventListener("click", () => {
    let btn_id = element.id.slice(-1);
    list_boxes[btn_id - 1].classList.toggle("open");
  });
});