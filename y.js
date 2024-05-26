let modeBtn = document.querySelector("#slider");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";

    document.querySelector("#d1").style.backgroundColor = "black";
  } else {
    currMode = "light";

    document.querySelector("#d1").style.backgroundColor = " white";
  }

  console.log(currMode);
});
