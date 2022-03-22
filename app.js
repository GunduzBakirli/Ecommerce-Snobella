let container = document.querySelector(".bags");
if (container) {
  const getdata = async () => {
    let bags = await fetch("base.json").then((a) => a.json());
    bags.cantalar.map((item) => {
      container.innerHTML += `
      <div class="bag color">
          <img src="${item.img}" alt="" />
        <div class="bag-details">
          <p>${item.name}</p>
        </div>
    </div>
      `;
    });
    $(document).ready(function () {
      $(".slider").owlCarousel({
        items: 1,
        margin: 60,
        loop: true,
        dots: true,
        autoplay: true,
        nav: false,
        autoplayTimeout: 5000,
      });
      $(".bags").owlCarousel({
        items: 4,
        margin: 60,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
      });
    });
  };
  getdata();
}

let handbags = document.querySelector(".handbags");
let AllProducts = [];
const creatslider = async () => {
  let bags = await fetch("base.json").then((a) => a.json());
  AllProducts = bags;
  bags.cantalar2.map((product) => {
    let handbag = document.createElement("div");
    handbag.classList.add("handbag");
    handbag.setAttribute("product-id", product.id);
    let handbag_img = document.createElement("a");
    handbag_img.classList.add("handbag_img");
    handbag_img.setAttribute("href", `index2.html?id=${product.id}`);

    let productimg = document.createElement("img");
    productimg.setAttribute("src", product.img);
    if (product.info) {
      let about = document.createElement("span");
      about.classList.add("about");
      product.info.includes("%") ? (about.style = "background:red") : "";
      about.innerText = `${product.info}`;
      handbag_img.append(about);
    }
    let heart = document.createElement("span");

    heart.classList.add("heart");
    heart.addEventListener("click", (e) => {
      e.preventDefault();
    });
    heart.innerHTML += `<i class="far fa-heart"></i>`;
    handbag_img.append(productimg, heart);
    handbag.append(handbag_img);

    let handbag_details = document.createElement("div");
    handbag_details.classList.add("handbag_details");
    let stars = document.createElement("span");
    for (let i = 0; i < product.stars; i++) {
      let starsimg = document.createElement("img");
      starsimg.classList.add("size");
      starsimg.setAttribute("src", "img/starr.png");
      stars.append(starsimg);
    }

    let h3 = document.createElement("h3");
    h3.innerText = `${product.description}`;
    let form1 = document.createElement("span");
    form1.classList.add("form1");
    form1.innerText = `$${product.price}`;
    let form2 = document.createElement("span");
    form2.classList.add("form2");
    form2.innerText = `From $${product.discount}`;
    let a = document.createElement("button");
    a.addEventListener("click", () => addToBasket(product.id, event));
    a.classList.add("add");
    a.innerText = "Add to cart";
    handbag_details.append(stars, h3, form1, form2, a);
    handbag.append(handbag_details);
    handbags.append(handbag);
  });

  $(document).ready(function () {
    $(".handbags").owlCarousel({
      items: 3,
      margin: 60,
      loop: false,
      nav: true,
      dots: false,
      // autoplay: true,
      // autoplayTimeout: 3000,
    });
  });
};
creatslider();

let bestseller = document.querySelector(".bestseller");
if (bestseller) {
  const bestslider = async () => {
    let bags = await fetch("base.json").then((a) => a.json());
    bags.cantalar3.map((product) => {
      let handbag = document.createElement("div");
      handbag.classList.add("handbag");
      let handbag_img = document.createElement("a");
      handbag_img.setAttribute("href", `index2.html?id=${product.id}`);
      handbag_img.classList.add("handbag_img");
      let productimg = document.createElement("img");
      productimg.setAttribute("src", product.img);
      if (product.info) {
        let about = document.createElement("span");
        about.classList.add("about");
        product.info.includes("%") ? (about.style = "background:red") : "";
        about.innerText = `${product.info}`;
        handbag_img.append(about);
      }
      let heart = document.createElement("span");
      heart.classList.add("heart");
      heart.addEventListener("click", (e) => {
        e.preventDefault();
      });
      heart.innerHTML += `<i class="far fa-heart"></i>`;
      handbag_img.append(productimg, heart);
      handbag.append(handbag_img);

      let handbag_details = document.createElement("div");
      handbag_details.classList.add("handbag_details");
      let stars = document.createElement("span");
      for (let i = 0; i < product.stars; i++) {
        let starsimg = document.createElement("img");
        starsimg.classList.add("size");
        starsimg.setAttribute("src", "img/starr.png");
        stars.append(starsimg);
      }

      let h3 = document.createElement("h3");
      h3.innerText = `${product.description}`;
      let form1 = document.createElement("span");
      form1.classList.add("form1");
      form1.innerText = `$${product.price}`;
      let form2 = document.createElement("span");
      form2.classList.add("form2");
      form2.innerText = `From$  ${product.discount}`;
      let a = document.createElement("a");
      a.addEventListener("click", () => addToBasket(product.id, event));
      a.classList.add("add");
      a.innerText = "Add to cart";
      handbag_details.append(stars, h3, form1, form2, a);
      handbag.append(handbag_details);
      bestseller.append(handbag);
    });

    $(document).ready(function () {
      $(".bestseller").owlCarousel({
        items: 3,
        margin: 60,
        loop: true,
        nav: true,
        dots: false,
      });
    });
  };
  bestslider();
}

