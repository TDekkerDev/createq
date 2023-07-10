const canvas = document.getElementById("canvas");
canvas.addEventListener("drop", drop);

canvas.addEventListener("dragover", (event) => {
  event.preventDefault();
});

function drop(event) {
  event.preventDefault();
  const componentId = event.dataTransfer.getData("text/plain");
  const component = document.querySelector(`#${componentId}`);
  const componentClone = component.cloneNode(true);

  const canvasRect = canvas.getBoundingClientRect();
  const x = event.clientX - canvasRect.left - component.offsetWidth / 2;
  const y = event.clientY - canvasRect.top - component.offsetHeight / 2;

  componentClone.style.position = "absolute";
  componentClone.style.left = `${x}px`;
  componentClone.style.top = `${y}px`;

  canvas.appendChild(componentClone);
}
