$(function(){
    for(i=1; i<101; i++){
        $("div#q41").append(i + "、")
    }
});

$(function(){
    var jyojyo = new Array("ジョナサン・ジョースター","ジョセフ・ジョースター","空条承太郎","東方仗助","ジョルノ・ジョバァーナ");
    var aaa = jyojyo.length;
    for(i=0; i<aaa; i++){
        $("ul.q42").append('<li>' + jyojyo[i] + '</li>')
    }
});


$(function() {
    $("#q43_button").click(function(){
        var val = $("#q43_val").val();
        funcValReturn(val)
    });
         
    function funcValReturn(val){
        if(val >= 70){
            var bbb = "合格";
        }else{
            var bbb = "不合格";
        }
        $("p#q43_answer").append(bbb);
        return false;
    }
});     


$(function(){
    $("#q44_color").click(function(){
        setTimeout(function(){
            funcCssChenge()             
        }, 2000);
    });
         
    function funcCssChenge(){
        var aaa = $("#q44_select").val()
        $("#q44_box").css('width',aaa);
    }
});

$(function(){
    var aaa = Number($("#q45_a").text());
    var bbb = Number($("#q45_b").text());
    funcplus(aaa,bbb);
         
    function funcplus(aaa,bbb){
        var answer = aaa + bbb;
        $("#q45_answer").text(answer)
    }
});
$(function(){
    $("#q46_button").click(function(){
    var val = Number($("#q46_val").val());
    var subject = Number($("#q46_subject").val());
    var counting = $('#q46_select option:selected').val();
         
    switch(counting){
        case "addition":
            funcAddition(val,subject);
        break;
        case "subtraction":
            funcSubtraction(val,subject);
        break;
        case "multiplication":
            funcMultiplication(val,subject);
        break;
        case "division":
            funcDivision(val,subject);
        break;
    }
    });
     
    //足し算
    function funcAddition(val,subject){
        var answer = (val + subject);
        $("p#q46_answer").append(answer)
    }       
    //引き算
    function funcSubtraction(val,subject){
        var answer = (val - subject);
        $("p#q46_answer").append(answer)
    }       
    //掛け算
    function funcMultiplication(val,subject){
        var answer = (val * subject);
        $("p#q46_answer").append(answer)
    }       
    //割り算
    function funcDivision(val,subject){
        var answer = (val / subject);
        $("p#q46_answer").append(answer)
    }
});

$(function(){
    var mmm = $("#q47").find("div").map(function() {
        return $(this).attr("id");
    }).get();
    $(".q47").text(mmm);
});


$(function(){
    function funcColorName(colorName){
        $("p#q48").css('color',colorName);
    };
         
    $("p.button").click(function(){
        funcColorName('red');
    });
});

$(function(){
    $("ul#q49 li").eq(2).click(function(){
        setTimeout(function(){
            $("ul#q49 li").eq(2).replaceWith('<li>『リンクは偽物(フェイク)★-_-；』</li>')
        },2000);
        return false;
    });
});

$(function(){
    $("p.button").click(function(){    
        var aaa = $("#q50_box00").children("div").length;
        var i = 0;
        while (i < aaa){
            funcReturnDiv();
            i++;
        }
    });
         
    function funcReturnDiv(){
        var divID = $("#q50_box00 div:last-child").attr("id").substr(0,5);
        switch (divID){
        case "q50_a":
            var returnDiv = $("#q50_box01").after();
        break;  
        case "q50_b":
            var returnDiv = $("#q50_box02").after();    
        break;  
        case "q50_c":
            var returnDiv = $("#q50_box03").after();    
        break;  
    }
    $("#q50_box00").children("div:last-child").prependTo(returnDiv);
    }       
});