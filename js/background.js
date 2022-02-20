const background = ["Mountains.mp4" , "Ocean.mp4" , "People.mp4", "Record.mp4", "Road .mp4", "video1-1.mp4"];
const choseBackgrounds = background[Math.floor(Math.random()*6)];
const backgrounds = document.querySelector("#videobg");
const overlay = document.querySelector("#overlay")
const bgVideo =  document.createElement("source"); 


bgVideo.src = `backgroundSource/${choseBackgrounds}`;
bgVideo.type = "video/mp4"
if(choseBackgrounds === "video1-1.mp4") overlay.style.opacity = 0.7;
else overlay.style.opacity = 0.3
backgrounds.appendChild(bgVideo);
