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
let wheelSFX = new Audio("assets/sounds/wheel.wav");
let wheel2SFX = new Audio("assets/sounds/wheel2.wav");
let reverseSFX = new Audio("assets/sounds/reverse.wav");
let music = new Audio("assets/sounds/backgroundMusic.wav");

function setup() {
  canvas = createCanvas(windowWidth, windowHeight*18);
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
  //midiToFrequency
  rect(1000, windowHeight*8 + 600 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(600, windowHeight*8 + 700 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(300, windowHeight*8 + 600 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(900, windowHeight*8 + 800 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);

  rect(100, windowHeight*8 + 900 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(900, windowHeight*8 + 300 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(300, windowHeight*8 + 350 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);
  rect(900, windowHeight*8 + 700 , (backgroundImageSize - 700) + imageGrowth, (backgroundImageSize - 700) + imageGrowth);


  //6th paragraph
  rect(500, windowHeight*10, (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(1000, windowHeight*10 + 600 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(600, windowHeight*10 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(300, windowHeight*10 + 600 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*10 + 800 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(100, windowHeight*10 + 900 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*10 + 300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(300, windowHeight*10 + 350 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*10 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(700, windowHeight*11, (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(200, windowHeight*11 + 600 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(300, windowHeight*11 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(800, windowHeight*11 + 600 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(500, windowHeight*11 + 800 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(500, windowHeight*11 + 900 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*11 + 300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(50, windowHeight*11 + 350 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(200, windowHeight*11 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(1100, windowHeight*11 + 1200 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*11 + 1300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(850, windowHeight*11 + 1650 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(1000, windowHeight*11 + 1700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(500, windowHeight*13 + 900 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*13 + 300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(50, windowHeight*13 + 350 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(200, windowHeight*13 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  rect(1100, windowHeight*13 + 1200 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(900, windowHeight*13 + 1300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(850, windowHeight*13 + 1650 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  rect(1000, windowHeight*13 + 1700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
// ellipses

  noStroke();
  fill(215);

  ellipse(500, windowHeight*12 + 900 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(900, windowHeight*12 + 300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(50, windowHeight*12 + 350 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(200, windowHeight*12 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  ellipse(1100, windowHeight*12 + 1200 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(900, windowHeight*12 + 1300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(850, windowHeight*12 + 1650 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(1000, windowHeight*12 + 1700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  ellipse(500, windowHeight*14 + 900 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(900, windowHeight*14 + 300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(50, windowHeight*14 + 350 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(200, windowHeight*14 + 700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);

  ellipse(1100, windowHeight*14 + 1200 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(900, windowHeight*14 + 1300 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(850, windowHeight*14 + 1650 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);
  ellipse(1000, windowHeight*14 + 1700 , (backgroundImageSize - 750) + imageGrowth, (backgroundImageSize - 750) + imageGrowth);


  // the angle of the sine function used to make the background pulsate
  backgroundImageAngle += 0.2;
}

jQuery(document).ready(function($){

		let $eerie1TriggeredTimes = 0;
    let $eerie2TriggeredTimes = 0;
    let $eerie3TriggeredTimes = 0;
    let $eerie4TriggeredTimes = 0;
    let $eerie5TriggeredTimes = 0;
    let $musicTriggeredTimes = 0;

		$(window).on('scroll', function() {
				var y_scroll_pos = window.pageYOffset;
				var eerie1_scroll_pos_test = 1500;
        var eerie2_pos_test = 3000;
        var eerie3_pos_test = 5000;
        var eerie4_pos_test = 7000;
        var eerie5_pos_test = 9000;
        var music_pos_test = 1000;

				if(y_scroll_pos > eerie1_scroll_pos_test && $eerie1TriggeredTimes == 0 ) {
					eerie1SFX.play();
					$eerie1TriggeredTimes = 1;
          console.log('eerie1');
          responsiveVoice.speak("Turn back while you can. This is beyond the scope of your imagination.", 'UK English Male', options);
          alert('Turn back while you can.');
				}

        if(y_scroll_pos > eerie2_pos_test && $eerie2TriggeredTimes == 0 ) {
					eerie2SFX.play();
					$eerie2TriggeredTimes = 1;
          console.log('eerie2');
          responsiveVoice.speak("An escape from a prison of flesh to the great beyond where possibilities are endless, never to return.", 'UK English Male', options);
          alert('A prison of flesh. A great beyond. A lack of a plan.');
				}

        if(y_scroll_pos > eerie3_pos_test && $eerie3TriggeredTimes == 0 ) {
					eerie1SFX.play();
					$eerie3TriggeredTimes = 1;
          console.log('eerie3');
          responsiveVoice.speak('Not heeding warnings, you cross the event horizon and now, it is too late. You have lost all control.', 'UK English Male', options);
          alert('The line of no return. Unheeded.');
				}

        if(y_scroll_pos > music_pos_test && $musicTriggeredTimes == 0 ) {
					music.play();
					$musicTriggeredTimes = 1;
          console.log('music');
				}

        if(y_scroll_pos > eerie4_pos_test && $eerie4TriggeredTimes == 0 ) {
          reverseSFX.play();
          $eerie4TriggeredTimes = 1;
          console.log('eerie4');
          responsiveVoice.speak('Even as you remain awake and contemplate the gravity of your mistakes, the singularity keeps on moving forward at speeds you cannot comprehend.', 'UK English Male', options);
          alert("Your lack of patience was your undoing, as was everyone's");

        }

        if(y_scroll_pos > eerie5_pos_test && $eerie5TriggeredTimes == 0 ) {
          wheel2SFX.play();
          $eerie5TriggeredTimes = 1;
          console.log('eerie5');
          responsiveVoice.speak('Your consciousness fades within the black hole of technology. As you have rid yourself of your physical body, any proof of your existence is erased. There are no more observers to prove you were there.', 'UK English Male', options);
          alert('It"s over, THE RED LINE has been crossed.');
        }
		});
	})
