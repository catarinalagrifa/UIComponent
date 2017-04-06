$(document).ready(function() {
    
    // IMAGE ONE
    
        $(".buttonone").mouseenter(function(){
            $(".imagetwo").css("opacity", "0");
            $(".imagethree").css("opacity", "0");
            $(".imageone").delay(400).fadeIn(1500).css("opacity", "1");
            $(".active").delay(200).fadeOut(800);
        });

        $(".buttonone").mouseleave(function(){
            $(".imagetwo").css("opacity", "0");
            $(".imagethree").css("opacity", "0");
            $(".imageone").delay(200).fadeOut(500).css("opacity", "1");
            $(".active").delay(300).fadeIn(1000);
        });
    
    // IMAGE TWO
    
        $(".buttontwo").mouseenter(function(){
            $(".imageone").css("opacity", "0");
            $(".imagethree").css("opacity", "0");
            $(".imagetwo").delay(400).fadeIn(1500).css("opacity", "1");
            $(".active").delay(200).fadeOut(800);
        });

        $(".buttontwo").mouseleave(function(){
            $(".imageone").css("opacity", "0");
            $(".imagethree").css("opacity", "0");
            $(".imagetwo").delay(200).fadeOut(500).css("opacity", "1");
            $(".active").delay(300).fadeIn(1000);
        });
    
    // IMAGE THREE
    
        $(".buttonthree").mouseenter(function(){
            $(".imageone").css("opacity", "0");
            $(".imagetwo").css("opacity", "0");
            $(".imagethree").delay(400).fadeIn(1500).css("opacity", "1");
            $(".active").delay(200).fadeOut(800);
        });

        $(".buttonthree").mouseleave(function(){
            $(".imageone").css("opacity", "0");
            $(".imagetwo").css("opacity", "0");
            $(".imagethree").delay(200).fadeOut(500).css("opacity", "1");
            $(".active").delay(300).fadeIn(1000);
        });
    


});
