// Adding the hamburger to the dom
const navWrapper = document.querySelector(".nav-wrapper");
if (navWrapper) {
  const hamburger = document.createElement("div");
  hamburger.setAttribute("id", "hamburger");
  const line = document.createElement("div");
  line.setAttribute("class", "line");
  const line2 = document.createElement("div");
  line2.setAttribute("class", "line");
  const line3 = document.createElement("div");
  line3.setAttribute("class", "line");
  hamburger.appendChild(line);
  hamburger.appendChild(line2);
  hamburger.appendChild(line3);
  navWrapper.appendChild(hamburger);
}
