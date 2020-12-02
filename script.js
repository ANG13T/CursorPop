let size = 10;
let smoothness = 80;
let speed = 1;
let particleAmount = 15;
let colorOne = "#FF0000";
let colorTwo = "#00FF00";
let solidColor = false;
let darkMode = false;
let displayColor = {r: rand(0, 255), g: rand(0, 255), b: rand(0, 255)};
$(".solidColorContainer").hide()

let cursorPop = cursorpop();

//Toggle from dark and light mode
$('#mode-toggle').on('click', function(e){
  darkMode = !darkMode;
  switchMode();
})

function switchMode(){
  if(darkMode){
    $('body').addClass("dark-mode");
    $('h1').addClass("dark-mode-text");
    $('h3').addClass("dark-mode-text");
    $('span').addClass("dark-mode-text");
    $('.mode-toggle').addClass("dark-mode-button");
    $('#ribbon').addClass("dark-mode-ribbon");
    $('#ribbon').text("Dark Mode");
  }else{
    $('body').removeClass("dark-mode");
    $('h1').removeClass("dark-mode-text");
    $('h3').removeClass("dark-mode-text");
    $('span').removeClass("dark-mode-text");
    $('.mode-toggle').removeClass("dark-mode-button");
    $('#ribbon').removeClass("dark-mode-ribbon");
    $('#ribbon').text("Light Mode");
  }
}

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
    cursorPop.color(randomColor)
  })

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

