# CursorPop - Make your cursor POP!

A simple, lightweight JS library for making custom cursor particles.

## Setup

```
let cursorPop = cursorpop();
document.body.onclick = function(e){
  cursorPop.pop(e.pageX, e.pageY)
}
```
Or with JQuery
```
let cursorPop = cursorpop();

$('body').on('click', function(e) {
    cursorPop.pop(e.pageX, e.pageY)
})
```
## Reference

#### Constructor

```js
// create a cursorpop object
let cursorPop = cursorpop();
```

#### Generate Particles

```js
//show particles (takes x and y coordinates of cursor)
cursorPop.pop(x, y);
```

#### Appearance

```js
// set all parameters
cursorPop.set(amount, size, smoothness, colors, speed);

// set particles to solid color
cursorPop.color(color);

// set particles to colors within color range (colors array)
cursorPop.color(colors);

// set smoothness of particles
cursorPop.smoothness(smoothness);

// set speed of particles
cursorPop.speed(speed);

// set size of particles
cursorPop.size(size);

//set amount of particles
cursorPop.amount(amount);
```

## Get involved

Please have a look at the [contribution guidelines](CONTRIBUTE.md) before submitting contributions. 

## Questions?

Feel free to email us any questions! Our contact info is on the CursorPop website.
