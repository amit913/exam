function validation(x, y, w, h) {
  if (+x + +w > 300 || +y + +h > 300) {
    return (isValid = false);
  } else {
    return (isValid = true);
  }
}

function drawRectangle() {
  myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  const xPosition = document.querySelector("#xPosition");
  const yPosition = document.querySelector("#yPosition");
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const x = xPosition.value;
  const y = yPosition.value;
  const w = width.value;
  const h = height.value;

  const area = document.querySelector(".area");

  validation(x, y, w, h);

  if (isValid === true) {
    area.value = w * h;

    painter.fillStyle = "blue";
    painter.fillRect(x, y, w, h);

    // saveCookies

    localStorage.setItem("xPosition", x);
    localStorage.setItem("yPosition", y);
    localStorage.setItem("width", w);
    localStorage.setItem("height", h);
  } else {
    alert("Invalid values!");
  }
}

function clearCanvasAndForm() {
  myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  painter.clearRect(0, 0, 300, 300);

  const xPosition = document.querySelector("#xPosition");
  const yPosition = document.querySelector("#yPosition");
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const area = document.querySelector(".area");

  xPosition.value = "";
  yPosition.value = "";
  width.value = "";
  height.value = "";
  area.value = "";
  localStorage.clear();
}

function onWindowLoad() {
  const myForm = document.querySelector("#myForm");
  myForm.onsubmit = drawRectangle;
  const reset = document.querySelector("#reset");
  reset.onclick = clearCanvasAndForm;

  //loadCookies
  const xPosition = document.querySelector("#xPosition");
  const yPosition = document.querySelector("#yPosition");
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");

  xPosition.value = localStorage.getItem("xPosition");
  yPosition.value = localStorage.getItem("yPosition");
  width.value = localStorage.getItem("width");
  height.value = localStorage.getItem("height");

  drawRectangle();
}

window.onload = onWindowLoad;
