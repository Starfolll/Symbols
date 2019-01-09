var chars = [];

var c;

function setup() {
  c = createCanvas(windowWidth,windowHeight);
  background(0);
  for(var y = 0; y < width/off * height/off; y++){
    chars.push(char(int(random(5792,5872))))
  }
}

var off = 50;

function draw() {
  background(0);
  for(var y = 0; y < width/off; y++){
    for(var x = 0; x < height/off; x++){
      textSize(off);
      var num = (y+1) * (x+1);
      if (chars.length > num){
        push();
          fill(map(dist(mouseX,mouseY,y*off,x*off),0,250,255,0));
          noStroke();
          text(chars[num-1], y * off, x * off);
        pop();
      }
    }
  }
}
