const container = document.querySelector('.container');
const cubes = document.querySelectorAll('.cube');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Set initial grid positions
cubes.forEach((cube, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  cube.style.left = `${col * 110}px`;
  cube.style.top = `${row * 110}px`;

  // Mouse down event
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
    cube.classList.add('dragging');
  });
});

// Mouse move event
document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Boundary constraints
  const maxX = container.clientWidth - selectedCube.offsetWidth;
  const maxY = container.clientHeight - selectedCube.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  selectedCube.style.left = `${x}px`;
  selectedCube.style.top = `${y}px`;
});

// Mouse up event
document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.classList.remove('dragging');
    selectedCube = null;
  }
});
