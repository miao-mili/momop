
let c1_img, c1_1_img, c2_img, c2_1_img;
let text_img, text2_img, text3_img, text4_img, text5_img, textLose_img, textWin_img;
let rule_img, play_img, white_img;
let heart_img, SmallRangeHeart_img, BigRangeHeart_img;
let mo_img, moHappy_img, moSad_img, momomomomo_img;
let c3_img = [];
let bg_img, bg2_img, bg3_img, bg4_img;
let toggle = false;
let toggle2 = false;
let toggle3 = false;
let toggle4 = false;
let toggle5 = false;
let toggle6 = false;
let toggle7 = false;
let toggle8 = false;
let sound,yuck;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let s = 0;
let s1 = 0;
let mic;
let vol = 0;
function preload() {
  sound=loadSound('BGM.mp3');
  yuck=loadSound('yuck.mp3');
  c1_img = loadImage('candy1.png');
  c1_1_img = loadImage('candy1_1.png');
  c2_img = loadImage('candy2.png');
  c2_1_img = loadImage('candy2_1.png');
  c3_img[0] = loadImage('candy3.png');
  text_img = loadImage('sugarbomb.png');
  rule_img = loadImage('rule.png');
  play_img = loadImage('play.png');
  mo_img = loadImage('mo.png');
  moHappy_img = loadImage('momohappy.png');
  moSad_img = loadImage('momosad.png');
  momomomomo_img = loadImage('momo scary.png');
  white_img = loadImage('white.png');
  heart_img = loadImage('heart.png');
  BigRangeHeart_img = loadImage('BigRangeHeart.png');
  SmallRangeHeart_img = loadImage('SmallRangeHeart.png');
  text2_img = loadImage('text_2.png');
  text3_img = loadImage('text_3.png');
  text4_img = loadImage('text_4.png');
  text5_img = loadImage('text_5.png');
  textLose_img = loadImage('youlose.png');
  textWin_img = loadImage('youwin.png');
  bg_img = loadImage('bg.png');
  bg2_img = loadImage('bg2.png');
  bg3_img = loadImage('bg3.png');
  bg4_img = loadImage('bg4.png');
}
function setup() {
  sound.play();
  createCanvas(1300, 600);
  imageMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  
  let imgX = 250;
  let playX = 364 / 2;
  let playY = 139 / 2;
  image(bg_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
  image(text_img, width / 2, 170, 1000 * 0.46, 600 * 0.46);
  image(c1_img, 300, 250, imgX, imgX);
  image(c2_img, 360, 420, imgX, imgX);
  image(c2_1_img, 1300 - 300, 250, imgX, imgX);
  image(c1_1_img, 1300 - 360, 420, imgX, imgX);
  image(mo_img, width / 2, 360, 155 * 1.2, 110 * 1.2);
  image(rule_img, width / 2, 430, 849 / 3, 78 / 3);
  image(play_img, width / 2, 490, playX, playY);
  if (740 > mouseX && mouseX > 540 && 525 > mouseY && mouseY > 355) {
    playX = 364 * 0.54;
    playY = 139 * 0.54;
    image(play_img, width / 2, 490, playX, playY);
    if (mouseIsPressed) {
      toggle = true;
    }
  }
  if (toggle) {
    image(bg2_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
    toggle01();
  }
  if (toggle2) {
    toggle02();
  }
  if (toggle3) {
    toggle03();
  }
  if (toggle4) {
    toggle04();
  }
  if (toggle5) {
    toggle05();
  }
  if(toggle6){
    toggle06();
  }
  if(toggle7){
    sound.stop();
    toggle07();
  }
  if (toggle8) {
    e++;
    if (e > 50) {
      background(0);
      image(momomomomo_img, width / 2, height / 2, 663*1.2, 550*1.2);
      yuck.play();
      noLoop();
    }

  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
function toggle01() {
  a++
  if (a > 100) {
    image(bg3_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
    image(BigRangeHeart_img, width / 2 - 5, height / 2, 3724 / 5, 3413 / 5);
    image(SmallRangeHeart_img, width / 2, height / 2, 3724 / 18, 3413 / 18);
    let micLevel = mic.getLevel();
    vol = lerp(vol, micLevel * 100, 0.1);
    let heartSizeX = 3724 / 100;
    let heartSizeY = 3713 / 100;
    for (let i = 0; i < vol; i++) {
      image(heart_img, width / 2, height / 2, heartSizeX, heartSizeY);
      heartSizeX = heartSizeX * 1.2;
      heartSizeY = heartSizeY * 1.2;
    }
  }
  if (vol >= 10) {
    toggle2 = true;
  }
}
function toggle02() {
  if (frameCount % 60 == 0) {
    s++;
  }
  //text(int(vol), 280, 400);
  fill(204, 0, 128);
  textSize(60);
  if (vol <= 15 && vol >= 10) {
    text(int(s), 280, 180);
  }
  if (vol < 9 || vol > 15) {
    b = 0;
    toggle3 = true;
  }
  else if (s == 7) {
    toggle4 = true;
  }

}
function toggle03() {
  s = 0;
  toggle2 = false;
  fill(204, 0, 128);
  textSize(60);
  image(bg_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
  image(textLose_img, width / 2, 200, 751 / 2, 175 / 2);
  image(moSad_img, width / 2, 350, 155 * 2, 110 * 2);
  b++;
  //text(int(b), 280, 300);
  if (b == 100) {
    a = 0;
    toggle01();
    toggle3 = false;
  }
}
function toggle04() {
  image(bg_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
  image(textWin_img, width / 2, 200, 751 / 2, 175 / 2);
  image(moHappy_img, width / 2, 350, 155 * 2, 110 * 2);
  c++;
  if (c > 100) {
    toggle5 = true;
  }
}
function toggle05() {
  image(bg4_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
  d++;
  if (d > 100) {
    image(bg3_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
    image(BigRangeHeart_img, width / 2 - 5, height / 2, 3724 / 5, 3413 / 5);
    image(SmallRangeHeart_img, width / 2, height / 2, 3724 / 18, 3413 / 18);
    let micLevel = mic.getLevel();
    vol = lerp(vol, micLevel * 100, 0.1);
    let heartSizeX = 3724 / 100;
    let heartSizeY = 3713 / 100;
    for (let i = 0; i < vol; i++) {
      image(heart_img, width / 2, height / 2, heartSizeX, heartSizeY);
      heartSizeX = heartSizeX * 1.2;
      heartSizeY = heartSizeY * 1.2;
    }
  }
  if (vol >= 10) {
    toggle6 = true;
  }
}
function toggle06() {
  if (frameCount % 60 == 0) {
    s1++;
  }
  //text(int(vol), 280, 400);
  fill(204, 0, 128);
  textSize(60);
  if (vol <= 15 && vol >= 10) {
    text(int(s1), 280, 180);
  }
  if (vol < 10 || vol > 15) {
    toggle7 = true;
  }
  else if (s1 == 20) {
    toggle8 = true;
  }
}
function toggle07() {
  image(bg_img, width / 2, height / 2, 2600 / 2, 1200 / 2);
  image(textLose_img, width / 2, 200, 751 / 2, 175 / 2);
  image(moSad_img, width / 2, 350, 155 * 2, 110 * 2);
  toggle8 = true;
}



//  background(253,245,230);
//   for (let x = 50; x < width; x += 120) {
//     for (let y = 50; y < height; y += 100) {
//         image(c3_img[0], x, y, 100 , 100);
//    }
//    }

//   for (let x = 50; x < width; x += 120) {
//       for (let y = 50; y < height; y += 100) {
//           image(c3_img[0], x, y, 100 , 100);
//      }
//      }
//      tint(255,255,255,200);
//      image(white_img,width/2,height/2,1130*0.55,920*0.55);
//    function first(){
//    background(253,245,230);
    // image(bg_img,width/2,height/2,2600/2,1200/2);
    // image(text4_img,width/2,200,451*0.54,175*0.54);
    // image(text5_img,width/2,285,459*0.45,103*0.45);
    // image(mo_img,width/2,400,155*1.5,110*1.5);
