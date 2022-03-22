var swiper = new Swiper(".product-detailslider", {
  direction: "vertical",
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let link = new URL(window.location.href);
let id = link.searchParams.get("id");

const newdata = async () => {
  let found;
  let product_details = await fetch("base.json").then((a) => a.json());
  Object.values(product_details).map((array) => {
    array.map((product) => {
      if (product.id == id) {
        found = product;
      }
    });
  });
  let maneimg = document.createElement("img");
  maneimg.setAttribute("src", `${found.img}`);
  document.querySelector(".mane-img").append(maneimg);
  document.querySelector(".about").innerText = found.info;
  found.info.includes("%") ? (document.querySelector(".about").style = "background:red") : "";
  [...document.querySelectorAll(".swiper-slide img")].map((item) => {
    item.addEventListener("click", (e) => {
      maneimg.setAttribute("src", `${e.target.getAttribute("src")}`);
    });
  });
  document.getElementById("product_name").innerText = found.description;
  for (let i = 0; i < found.stars; i++) {
    document.querySelector(".reyting").innerHTML +=
      "<img src='img/starr.png'/>";
  }
};
newdata();

$("#firsth2").click(function () {
  $(this).removeClass("transform");
  $(".coment1").slideDown();
  $(".coment2").slideUp();
});
$("#secondh2").click(function () {
  $("#firsth2").addClass("transform");
  $(".coment2").slideDown();
  $(".coment1").slideUp();
});
