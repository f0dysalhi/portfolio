let i = 1;
setInterval(() => {
  if (i < 5) {
    document.getElementById("image").src = data[i]["img"];
    document.getElementById("numb").innerText = "0" + i;
    document.getElementById("title").innerText = data[i]["name"];
    document.getElementById("desc").innerText = data[i]["desc"];
    document.getElementById("link").href = data[i]["link"];
  } else {
    i = 0;
  }
  i++;
}, 3000);
let f = 0;
var slideRight = () => {
  f++;
  if (f >= 5) {
    f = 0;
  }
  document.getElementById("imageM").src = data[f]["img"];
  document.getElementById("titleM").innerText = data[f]["name"];
  document.getElementById("descM").innerText = data[f]["desc"];
  document.getElementById("linkM").href = data[f]["link"];
};
var slideLeft = () => {
  f--;
  if (f <= 0) {
    f = 4;
  }
  document.getElementById("imageM").src = data[f]["img"];
  document.getElementById("titleM").innerText = data[f]["name"];
  document.getElementById("descM").innerText = data[f]["desc"];
  document.getElementById("linkM").href = data[f]["link"];
};
document.getElementById("projects").addEventListener("click", () => {
  document.getElementsByClassName("img")[0].style.display = "none";
  document.getElementsByClassName("projects")[0].style.display = "flex";
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementsByClassName("projects")[0].style.display = "none";
  document.getElementsByClassName("img")[0].style.display = "flex";
});
document.getElementById("right").addEventListener("click", () => {
  slideRight();
});
document.getElementById("left").addEventListener("click", () => {
  slideLeft();
});
