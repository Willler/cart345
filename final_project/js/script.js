"use strict";

// $(document).ready(jquerySetup);

var canvas;

// variables for the pulsing background imagery
let backgroundImageAngle = 0;
let backgroundImageSize = 800;

// defining the options variable, which will randomize the pitch of responsiveVoice
let options = {
  pitch: Math.random()
};


// preloading some sound effects
let eerie1SFX = new Audio("assets/sounds/eerie1.wav");
let eerie2SFX = new Audio("assets/sounds/eerie2.wav");
let eerie3SFX = new Audio("assets/sounds/eerie3.wav");
let music = new Audio("assets/sounds/backgroundMusic.wav");

function setup() {
  canvas = createCanvas(windowWidth, windowHeight*12);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  // scrollingFunction();
}

function draw() {
  background(150);

  // this variable is what makes the background pulsate, using a sine function
  var imageGrowth = sin(backgroundImageAngle) * (backgroundImageSize/20);

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
  rect(250, windowHeight*8 - 150, (backgroundImageSize) + imageGrowth, (backgroundImageSize - 300) + imageGrowth);
  rect(650, windowHeight*8 - 650, (backgroundImageSize + 200) + imageGrowth, (backgroundImageSize - 600) + imageGrowth);
  rect(windowWidth/2 + 200, windowHeight*8 - 400, (backgroundImageSize - 600) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(1000, windowHeight*8 + 100 , (backgroundImageSize - 400) + imageGrowth, (backgroundImageSize - 600) + imageGrowth);


  //6th paragraph
  rect(500, windowHeight*10, 500, 500);

  // the angle of the sine function used to make the background pulsate
  backgroundImageAngle += 0.2;
}

// jQuery(document).ready(function($){
//
// 		let $eerie1TriggeredTimes = 0;
//     let $eerie2TriggeredTimes = 0;
//     let $eerie3TriggeredTimes = 0;
//     let $musicTriggeredTimes = 0;
//
// 		$(window).on('scroll', function() {
// 				var y_scroll_pos = window.pageYOffset;
// 				var eerie1_scroll_pos_test = 2500;
//         var eerie2_pos_test = 4500;
//         var eerie3_pos_test = 6500;
//         var music_pos_test = 1000;
//
// 				if(y_scroll_pos > eerie1_scroll_pos_test && $eerie1TriggeredTimes == 0 ) {
// 					eerie1SFX.play();
// 					$eerie1TriggeredTimes = 1;
//           console.log('eerie1');
//           alert('Turn back while you can. This is beyond the scope of your imagination.');
//           responsiveVoice.speak("Turn back while you can. This is beyond the scope of your imagination.", 'UK English Male', options);
// 				}
//
//         if(y_scroll_pos > eerie2_pos_test && $eerie2TriggeredTimes == 0 ) {
// 					eerie2SFX.play();
// 					$eerie2TriggeredTimes = 1;
//           console.log('eerie2');
//           alert('An escape from a prison of flesh to the great beyond where possibilities are endless, never to return.');
//           responsiveVoice.speak("An escape from a prison of flesh to the great beyond where possibilities are endless, never to return.", 'UK English Male', options);
// 				}
//
//         if(y_scroll_pos > eerie3_pos_test && $eerie3TriggeredTimes == 0 ) {
// 					eerie1SFX.play();
// 					$eerie3TriggeredTimes = 1;
//           console.log('eerie3');
//           alert('Not heeding warnings, you cross the event horizon and now, it is too late. You have lost all control.');
//           responsiveVoice.speak('Not heeding warnings, you cross the event horizon and now, it is too late. You have lost all control.', 'UK English Male', options);
// 				}
//
//         if(y_scroll_pos > music_pos_test && $musicTriggeredTimes == 0 ) {
// 					music.play();
// 					$musicTriggeredTimes = 1;
//           console.log('music');
// 				}
// 		});
	// })
