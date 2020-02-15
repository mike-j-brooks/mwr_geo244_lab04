let flowerImage = document.querySelector('img');

flowerImage.onclick = function() {
  let imgSrc = flowerImage.getAttribute('src');
  if(imgSrc === './img/flower.png') {
    flowerImage.setAttribute ('src', './img/flower2.png');
  }
  if(imgSrc === './img/flower2.png') {
    flowerImage.setAttribute ('src', './img/flower.png');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vectors are cool, ' + myName;
  }

}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Vectors are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
