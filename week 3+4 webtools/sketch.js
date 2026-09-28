let cam;

let xSlider;
let ySlider;
let zSlider;

function setup() {
  createCanvas(710, 400, WEBGL);

  cam = createCamera();

  // Get sliders from HTML
  xSlider = document.getElementById("xSlider");
  ySlider = document.getElementById("ySlider");
  zSlider = document.getElementById("zSlider");

  // Display numbers beside sliders
  xSlider.addEventListener("input", function () {
    document.getElementById("xValue").textContent = xSlider.value;
  });

  ySlider.addEventListener("input", function () {
    document.getElementById("yValue").textContent = ySlider.value;
  });

  zSlider.addEventListener("input", function () {
    document.getElementById("zValue").textContent = zSlider.value;
  });

  // Save image button
  document
    .getElementById("saveButton")
    .addEventListener("click", function () {
      saveCanvas("orbit-world", "png");
    });
}

function draw() {
  background(50);

  let radius = width * 1.5;

  // Get slider values
  let x = Number(xSlider.value);
  let y = Number(ySlider.value);
  let z = Number(zSlider.value);

  // Control camera with sliders
  cam.setPosition(x, y, z);

  // Make camera look toward center
  cam.lookAt(0, 0, 0);

  normalMaterial();

  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();

      let a = (j / 12) * PI;
      let b = (i / 12) * PI;

      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );

      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }

      pop();
    }
  }
}