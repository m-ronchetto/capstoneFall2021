<<<<<<< HEAD
//reusable functions
//Status: working, may want to make transform functions
let upperBound = 1;
let lowerBound= 0;

function changeColor() {
  let colors = ["#F90505", "#F9D507", "#0781C0"];
  let random = Math.floor(Math.random()*3);
  return colors[random];
  }

function scaleElements(upperBound, lowerBound){
  return (Math.random()*lowerBound + (upperBound-lowerBound));
};

function positionElements(upperBound, lowerBound){
  return (Math.random()*lowerBound + (upperBound-lowerBound));
};

//active states
//Status: working, need to implement smooth animation, special letter tweaks
$(".red_cont").click(function(){
  $(".hidden").css({
    "fill": changeColor(),
    "width": scaleElements(50,100),
    "height": scaleElements(50,100),
    "x": positionElements(175, 250),
    "y": positionElements(175, 250)
  });
  $(".red").animate({
    "width": scaleElements(50,100),
    "height": scaleElements(50,100),
    "x": positionElements(175, 250),
    "y": positionElements(175, 250)
  }, 400, function(){});
  $("line:not('.thinLine')").css('stroke-width', (Math.random()*15 +20));
});

$(".blue_cont").click(function(){
  $(".hidden_b").css({
    "fill": changeColor(),
    "width": positionElements(40,90),
    "height": positionElements(40,90),
    "x": scaleElements(60, 120),
    "y": scaleElements(60, 120)
  });
  $(".blue").animate({
    "width": positionElements(40,90),
    "height": positionElements(40,90),
    "x": scaleElements(60, 120),
    "y": scaleElements(60, 120)
  }, 300, function(){});
  $("line").css('stroke-width', (Math.random()*15 +10));
});

$(".yellow_cont").click(function(){
  $(".hidden_y").css({
    "fill": changeColor(),
    "width": positionElements(60,120),
    "height": positionElements(60,120),
    "x": scaleElements(50, 100),
    "y": scaleElements(50, 100)
  });
  $(".yellow").animate({
    "width": positionElements(60,120),
    "height": positionElements(60,120),
    "x": scaleElements(50, 100),
    "y": scaleElements(50, 100)
  }, 500, function(){});
  $("line").css('stroke-width', (Math.random()*15 +10));
});

//hover states
//Status: In progress, lines restore, sclaes not reverting
//need to write position revert and smooth animation
$(".red_cont").on('mouseenter', function(){
  $(".red").css({
    "width": (Math.random()*50 + 5)+"%",
    "height":(Math.random()*50 + 5)+"%",
    "x": (Math.random()*75)+"%",
    "y": (Math.random()*75)+"%"
  });
  $("line").css('stroke-width', (Math.random()*15 +5));
});
$(".red_cont").on('mouseleave', function(){
  $(".small").css({
    "width": "50px",
    "height": "50px"
  }); 
  $(".medium").css({
    "width": "75px",
    "height": "75px"
  });
  $(".large").css({
    "width": "150px",
    "height": "200px"
  }); 
  $(".xl").css({
    "width": "150px",
    "height": "300px"
  });
  $(".wide").css({
    "width": "150px",
    "height": "100px"
  });
  //maybe storing original positions in an array based on letter for position
  $("line").css('stroke-width', 15);
=======
//reusable functions
//Status: working, may want to make transform functions
let upperBound = 1;
let lowerBound= 0;

function changeColor() {
  let colors = ["#F90505", "#F9D507", "#0781C0"];
  let random = Math.floor(Math.random()*3);
  return colors[random];
  }

function scaleElements(upperBound, lowerBound){
  return (Math.random()*lowerBound + (upperBound-lowerBound));
};

function positionElements(upperBound, lowerBound){
  return (Math.random()*lowerBound + (upperBound-lowerBound));
};

//active states
//Status: working, need to implement smooth animation, special letter tweaks
$(".red_cont").click(function(){
  $(".hidden").css({
    "fill": changeColor(),
    "width": scaleElements(50,100),
    "height": scaleElements(50,100),
    "x": positionElements(175, 250),
    "y": positionElements(175, 250)
  });
  $(".red").animate({
    "width": scaleElements(50,100),
    "height": scaleElements(50,100),
    "x": positionElements(175, 250),
    "y": positionElements(175, 250)
  }, 400, function(){});
  $("line:not('.thinLine')").css('stroke-width', (Math.random()*15 +20));
});

$(".blue_cont").click(function(){
  $(".hidden_b").css({
    "fill": changeColor(),
    "width": positionElements(40,90),
    "height": positionElements(40,90),
    "x": scaleElements(60, 120),
    "y": scaleElements(60, 120)
  });
  $(".blue").animate({
    "width": positionElements(40,90),
    "height": positionElements(40,90),
    "x": scaleElements(60, 120),
    "y": scaleElements(60, 120)
  }, 300, function(){});
  $("line").css('stroke-width', (Math.random()*15 +10));
});

$(".yellow_cont").click(function(){
  $(".hidden_y").css({
    "fill": changeColor(),
    "width": positionElements(60,120),
    "height": positionElements(60,120),
    "x": scaleElements(50, 100),
    "y": scaleElements(50, 100)
  });
  $(".yellow").animate({
    "width": positionElements(60,120),
    "height": positionElements(60,120),
    "x": scaleElements(50, 100),
    "y": scaleElements(50, 100)
  }, 500, function(){});
  $("line").css('stroke-width', (Math.random()*15 +10));
});

//hover states
//Status: In progress, lines restore, sclaes not reverting
//need to write position revert and smooth animation
$(".red_cont").on('mouseenter', function(){
  $(".red").css({
    "width": (Math.random()*50 + 5)+"%",
    "height":(Math.random()*50 + 5)+"%",
    "x": (Math.random()*75)+"%",
    "y": (Math.random()*75)+"%"
  });
  $("line").css('stroke-width', (Math.random()*15 +5));
});
$(".red_cont").on('mouseleave', function(){
  $(".small").css({
    "width": "50px",
    "height": "50px"
  }); 
  $(".medium").css({
    "width": "75px",
    "height": "75px"
  });
  $(".large").css({
    "width": "150px",
    "height": "200px"
  }); 
  $(".xl").css({
    "width": "150px",
    "height": "300px"
  });
  $(".wide").css({
    "width": "150px",
    "height": "100px"
  });
  //maybe storing original positions in an array based on letter for position
  $("line").css('stroke-width', 15);
>>>>>>> 331c02fbc55421c129df16f627b8e6ff3f9a0a35
});