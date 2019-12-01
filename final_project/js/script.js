"use strict";

// $(document).ready(jquerySetup);

var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight*11);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(150);
  rectMode(CENTER);
  noStroke();
  fill(200, 0, 0);

  //2nd paragraph
  rect(windowWidth - 300, windowHeight*2, 1500, 1000);

  //3rd paragraph
  rect(300, windowHeight*4, 600, 800);
  rect(900, windowHeight*4 - 100, 400, 200);
  rect(1100, windowHeight*4 + 100, 400, 100);

  //4th paragraph
  //bottom
  rect(windowWidth-200, windowHeight*6, 500, 300);
  rect(windowWidth-200, windowHeight*6 +250, 1500, 200);
  rect(windowWidth-200, windowHeight*6 + 70, 1000, 50);
  //top
  rect(windowWidth-200, windowHeight*6 -350, 1500, 200);
  rect(windowWidth-900, windowHeight*6 -200, 600, 50);
  rect(windowWidth-200, windowHeight*6 - 600, 500, 300);
  rect(windowWidth-900, windowHeight*6 -750, 600, 100);

  //5th paragraph
  rect(500, windowHeight*8 - 150, 500, 500);
  //6th paragraph
  rect(500, windowHeight*10, 500, 500);
}
