const container = document.querySelector(".wrapper");
const r = document.querySelector(':root');
const sizeSelector = document.querySelector(".size-selector");
const value = document.querySelector(".value");
let color = document.querySelector(".color");
const button = document.querySelector(".btn");

function createTable(gridSize) {
  r.style.setProperty('--size', gridSize)
  container.innerHTML= "";
  for (let i = 0; i < gridSize*gridSize; i += 1) {
    const createDiv = document.createElement('div');
    
    createDiv.addEventListener('mouseleave', () => {
      createDiv.style = `background-color: ${r.style.getPropertyValue('--colorPick')};`
    });

    button.addEventListener('click',()=>{
      createDiv.style= "background-color: #ffffff";
    });

    container.appendChild(createDiv);
  }
}


function changeSize(gridSize){
  createTable(gridSize)
}

sizeSelector.addEventListener("input", ()=>{
    changeSize(sizeSelector.value);
    value.textContent = sizeSelector.value;
})

color.addEventListener("change", (event)=>{
  r.style.setProperty('--colorPick', event.target.value);
  console.log(r.style.getPropertyValue("--colorPick"));
});


createTable(16);
