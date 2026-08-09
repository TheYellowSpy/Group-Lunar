function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
  var cssFile = document.createElement("link");
  cssFile.rel = "stylesheet";
  cssFile.type = "text/css";
  cssFile.onload = function() {
    sleep(250).then (() => {document.getElementById("LunarText").style.opacity = "1";});
    sleep(1000).then (() => {document.getElementById("LunarText2").style.opacity = "1";});
    sleep(2000).then (() => {document.getElementById("welcomediv").style.boxShadow = "0 0 50px #fff";});
  };
  cssFile.href = "style.css";
  document.head.appendChild(cssFile);
});
