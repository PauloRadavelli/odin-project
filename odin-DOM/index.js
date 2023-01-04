
const fatherDiv = document.querySelector("#container");

const redP = document.createElement('div');
redP.textContent = "Hey i'm red!";
redP.style = "color: red";

const blueH = document.createElement("h3");
blueH.textContent ="I'm a blue h3!";
blueH.style = "color: blue";

const divBorder = document.createElement("div");
divBorder.style = "background-color: pink; border-style: solid; border-color:black;"
const hOnDiv = document.createElement("h1");
hOnDiv.textContent = "I'm in a div";

const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!"


divBorder.appendChild(hOnDiv);
divBorder.appendChild(pDiv)
fatherDiv.appendChild(divBorder);
fatherDiv.appendChild(blueH);
fatherDiv.appendChild(redP);
//a <p> with red text that says “Hey I’m red!”
//an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.