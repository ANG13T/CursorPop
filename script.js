let size = 10;
let smoothness = 80;
let speed = 1;
let particleAmount = 15;
let colorOne = "#FF0000";
let colorTwo = "#00FF00";
let solidColor = false;
let displayColor = {r: rand(0, 255), g: rand(0, 255), b: rand(0, 255)};
$(".solidColorContainer").hide()

let cursorPop = cursorpop();


// click event listener
$('body').on('click', function(e) {
    cursorPop.pop(e.pageX, e.pageY)
})
  
  
  // get random number between min and max value
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }

  $('#particleSize').bind( "change", function(event, ui) {
      size = event.target.value / 2;
      cursorPop.size(size);
    // $("particle").css({"background-color": "yellow", "font-size": "200%"});
  });

  $('#particleAmount').bind("change", function(event, ui) {
    particleAmount =  Math.round(event.target.value);
    cursorPop.amount(particleAmount);
  });

  $('#particleSmoothness').bind( "change", function(event, ui) {
    smoothness = event.target.value;
    cursorPop.smoothness(smoothness);
  });

  $('#particleSpeed').bind( "change", function(event, ui) {
    speed = event.target.value / 50;
    cursorPop.speed(speed);
  });

  $('#colorButton1').change(function(event){
    colorOne = event.target.value;
    cursorPop.color([event.target.value, colorTwo]);
  })

  $('#colorButton2').change(function(event){
    colorTwo = event.target.value;
    cursorPop.color([colorOne, event.target.value]);
  })

  $('#solidColorButton').change(function(event){
   cursorPop.color(event.target.value);
  })

  $('#randomButton').click(function(event){
    let firstColor = getRandomColor();
    let secondColor = getRandomColor();
    document.getElementById("colorButton1").value = firstColor;
    document.getElementById("colorButton2").value = secondColor;
    colorOne = firstColor;
    colorTwo = secondColor;
    cursorPop.color([colorOne, colorTwo]);
  })

  $('#solidColorBox').click(function(event){
    solidColor = !solidColor;
    $('.colorscontainer').toggle()
    $(".solidColorContainer").toggle()
  })

  $('#solidRandomButton').click(function(event){
    let randomColor = getRandomColor();
    displayColor = randomColor;
    $("#solidColorButton").val(randomColor);
  })


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateColor(color1, color2){
    let randomRed;
    let randomBlue;
    let randomGreen;

    if(!color1 || !colorTwo){
      console.log("NOO")
      return;
    }

    if(color1.r >= color2.r){
      randomRed = Math.floor(Math.random() * color1.r) + color2.r;
    }else{
      randomRed = Math.floor(Math.random() * color2.r) + color1.r;
    }

    if(color1.g >= color2.g){
      randomGreen = Math.floor(Math.random() * color1.g) + color2.g;
    }else{
      randomGreen = Math.floor(Math.random() * color2.g) + color1.g;
    }

    if(color1.b >= color2.b){
      randomBlue = Math.floor(Math.random() * color1.b) + color2.b;
    }else{
      randomBlue = Math.floor(Math.random() * color2.b) + color1.b;
    }

    displayColor = {r: randomRed, g: randomGreen, b: randomGreen};
  }