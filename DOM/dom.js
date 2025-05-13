const h2 = document.getElementById("second");
h2.setAttribute("class", "orange black");

const params = document.getElementById("params");
const newtag = document.createElement("h3");
const newtext = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
newtag.setAttribute("class", "white");
params.appendChild(newtag);
newtag.appendChild(newtext);
