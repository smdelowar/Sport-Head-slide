// sport slide

let slideElements = document.querySelectorAll(".content-element");
let countElements = 1;
setInterval(() => {
   countElements++;
   let contentElement = document.querySelector(".current");
   contentElement.classList.remove("current");

   if (countElements > slideElements.length) {
      slideElements[0].classList.add("current");
      countElements = 1;
   } else {
      contentElement.nextElementSibling.classList.add("current");
   }
}, 2000);
