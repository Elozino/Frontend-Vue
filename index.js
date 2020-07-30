document.getElementById("button").onclick=function(){
    var newVal = validate();
    if (newVal == false){
        return false;
    }
    else{
        getRandomColor();
        console.log(color);
    }
}
function getRandomColor() {
    var a = document.getElementById('randColor').value;
    var r = Math.floor(Math.random() * (255 - a) + a);
    var g = Math.floor(Math.random() * (255 - a) + a);
    var b = Math.floor(Math.random() * (255 - a) + a);
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color;
  }
  function setRandomColor() { 
    document.getElementById("colorpad").style.backgroundColor = getRandomColor();
  }
  function validate(){
    var val = document.getElementById("randColor").value;
    if(val == ""){
      alert("You did not enter a valid number");
      return false;
    }
    if(val <= 0 || val > 255){
      alert("Enter a number between 0 and 255");
      return false;
    }
    else{
      return setRandomColor();
    }
  }
