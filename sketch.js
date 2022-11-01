var myFont;
function preload(){
  myFont = loadFont('shlop rg.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
 
  background(0,0,0);
  if(mouseY > 250){
  text("BOO!!",530,410)
  textSize(230);
  textFont(myFont);
  fill(555);
  }
  if(mouseY > 125){
  text("BOO!!",530,215);
  textSize(230);
  textFont(myFont);
  fill(255,165,0);
  }
  if(mouseY > 425){
  text("BOO!!",530,600);
  textSize(230);
  textFont(myFont);
  fill(221,160,221)  
  }  
  if (mouseY <125){
  text('BOO!!',90,215);
  textSize(230);
  textFont(myFont);
  fill(221,160,221);
  }
  if (mouseY < 250){
  text("BOO!!",90,410);
  textSize(230);
  textFont(myFont);
  fill(555);
  }
  if (mouseY < 425){
  text("BOO!!",90,600);
  textSize(230);
  textFont(myFont);
  fill(255,165,0);
  }
  if (mouseY < 125){
  text("BOO!!",970,215);
  textSize(230);
  textFont(myFont);
  fill(221,160,221);
  }
  if (mouseY < 250){
  text("BOO!!",970,410);
  textSize(230);
  textFont(myFont);
  fill(555);
  }
  if (mouseY < 425){
  text("BOO!!",970,600);
  textSize(230);
  textFont(myFont);
  fill(255,165,0);
  }
}