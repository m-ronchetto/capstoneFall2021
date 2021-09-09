document.addEventListener('DOMContentLoaded', (event) => {
    //button 2: when clicked add to number
    document.getElementById("button2").addEventListener("click", function(event){
        let num = parseInt(document.getElementById("center-2-vertically").innerText);
        num = num+1;
        document.getElementById("center-2-vertically").innerText = num;
    }, false);

    //button 3: when clicked iterate over colors
    let button_3_colors = ["#1C5544", "#FFCE31", "#DA0808"];
    let button_3_index = 0;
    document.getElementById("button3").addEventListener("click", function(event){
        button_3_index = (button_3_index + 1)%button_3_colors.length;
        document.getElementById("button3").style.background = button_3_colors[button_3_index];
    }, false);

    //button 5: rotate smiley face by adding 180 to angle
    let button_5_angle = 0;
    $("#button5").click(function(){
        let angle = (button_5_angle + 180)%360;
        $("#smile").css({'transform' : 'rotate('+ angle +'deg)'});
        button_5_angle = angle;
        console.log("rotated smiley :)");
        console.log(button_5_angle);
    });
    
    //button 6: Countdown to Christmas
    let countDownDate = new Date("Dec 25, 2021").getTime();
    let now1 = new Date();
    let distance = countDownDate - now1;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("center-6-vertically").innerHTML = days + " days until Christmas";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("center-6-vertically").innerHTML = "EXPIRED";
    }

    //button 7: picture toggle
    $("#button7").click(function() {
        $("#image1").toggle();
        $("#image2").toggle();
      });

    //button 8: the black square
    document.getElementById("button8").addEventListener("click", function(event){
        window.open("https://en.wikipedia.org/wiki/Blackout_Tuesday#Concerns_and_criticisms", "_blank");
    }, false);

    //button 9: night and day toggle
    $("#button9").click(function() {
        //if moon make sun2 else make sun moon
        if ($("#sky").attr("data-icon") === "heroicons-solid:sun"){
            $("#sky").attr('style', 'color: white');
            $("#sky").attr('data-icon', 'clarity:moon-solid');
            $("#sky").attr('data-height', '90');
            $("#button9").css('background-color', 'darkmagenta');
        }else{
            $("#sky").attr('style', 'color: #5a68e2');
            $("#sky").attr('data-icon', 'heroicons-solid:sun');
            $("#sky").attr('data-height', '110');
            $("#button9").css('background-color', 'aqua');
        }
      });

    //button 11: Self Destruct
    let x;
    $("#button11").click(function(){
        if (typeof x !== "undefined"){
            clearInterval(x);
        }
        document.getElementById("center-11-vertically").innerHTML = "20s";
        let seconds = 19;
        x = setInterval(function() {
            document.getElementById("center-11-vertically").innerHTML = seconds + "s ";
            seconds = seconds-1;
            if (seconds < 0) {
            clearInterval(x);
                document.getElementById("center-11-vertically").innerHTML = "EXPIRED";
            }
        }, 1000);
    });

    //button 12: Generate more circles
    $("#button12").click(function(){
        let r = $("#circle").attr('data-height');
        let clone = $("#circle").clone();
        let randomX = Math.random()*240;
        let randomY = (Math.random()- .2)*240;
        clone.css({
            position: "absolute", top: randomY, left: randomX
        })
        clone.appendTo("#button12");
    });

    //button 13: Cat rotation
    let button_13_cats = [];
    button_13_cats[0] ="cat1.jpg";
    button_13_cats[1] ="cat2.jpg";
    button_13_cats[2] ="cat3.jpeg";
    button_13_cats[3] ="cat4.jpeg";
    button_13_cats[4] ="cat5.jpg";
    let button_13_index = 0;
    $("#button13").click(function(){
        button_13_index = (button_13_index + 1)%button_13_cats.length;
        $("#button13").css("background-image","url(\""+button_13_cats[button_13_index] + "\")");
    });

    //button 14: swap radial gradient
    $("#button14").click(function(){
        if ($("#button14").css("background-image") == "radial-gradient(rgb(139, 0, 139), rgb(0, 255, 255))"){
            $("#button14").css("background-image", "radial-gradient(aqua, darkmagenta)");
        }else{
            $("#button14").css("background-image", "radial-gradient(darkmagenta, aqua)");
        }
    });

    //button 15: moving square
    $("#button15").click(function(){
        if ($("#hidden_square").is(":visible")){
            $("#hidden_square").hide();
            $("#hidden_square").stop();
            $("#hidden_square").animate({height: "0%", width: "0%"}, 0);
        }else{
            $("#hidden_square").show();
            $("#hidden_square").animate({height: "100%", width: "100%"}, 1500);
        }
    });
      //button 16: appear and disappear
      $("#button16").click(function(){
        $( "#button16wrap" ).toggle();
        if ($("#button16").css("background-color") === "rgb(0, 255, 255)"){
            $("#button16").css("background-color", "#FFCE31");
        } else{
            $("#button16").css("background-color", "#00FFFF");
        }
    });

    //button 17: icon rotate while background color changes
    $("#button17").on('mousedown', function(){
        $("#button17").animate({
            "background-color": "#9acd32"
        }, 4000);
    })
    // reset color on mouseup
    $("#button17").on('mouseup mouseleave', function(){
        $("#button17").stop();
        $("#button17").css({
            "background-color": "burlywood"
        });
    });
    
    //button 18: generate random colored squares with opacity
    let button_18_colors = ["#FF0000", "#FF8A00", "#FAFF00", "#00FF19", "#6100FF", "#DB00FF"];
    let button_18_index = 0;
    $("#button18").click(function(){
        let clone = $("#square").clone();
        let randomX = Math.random()*240;
        let randomY = (Math.random())*210;
        button_18_index = (button_18_index + 1)%button_18_colors.length;
        clone.css({
            position: "absolute", top: randomY, left: randomX, opacity: '0.6', color: button_18_colors[button_18_index]
        });
        clone.appendTo("#button18");
    });

    //button 19: color layers over image
    let button_19_colors = ["#3204fdba", "#9907facc", "#8b008b80", "#da080880"];
    let button_19_index = 0;
    document.getElementById("button19").addEventListener("click", function(event){
    
        color1= button_19_colors[button_19_index];
        button_19_index = (button_19_index + 1)%button_19_colors.length;
        color2= button_19_colors[button_19_index];
        document.getElementById("button19").style.backgroundImage = 'linear-gradient('+color1+','+color2+'), url("button19image.jpg")';
    }, false);

    //button 20: display mouse position
    $( "#button20" ).mousemove(function( event ) {
        var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
        $( "#x" ).first().text("Page Coordinates:");
        $( "#y" ).last().text(pageCoords);
      });

    //button 21: change background colors on click
    $("#button21").hover(function(){
        $("#a").click(function(){
            $("#button21").css('background-color', "#DA0808");
        });
        $("#b").click(function(){
            $("#button21").css('background-color', "#FFCE31");
        });
        $("#c").click(function(){
            $("#button21").css('background-color', "1C5544");
        });
    });
    
    //button 22: flower moves to random spots on click
    $("#button22").click(function(){
        let r = $("#flower").attr('data-height');
        let randomX = Math.random()*240;
        let randomY = (Math.random())*210;
        $("#flower").css({
            position: "absolute", top: randomY, left: randomX
        });
        console.log(randomX, randomY);
    });

    //button 24: rotating rectangle
    $("#button24").click(function(){
        $("#rectangle").css({
            transform: 'rotate(360deg)',
            'transform-origin': 'center',
            transition: 'transform 2s',
        });
    });

    //button 25: horizontally moving rectangle
    $("#button25").click(function(){
        if ($("#hidden_square2").is(":visible")){
            $("#hidden_square2").hide();
            $("#hidden_square2").stop();
            $("#hidden_square2").animate({height: "100%", width: "100%"}, 0);
        }else{
            $("#hidden_square2").show();
            $("#hidden_square2").animate({height: "100%", width: "0%"}, 1500);
        }
    });

    //button 26: center rectangle expanding out
    $("#button26").click(function(){
        $("#rectangle2").stop();
        $("#rectangle2").animate({height: "100%", width: "40px"}, 0);
        $("#rectangle2").animate({height: "100%", width: "100%"}, 1500);
    });

    //button 27: vertically moving rectangle
    $("#button27").click(function(){
        if ($("#hidden_square3").is(":visible")){
            $("#hidden_square3").hide();
            $("#hidden_square3").stop();
            $("#hidden_square3").animate({height: "100%", width: "100%"}, 0);
        }else{
            $("#hidden_square3").show();
            $("#hidden_square3").animate({height: "0", width: "100%"}, 1500);
        }
    });

    //button 28: rotate rectangle
    $("#button28").click(function(){
        $("#rectangle3").css({
            transform: 'rotate(360deg)',
            'transform-origin': 'center',
            transition: 'transform 2s',
        });
    });

    //button 29: center rectangle horizontally expanding out
    $("#button29").click(function(){
        $("#rectangle4").stop();
        $("#rectangle4").animate({height: "90px", width: "100%"}, 0);
        $("#rectangle4").animate({height: "100%", width: "100%"}, 1500);
    });

    //button 30: display circle at mouse position
    $( "#button30" ).mousemove(function( event ) {
        $("#button30circle").css({
            left: event.pageX -20,
            top: event.pageY -20
        });
    });

    //button 32: make circle into square
    $("#button32").click(function(){
        if($("#button32square").css('border-radius') == '100%'){
            $("#button32square").css('border-radius', '0%');
        }else{
            $("#button32square").css('border-radius', '100%');
        }
    });

    //button 33: rotate triangle on click
    let button_33_angle = 0;
    $("#button33").click(function(){
        let angle = (button_33_angle + 90)%360;
        $("#triangle").css({'transform' : 'rotate('+ angle +'deg)'});
        button_33_angle = angle;
        console.log("rotated triangle :)");
        console.log(button_33_angle);
    });

    //button 34: growing button on hold
    $("#button34").click(function(){
        $("#b34c").stop();
        $("#b34c").animate({
            height: "40px", width:  "40px", 
            top: '40%', left: '40%'
        }, 0);
        $("#b34c").animate({
            height: "200%", width:  "200%",
            top: '-50%', left: '-50%'
        }, 3000);
        console.log("hi");

    });

    //button 35: circle move on diagonal
    $("#button35").click(function(){
        $("#b35c").stop();
        $("#b35c").animate({
            top: '5%',
            left: '5%'
        }, 0);
        $("#b35c").animate({
            top: '80%',
            left: '80%'
        }, 2000);
    })

    //button 36: circle moves on horizontal
    $("#button36").click(function(){
        $("#b36c").stop();
        $("#b36c").animate({
            top: "40%", left: "5%"
        }, 0);
        $("#b36c").animate({
            top: "40%", left: "70%"
        }, 2000);
    });

    //button 37: circle moves on vertical
    $("#button37").click(function(){
        $("#b37c").stop();
        $("#b37c").animate({
            top: '5%',
            left: '40%'
        }, 0);
        $("#b37c").animate({
            top: '70%',
            left: '40%'
        }, 2000);
    })

    //button 38: open new tab
    $("#button38").click(function(){
        window.open();
    });

    //button 41: move triangle horizontally
    $("#button41").click(function(){
        var buttonWidth = $("#button41").width();
        $("#triangle2").stop();
        $("#triangle2").animate({
            top: '0px',
            left: '-80px'
        }, 0)
        $("#triangle2").animate({
            top: '0px',
            left: buttonWidth - 80
        }, 1000)
    });

    //button 42: move triangle upside down horizontally in reverse
    $("#button42").click(function(){
        var buttonWidth = $("#button42").width();
        $("#triangle3").stop();
        $("#triangle3").animate({
            top: '0px',
            left: buttonWidth - 80
        }, 0)
        $("#triangle3").animate({
            top: '0px',
            left: '-80px'
        }, 1000)
    });

    //button 43: move triangle down
    var buttonWidth43 = $("#button43").width();
    $("#triangle4").css({'border-left': buttonWidth43 + 'px solid #5a68e2'});
    $("#button43").click(function(){
        var buttonHeight = $("#button43").height();
        $("#triangle4").stop();
        $("#triangle4").animate({
            top: '-80px',
            left: '0px'
        }, 0)
        $("#triangle4").animate({
            top: buttonHeight - 80,
            left: '0px'
        }, 1000)
    });

    //button 44: watermelon color scheme
    $("#button44").mousemove(function(){
        $("#watermelon").attr('style', 'color: #DA0808');
        $("#button44").css('background-color', '#1C5544');
    });
    $("#button44").on('mouseleave', function(){
        $("#watermelon").attr('style', 'color: aqua');
        $("#button44").css('background-color', '#5a68e2');$
    });

    //button 45: rectangles widen on hover
    $("#button45").mousemove(function(){
        $("#rectangle-set2").children().css({
            width: "36px"
        });
    });
    $("#button45").on('mouseleave', function(){
        $("#rectangle-set2").children().css({
            width: "20px"
        });
    });

    //button 46: aaaaaaaaaaaaaaa
    $("#button46").click(function(){
        document.getElementById("button46").innerText += "a";
    })

    //button47: move triangle up
    var buttonWidth47 = $("#button47").width();
    $("#triangle5").css({'border-right': buttonWidth47 + 'px solid yellowgreen'});
    $("#button47").click(function(){
        var buttonHeight = $("#button47").height();
        $("#triangle5").stop();
        $("#triangle5").animate({
            top: buttonHeight - 80,
            left: '0px'
        }, 0)
        $("#triangle5").animate({
            top: '-80px',
            left: '0px'
        }, 1000)
    });

    //button 48: rotate rectangle set
    $("#button48").click(function(){
        $("#rectangle-set3").css({
            transform: 'rotate(360deg)',
            'transform-origin': 'center',
            transition: 'transform 2s'
        });
    });
    $("#button48").on("mouseleave", function(){
        $("#rectangle-set3").css({
            transform: 'rotate(0deg)',
            'transform-origin': 'center',
            transition: 'transform 0s'
        });
    });


    //button 50: when clicked iterate over fonts
    let button_50_fonts = ["source-sans-pro", "helvetica", "garamond"];
    let button_50_index = 0;
    document.getElementById("button50").addEventListener("click", function(event){
        button_50_index = (button_50_index + 1)%button_50_fonts.length;
        document.getElementById("button50").style.fontFamily = button_50_fonts[button_50_index];
    }, false);
});