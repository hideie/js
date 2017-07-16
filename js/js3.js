// alert("お前はもう、死んでる");

$(function(){
    $('#q01').css('color', 'red');
    });
    

$(function(){
    $('#q02').css({'color':'blue', 'background':'yellow'});
    });
  

$(function(){
    $('#q03').text("エレン");
    });
    
    
$(function(){
    $('#q04').text("駆逐してやる！！！！");
    });


$(function(){
    $('#q05').html('<a href="#">"いいい"</a>');
    });
    

$(function(){
    $('#q6').addClass('aaa');
    });


$(function(){
    $('#q6 li').remove();
    });


// $(function(){
//     $('.button').click(function(){
//       alert("押しちゃったね・・・");
//     });
// });


$(function(){
    var q6 = $("p").css("color");
    $('#q9').text(q6);
    });


$(function(){
    $('#q10').click(function(){
      $(this).addClass('bbb');
    });
});


$(function(){
    $('#q10').prepend("超平和バスター");
    });


$(function(){
    $('#q10').append("ゆきあつ、つるこ、あなる、ぽっぽ");
    });

$(function(){
    $('#q13 li').before('<li>飛べない</li>');
    });

$(function(){
    $('#q13 li').eq(-1).after('<li>ただの豚</li>');
    });

$(function(){
    $('#q15 p').before('<p>あああ</p>');
    });

$(function(){
    $('#q15 p').eq(-1).after('<p>ううう</p>');
    });

$(function(){
    $('#q17').before('<p>ききき</p>');
    });

$(function(){
    $('#q17').before('<p>くくく</p>');
    });

$(function(){
    $('#q19').wrap('<div class=ccc></div>');
    });

$(function(){
    $('#q20').unwrap('<div class=ccc></div>');
    });

$(function(){
    $('p.q21').wrapAll('<div class=ddd></div>');
    });

$(function(){
    $('p.q22').wrapInner('<div class=ddd></div>');
    });

$(function(){
    $('p.q23').replaceWith('<p>xxxxx</p>');
    });

$(function(){
    $('p.q24').attr('class', 'q24_a');
    });

$(function(){
    $('p.q25 a').removeAttr('href');
    });

$(function(){
    $('p.q26 a').attr('target', 'blank');
    });

$(function(){
    $('p.q27_a').toggleClass('q27_b');
    });

$(function(){
    $('#q29').offset({top:5430, left:800});
    });

$(function(){
    $('p.button').click(function(){
        $('#q30').empty();
    });
});



