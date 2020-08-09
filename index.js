const btn = document.getElementById('btn');
const randNumber = () => {
  const colorpad = document.getElementById('colorpad');
  const randColor = document.getElementById('randColor').value;

  console.log(randColor);

  if(randColor === ''){
    alert("You did not enter a valid number");
  } 
  else if(randColor < 0 || randColor > 255){
    alert("Enter a number between 0 and 255");
  }
  else{
    var r = Math.floor(Math.random() * randColor);
    var g = Math.floor(Math.random() * randColor);
    var b = Math.floor(Math.random() * randColor);
    colorpad.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

btn.addEventListener('click', randNumber);
