// var TxtRotate = function(el, toRotateD, toRotateC) {
var TxtRotate = function(el, toRotateD) {
  this.toRotateD = toRotateD;
  // this.toRotateC = toRotateC;
  this.el = el;
  this.loopNum = 0;
  this.period = 2000;
  this.txtD = '';
  this.txtC = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var iD = this.loopNum % this.toRotateD.length;
  // var iC = this.loopNum % this.toRotateC.length;

  var fullTxtD = this.toRotateD[iD];
  // var fullTxtC = this.toRotateC[iC];

  if (this.isDeleting) {
    if(this.txtD !== '') {
      this.txtD = fullTxtD.substring(0, this.txtD.length - 1);
    }
    // if (this.txtC !== '') {
    //   this.txtC = fullTxtC.substring(0, this.txtC.length - 1);
    // }
  } else {
    if(this.txtD !== fullTxtD) {
      this.txtD = fullTxtD.substring(0, this.txtD.length + 1);
    }
    // if(this.txtC !== fullTxtC)
    // this.txtC = fullTxtC.substring(0, this.txtC.length + 1);
  }

  this.el[0].innerHTML = '<span class="wrap">'+this.txtD+'</span>';
  // this.el[1].innerHTML = '<span class="wrap">'+this.txtC+'</span>';


  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  // if (!this.isDeleting && this.txtD === fullTxtD && this.txtC === fullTxtC) {
  if (!this.isDeleting && this.txtD === fullTxtD) {
    // if (iD === iC === 0) {
    if (iD === 0) {
      delta = 1500;
    } else {
      delta = this.period;
    }
                                                                                                                                                        this.isDeleting = true;
  // } else if (this.isDeleting && this.txtD === '' && this.txtC === '') {
    } else if (this.isDeleting && this.txtD === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  const elements = document.getElementsByClassName('txt-rotate');

  const toRotateD = elements[0].getAttribute('data-rotate');
  // const toRotateC = elements[1].getAttribute('data-rotate');

  // new TxtRotate(elements, JSON.parse(toRotateD), JSON.parse(toRotateC));
  new TxtRotate(elements, JSON.parse(toRotateD));
  // INJECT CSS
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.15em solid #cc5959 }";
  document.body.appendChild(css);
};
