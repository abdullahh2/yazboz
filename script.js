$(document).ready(function () {
    var left = 0;
    var right = 0;
    $("#addScore").on("click", ()=>{
        var sol = $("#sol").val();
        var sag = $("#sag").val();
        var solScore = $(".solScore");
        var sagScore = $(".sagScore");
        var leftSide = $(".solTaraf");
        var rightSide = $(".sagTaraf");
        sol = parseInt(sol);
        sag = parseInt(sag);
        
        leftSide.append("<p>"+sol+"</p>");
        rightSide.append("<p>"+sag+"</p>");
        
        left += sol;
        right += sag;
        solScore.html(left);
        sagScore.html(right);
        
        $("#sol").val("");
        $("#sag").val("");
        
    })
});