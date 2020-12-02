# CursorPop - Make your cursor POP!
### A simple, lightweight JS library for making custom cursor particles.

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
