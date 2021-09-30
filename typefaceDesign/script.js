//Overall To Do:
  // Active State: Animations are reverting, hidden positions are absolute
  // Hover States: Slow and sad looking, no transition back

//reusable functions
//Status: working, may want to make transform functions
let upperBound = 1;
let lowerBound= 0;
let upperBoundX = 4000;
let upperBoundY = 5000;
let lowerBoundX = 0;
let lowerBoundY = 0;
let bodyPaddingLeft = 100;

function changeColor() {
  let colors = ["#F90505", "#F9D507", "#0781C0"];
  let random = Math.floor(Math.random()*3);
  return colors[random];
};

function randomInRange(lowerBound, upperBound){
  return (Math.random()*(upperBound-lowerBound)+lowerBound);
};

//Red+Hidden active
//Status: Working, still boring
$(".red_cont, .red").click(function(){
  let hiddens = document.getElementsByClassName("hidden");
  let reds = document.getElementsByClassName("red");
  for(let i = 0; i < hiddens.length; i++){
    let bounding = hiddens[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(hiddens[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        hiddens[i].setAttribute("x", newX);
        hiddens[i].setAttribute("y", newY);
        hiddens[i].setAttribute("width", newWidth);
        hiddens[i].setAttribute("height", newHeight);
        hiddens[i].style.fill = changeColor();
      } );

  }
  for(let i = 0; i < reds.length; i++){
    let bounding = reds[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(reds[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        reds[i].setAttribute("x", newX);
        reds[i].setAttribute("y", newY);
        reds[i].setAttribute("width", newWidth);
        reds[i].setAttribute("height", newHeight);
      } );

  }
  $("line:not('.thinLine')").css('stroke-width', randomInRange(10,40));
});

//Blue+Hidden Active
$(".blue_cont, .blue").click(function(){
  let hiddens = document.getElementsByClassName("hidden_b");
  let blues = document.getElementsByClassName("blue");
  for(let i = 0; i < blues.length; i++){
    let bounding = blues[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(blues[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        blues[i].setAttribute("x", newX);
        blues[i].setAttribute("y", newY);
        blues[i].setAttribute("width", newWidth);
        blues[i].setAttribute("height", newHeight);
      } );

  }
  $("line").css('stroke-width', randomInRange(10,40));
  for(let i = 0; i < hiddens.length; i++){
    let bounding = hiddens[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(hiddens[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        hiddens[i].setAttribute("x", newX);
        hiddens[i].setAttribute("y", newY);
        hiddens[i].setAttribute("width", newWidth);
        hiddens[i].setAttribute("height", newHeight);
        hiddens[i].style.fill = changeColor();
      } );

  }
});

$(".yellow_cont, .yellow").click(function(){
  let hiddens = document.getElementsByClassName("hidden_y");
  let yellows = document.getElementsByClassName("yellow");
  for(let i = 0; i < yellows.length; i++){
    let bounding = yellows[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(yellows[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        yellows[i].setAttribute("x", newX);
        yellows[i].setAttribute("y", newY);
        yellows[i].setAttribute("width", newWidth);
        yellows[i].setAttribute("height", newHeight);
      } );

  }
  $("line").css('stroke-width', randomInRange(10,40));
  for(let i = 0; i < hiddens.length; i++){
    let bounding = hiddens[i].getBoundingClientRect();
    let oldX = parseFloat(bounding.x);
    let oldY = parseFloat(bounding.y);
    let newWidth = randomInRange(50,200);
    let newHeight = randomInRange(50,200);
    let newX = oldX + randomInRange(-50,50)-bodyPaddingLeft;
    let newY = oldY + randomInRange(-50,50);
    newX = Math.max(Math.min(newX, upperBoundX), lowerBoundX);
    newY = Math.max(Math.min(newY, upperBoundY), lowerBoundY);
    console.log(oldX);
    console.log(newX);

    $(hiddens[i]).animate({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    }, 400, complete=function(){

        hiddens[i].setAttribute("x", newX);
        hiddens[i].setAttribute("y", newY);
        hiddens[i].setAttribute("width", newWidth);
        hiddens[i].setAttribute("height", newHeight);
        hiddens[i].style.fill = changeColor();
      } );

  }
});

//hover states
//Status: Working, slow and sad looking, no transition back
$(".red_cont").on('mouseenter', function(){
  let reds = document.getElementsByClassName("red");
  for(let i = 0; i < reds.length; i++){
    reds[i].animate([
      { transform: 'translate('+randomInRange(-200,200)+'px, '+ randomInRange(-200,200)+'px)'},
      { transform: 'scale('+randomInRange(.75,1.50)+','+ randomInRange(.75,1.50)+')'}
    ], {
      duration: 3000,
      direction: 'alternate'
    });
  };
  $("line").css('stroke-width', randomInRange(10,40));
});
$(".yellow_cont").on('mouseenter', function(){
  let yellows = document.getElementsByClassName("yellow");
  for(let i = 0; i < yellows.length; i++){
    yellows[i].animate([
      { transform: 'translate('+randomInRange(-200,200)+'px, '+ randomInRange(-200,200)+'px)'},
      { transform: 'scale('+randomInRange(.75,1.50)+','+ randomInRange(.75,1.50)+')'}
    ], {
      duration: 3000,
      direction: 'alternate'
    });
  };
  $("line").css('stroke-width', randomInRange(10,40));
});
$(".blue_cont").on('mouseenter', function(){
  let blues = document.getElementsByClassName("blue");
  for(let i = 0; i < blues.length; i++){
    blues[i].animate([
      { transform: 'translate('+randomInRange(-200,200)+'px, '+ randomInRange(-200,200)+'px)'},
      { transform: 'scale('+randomInRange(.75,1.50)+','+ randomInRange(.75,1.50)+')'}
    ], {
      duration: 3000,
      direction: 'alternate'
    });
  };
  $("line").css('stroke-width', randomInRange(10,40));
});