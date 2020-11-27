let size = 10;
let smoothness = 80;
let speed = 1;
let colorOne = "";
let colorTwo = "";
let displayColor = {r: rand(0, 255), g: rand(0, 255), b: rand(0, 255)};
console.log(displayColor)


// click event listener
$('body').on('click', function(e) {
    explode(e.pageX, e.pageY);
  })
  
  // explosion construction
  function explode(x, y) {
    var particles = 15,
      // explosion container and its reference to be able to delete it on animation end
      explosion = $('<div class="explosion"></div>');
  
    // put the explosion container into the body to be able to get it's size
    $('body').append(explosion);
  
    // position the container to be centered on click
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);
  
    for (var i = 0; i < particles; i++) {
      // positioning x,y of the particle on the circle (little randomized radius)
      var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        color =  displayColor.r + ', ' + displayColor.g + ', ' + displayColor.b, // randomize the color rgb
          // particle element creation (could be anything other than div)
        elm = $('<div class="particle" style="' +
          'background-color: rgb(' + color + ') ;' +
          'top: ' + y + 'px; ' +
          'width: ' + size + 'px; ' +
          'animation: pop ' + speed + 's reverse forwards; ' +
          'border-radius: ' + smoothness + '%; ' +
          'height: ' + size + 'px; ' +
          'left: ' + x + 'px"></div>');
  
      if (i == 0) { // no need to add the listener on all generated elements
        // css3 animation end detection
        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          explosion.remove(); // remove this explosion container when animation ended
        });
      }
      explosion.append(elm);
    }
  }
  
  // get random number between min and max value
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }



  $('#particleSize').bind( "change", function(event, ui) {
    size = event.target.value / 2;
    // $("particle").css({"background-color": "yellow", "font-size": "200%"});
    console.log(event.target.value)
  });

  $('#particleSmoothness').bind( "change", function(event, ui) {
    smoothness = event.target.value;
  });

  $('#particleSpeed').bind( "change", function(event, ui) {
    speed = event.target.value / 50;
  });

  $('#colorButton1').change(function(event){
    colorOne = hexToRgb(event.target.value);
    generateColor(hexToRgb(colorOne), hexToRgb(colorTwo));
  })

  $('#colorButton2').change(function(event){
    colorTwo = hexToRgb(event.target.value);
    generateColor(hexToRgb(colorOne), hexToRgb(colorTwo));
  })

  $('#randomButton').click(function(event){
    // alert(colorOne.r + " " + colorTwo.g)
    let firstColor = getRandomColor();
    let secondColor = getRandomColor();
    document.getElementById("colorButton1").value = firstColor;
    document.getElementById("colorButton2").value = secondColor;
    generateColor(hexToRgb(firstColor), hexToRgb(secondColor));
  })

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

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

    console.log(color1)
    console.log(color2)

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
    console.log(displayColor)
  }