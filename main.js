import "./style.css";

// change the background color when the icons are hovered over
const welcomePage = document.getElementById("welcome");
console.log(welcomePage);
Array.from(document.getElementsByClassName("link")).map((e) => {
  console.log(e);
  const desiredClass =
    e.classList.length > 0 ? e.classList[e.classList.length - 1] : "";
  e.addEventListener("mouseover", () =>
    welcomePage.classList.add(desiredClass)
  );
  e.addEventListener("mouseout", () =>
    welcomePage.classList.remove(desiredClass)
  );
});
