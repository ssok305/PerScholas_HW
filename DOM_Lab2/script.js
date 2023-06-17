// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let element of menuLinks) {
  topMenuEl.innerHTML += `<a href =${element.href}>${element.text}</a>`;
}
//4.0
let subMenuEl = document.getElementById("sub-menu");
//4.1
subMenuEl.style.height = "100%";
//4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//4.3
subMenuEl.classList.add("flex-around");
//4.4
subMenuEl.style.position = "absolute";
//4.5
subMenuEl.style.top = "0";
//5.1
let topMenuLinks = document.querySelectorAll("a");
let showingSubMenu = false;
//5.2
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.localName !== "a") {
    return;
  }
  console.log("e.target", e.target);
  //6.4
  if (e.target.innerHTML === "about") {
    mainEl.innerHTML = `<h1> ${e.target.innerHTML}</h1>`;
  }
  //5.3
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  //5.4
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  //5.5
  e.target.classList.add("active");
  //5.6
  let link = menuLinks.find((item) => item.innerHTML === menuLinks.text);
  if (link.subLinks !== null) {
    showingSubMenu = true;
  }
  //5.7
  if (showingSubMenu === true) {
    buildSubMenu(e);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
  //5.8
  function buildSubMenu(e) {
    for (let element of menuLinks) {
      if (e.target.innerHTML === element.text) {
        for (let i = 0; i < element.subLinks.length; i++) {
          subMenuEl.innerHTML += `<a href =${element.subLinks[i].href}>${element.subLinks[i].text}</a>`;
        }
        console.log(subMenuEl);
      }
    }
  }
});
//6.0
subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.localName !== "a") {
    return;
  }
  console.log("e.target", e.target);
  //6.1
  showingSubMenu = false;
  subMenuEl.style.top = 0;
  //6.2
  e.target.classList.remove("active");
  //6.3
  console.log(e.target);
  mainEl.innerHTML = `<h1> ${e.target.innerHTML}</h1>`;
  //6.4
});