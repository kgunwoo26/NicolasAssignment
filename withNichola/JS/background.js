const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const colorBtn = document.querySelector("#btn");
  const bg = document.querySelector("body");
  
  function handleClickBtn(){
      console.log("clicked!");
    let bgColor1 = Math.floor(Math.random()*colors.length);
    let bgColor2 = Math.floor(Math.random()*colors.length);
    while(bgColor1 === bgColor2) bgColor2 = Math.floor(Math.random()*colors.length);
    bg.style.cssText= "background:linear-gradient(to right,"+ colors[bgColor1]+","+ colors[bgColor2] +");"
  }
  colorBtn.addEventListener("click", handleClickBtn);

  