let discount = document.querySelector(".discount");
if (discount) {
  const discountslider = async () => {
    let bags = await fetch("base.json").then((a) => a.json());
    bags.cantalar4.map((product) => {
      let handbag = document.createElement("div");
      handbag.classList.add("handbag");
      let handbag_img = document.createElement("a");
      handbag_img.setAttribute("href", `index2.html?id=${product.id}`);
      handbag_img.classList.add("handbag_img");
      let productimg = document.createElement("img");
      productimg.setAttribute("src", product.img);
      if (product.info) {
        let about = document.createElement("span");
        about.classList.add("about");
        product.info.includes("%") ? (about.style = "background:red") : "";
        about.innerText = `${product.info}`;
        handbag_img.append(about);
      }
      let heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML += `<i class="far fa-heart"></i>`;
      handbag_img.append(productimg, heart);
      handbag.append(handbag_img);

      let handbag_details = document.createElement("div");
      handbag_details.classList.add("handbag_details");
      let stars = document.createElement("span");
      for (let i = 0; i < product.stars; i++) {
        let starsimg = document.createElement("img");
        starsimg.classList.add("size");
        starsimg.setAttribute("src", "img/starr.png");
        stars.append(starsimg);
      }

      let h3 = document.createElement("h3");
      h3.innerText = `${product.description}`;
      let form1 = document.createElement("span");
      form1.classList.add("form1");
      form1.innerText = `$${product.price}`;
      let form2 = document.createElement("span");
      form2.classList.add("form2");
      form2.innerText = `From$${product.discount}`;
      let a = document.createElement("a");
      a.addEventListener("click", () => addToBasket(product.id, event));
      a.classList.add("add");
      a.innerText = "Add to cart";
      handbag_details.append(stars, h3, form1, form2, a);
      handbag.append(handbag_details);
      discount.append(handbag);
    });

    $(document).ready(function () {
      $(".discount").owlCarousel({
        items: 3,
        margin: 60,
        loop: true,
        nav: true,
        dots: false,
      });
    });
  };
  discountslider();
}

let basket = [];
const addToBasket = (id, e) => {
  let foundedItem;

  let item = Object.values(AllProducts).find((array) => {
    array.find((product) => {
      if (product.id == id) {
        foundedItem = product;
      }
    });
  });
  let check = basket.find((a) => a.id == id);
  if (check) {
    basket = basket.filter((a) => a.id != id);
    e.target.innerText = "Add To Cart";
    e.target.classList.remove("added");
  } else {
    e.target.innerText = "Added To Cart";
    e.target.classList.add("added");
    basket.push(foundedItem);
  }
  refreshBasketModal();
  console.log(foundedItem);
};
document.querySelector(".open-basket").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".basket-modal").classList.toggle("modal-opened");
});
const refreshBasketModal = () => {
  document.querySelector(`.basket-modal`).innerHTML = "";
  if (basket.length === 0) {
    document.querySelector(`.basket-modal`).innerHTML = "Hec ne yoxdur...";
  }

  basket.map((a) => {
    let product_name =
      a.description.lenght > 30
        ? `${a.description.slice(0, 30)}...`
        : a.description;
    document.querySelector(`.basket-modal`).innerHTML += `
     <li>
        <img src="${a.img}" alt="" />
        <div>
        <h3>${product_name}...</h3>
        <h3 class="padd">$ ${a.price}</h3>
        </div>
    </li>
    `;
  });
};
refreshBasketModal();
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    document.querySelector(".basket-modal").classList.remove("modal-opened");
  }
});
if (document.querySelector(".auto-input")) {
  var typed = new Typed(".auto-input", {
    strings: [
      "- Is a shopping web site...",
      "- Says enjoy shopping :)",
      '- Good Shopping <i class="far fa-smile-wink"></i>',
    ],
    typedSpeed: 10,
    backSpeed: 80,
    loop: true,
  });
}



var icone = document.getElementById("icone");
var localData = window.localStorage.getItem("theme");

if (window.localStorage.getItem("theme") == null) {
  window.localStorage.setItem("theme", "light");
}

if (localData == "light") {
  icone.src = "img/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icone.src = "img/light.png";
  document.body.classList.add("dark-theme");
}

icone.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icone.src = "img/light.png";
    window.localStorage.setItem("theme", "dark");
  } else {
    icone.src = "img/moon.png";
    window.localStorage.setItem("theme", "light");
  }
};
