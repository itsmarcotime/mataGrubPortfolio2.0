const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
let isMoving = false;

document.addEventListener("mousemove", (e) => {
    if (!isMoving) {
        isMoving = true;

        setTimeout(() => {
          let leftPosition = e.clientX + 4;
          let topPosition = e.clientY + 4;

          cursor.style.left = leftPosition + "px";
          cursor.style.top = topPosition + "px";
          isMoving = false;
        }, 20);
    }
});

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    });
});
links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    });
});