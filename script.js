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
        $("#hidden_square").toggle();
        $("#hidden_square").css({
            transform: 'scaleX(5)', transition: '3s'
        });
    });

    //button 16: appear and disappear
    $("#button16").click(function(){
        $( "#button16wrap" ).toggle();
        if ($("#button16").css("background-color") === "aqua"){
            $("#button16").css("background-color", "#FFCE31");
        } else{
            console.log($("#button14").css("background-color"));
            $("#button16").css("background-color", "aqua");
        }
    });

    //button 17: icon rotate while background color changes
    $("#button17").click(function(){
        $("#button17").css({
            // @keyframes colorChange {
            //     from {background-color: burlywood;}
            //     to {background-color: yellowgreen;}
            // }
            // #button17 {
            //     animation-name: colorChange;
            //     animation-duration: 4s;
            //  }
        });
    });
    
    //button 18: generate random colored squares with opacity
    $("#button18").click(function(){
        let r = $("#square").attr('data-height');
        let clone = $("#square").clone();
        let randomX = Math.random()*240;
        let randomY = (Math.random()- .2)*240;
        let button_18_colors = ["#FF0000", "#FF8A00", "#FAFF00", "#00FF19", "#6100FF", "#DB00FF"];
        let button_18_index = 0;
        button_18_index = (button_18_index + 1)%button_18_colors.length;
        clone.css({
            position: "absolute", top: randomY, left: randomX, opacity: '.6', style: "color:" + button_18_colors[button_18_index] + ";"
        })
        clone.appendTo("#button18");
    });

    //return element from an array and increment index
    function getElement(array, index){
        
    }

    //button 50: when clicked iterate over fonts
    let button_50_fonts = ["source-sans-pro", "helvetica", "garamond"];
    let button_50_index = 0;
    document.getElementById("button50").addEventListener("click", function(event){
        button_50_index = (button_50_index + 1)%button_50_fonts.length;
        document.getElementById("button50").style.fontFamily = button_50_fonts[button_50_index];
    }, false);
});