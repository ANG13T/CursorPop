'use strict';

if (typeof module !== 'undefined') module.exports = cursorpop;

function cursorpop(){
    let body = 'body';
    if (!(this instanceof cursorpop)) return new cursorpop();

    this._body = body = typeof body === 'string' ? document.getElementsByTagName(body)[0] : body;

    this._width = body.width;
    this._height = body.height;

    this._max = 1;
    this._data = [];

    console.log("starting this up")
}

cursorpop.prototype = {

    defaultParticleAmount: 15,

    defaultParticleSpeed: 1,

    defaultParticleSize: 10,

    defaultParticleSmoothness: 80,

    defaultColors: [
        {r: 255, g: 0, b: 0},
        {r: 0, g: 255, b: 0}
    ],

    gradient: function (grad) {
        // create a 256x1 gradient that we'll use to turn a grayscale heatmap into a colored one
        var body = this._createCanvas(),
            ctx = body.getContext('2d'),
            gradient = ctx.createLinearGradient(0, 0, 0, 256);

        body.width = 1;
        body.height = 256;

        for (var i in grad) {
            gradient.addColorStop(+i, grad[i]);
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);

        this._grad = ctx.getImageData(0, 0, 1, 256).data;

        return this;
    },

    draw: function (minOpacity) {
        if (!this._circle) this.radius(this.defaultRadius);
        if (!this._grad) this.gradient(this.defaultGradient);

        var ctx = this._ctx;

        ctx.clearRect(0, 0, this._width, this._height);

        // draw a grayscale heatmap by putting a blurred circle at each data point
        for (var i = 0, len = this._data.length, p; i < len; i++) {
            p = this._data[i];
            ctx.globalAlpha = Math.min(Math.max(p[2] / this._max, minOpacity === undefined ? 0.05 : minOpacity), 1);
            ctx.drawImage(this._circle, p[0] - this._r, p[1] - this._r);
        }

        // colorize the heatmap, using opacity value of each pixel to get the right color from our gradient
        var colored = ctx.getImageData(0, 0, this._width, this._height);
        this._colorize(colored.data, this._grad);
        ctx.putImageData(colored, 0, 0);

        return this;
    },

    pop: function(){
        return "pop";
    },

    _createCanvas: function () {
        if (typeof document !== 'undefined') {
            return document.createElement('body');
        } else {
            // create a new body instance in node.js
            // the body class needs to have a default constructor without any parameter
            return new this._body.constructor();
        }
    }
};