const components = document.querySelectorAll(".component");

components.forEach((component) => {
  component.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", component.id);
  });

  component.addEventListener("drag", (event) => {
    const canvasRect = canvas.getBoundingClientRect();
    const x = event.clientX - canvasRect.left - component.offsetWidth / 2;
    const y = event.clientY - canvasRect.top - component.offsetHeight / 2;
    component.style.transform = `translate(${x}px, ${y}px)`;
  });

  component.addEventListener("dragend", (event) => {
    component.style.transform = "";
  });
});
