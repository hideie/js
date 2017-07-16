$(function(){
    $("#q31 img").load(function(){
        $(this).css({'width':'500','height':'300'});           
    });
});


$(function(){
    $(window).resize(function(){            
        $("#q31 img").css({'width':'50','height':'30'});
    });
});


$(function(){
    var eee = $("ul.eee").children().length;
    $("#q33").text("liタグの数は" + eee + "個");
});

$(function(){
    $("ul.eee").children().click(function(){
        var fff = $("ul.eee").children().index(this) +1;
        $("#q34").text("クリックしたのは" + fff + "番目");
    });
});


$(function(){
    $("#q35").click(function(){
        var ggg = $(this).offset().left;
        $("#q35").animate({'left':ggg + 500})
    });     
});

$(function(){
    var q36 = 50;
    $("#q36").text((q36 >= 70) ? '合格' : '不合格');
});

$(function(){
    $("a.q37").click(function(){
        return false;
    });
});

$(function(){
    $("p.button").toggle(function(){
        $("#q38").text("魔法少女!?なにそれカッケー!!!")             
    },function(){
        $("#q38").text("QBボクと契約してあ～だこ～だ／人◕ ‿‿ ◕人＼")             
    },function(){
        $("#q38").text("ワルプルギスｷﾀ-----(ﾟ∀ﾟ)---!!!")              
    },function(){
        $("#q38").text("世界オーワタ＼(＾o＾)／")             
    },function(){
        $("#q38").text("ほむほむ転生(D. C.)") 
    })
});

$(function(){
    $("ul.q39 li").each(function(){
        var aaa = $(this).text();                        
        $("p.q39").prepend(aaa + "、");
    });
});

$(function(){
    $("ul#q40 li").prepend(function(index){
        return index + 1 + "、";
    });
});










