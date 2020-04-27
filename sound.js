let kArrowUp;
let kArrowDown;
let kArrowLeft;
let kArrowRight;

//loading sound files
function preload(){
    pianoOne = loadSound('sounds/ES_PianoChord_65.wav');
    pianoTwo = loadSound('sounds/ES_PianoChord_178.wav');
    pianoThree = loadSound('sounds/ES_PianoChord_179.wav');
    pianoFour = loadSound('sounds/ES_PianoChord_324.wav');
  }
  
//canvas
  function setup() {
    createCanvas(800, 650);
    amplitude = new p5.Amplitude();
  }
  
  function draw() {
    background(204, 204, 0);
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);

    //pianoOne drawing
    if (key === "ArrowUp") {
      fill("pink");
      stroke("pink");
      ellipse(150, 350, size * 15, size * 15);
    }
    //pianoTwo drawing
    if (key === "ArrowDown") {
      fill("blue");
      stroke("blue");
      triangle(size * 12, 200, 400, size * 4, 350, 200);
    }
    //pianoThree drawing
    if (key === "ArrowLeft") {
      fill("yellow");
      stroke("yellow");
      rect(500, size * 8, size * 12, size * 15);
    }
    //pianoFour drawing
    if (key === "ArrowRight") {
      fill("green");
      stroke("green");
      ellipse(size * 4, 600, size * 8, size * 15);
    }
  }

//arrow keys triggering sound files to be played
  function keyPressed() {
    if (key === "ArrowUp") {
      pianoOne.play();
    } else if (key === "ArrowDown") {
        pianoTwo.play();
    } else if (key === "ArrowLeft") {
        pianoThree.play();
    } else if (key === "ArrowRight") {
        pianoFour.play();
    }
  }