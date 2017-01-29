var sections = [
		{	sentence: " a software engineer",
		},
		{	sentence: " a foodie",
		},
		{	sentence: " in love with travelling",
		},
		{	sentence: " interested to be an entrepreneur someday",
		},
		{	sentence: " in love with making web applications",
		},
		{	sentence: " a চাঁটগাঁইয়া",
    },
    { sentence : " in love with photography"
    },
    { sentence : " A Computer Science Enthusiast"
    }
	];
  var i = 0;
  var j = 0;
  var k = 0;
  var lengthSentence = 0;
  var lengthArray = sections.length;
  var forward = true;
  var currentPart = "";
  var interval = 50;

  function writing(text){
  	lengthSentence = sections[i].sentence.length;
  		setTimeout(function(){
  			interval = 50;
  			if(j === lengthSentence){
  				forward = false;
  			}
  			if(j === lengthSentence-2){
  				$(".afterTyping").one().addClass("onScreen");
  			}
  			if( j === lengthSentence-1 && forward){
  				interval = 2000;
  			}
  			if(j < lengthSentence && forward ){
  				if(sections[i].sentence[j] === "&"){
  					currentPart += "<strong>";
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart += "</strong>";
  				}
  				else{
  					currentPart += sections[i].sentence[j];
  				}
  				text.html(currentPart);
  				j++;
  			}else if(j > 0 && !forward){
  				if(sections[i].sentence[j] === "&"){
  					currentPart = currentPart.slice(0, - 8);
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart = currentPart.slice(0, - 9);
  				}
  				else{
  					currentPart = currentPart.slice(0, - 1);
  				}
  				text.html(currentPart);
  				j--;
  			}else if(j === 0){
  				forward = true;
  				/*body.css({
  					"background" : sections[i].background});*/
  				i++; // loop fra sezioni
  			}
  			if(i === lengthArray){
  				i = 0;
  			}
  			writing(text);
  		}, interval);
  }

$(document).ready(function(){
  var firstTimer = 5000;
  var text = $("#adjectives");
  setTimeout(function(){
    writing(text);
  }, firstTimer);

  var minimized_elements = $('.service-box .text-muted');
  var minimize_character_count = 400;

  minimized_elements.each(function(){
      var t = $(this).text();
      if(t.length < minimize_character_count ) return;

      $(this).html(
          t.slice(0,minimize_character_count )+'<span>... </span><a href="#" class="more">More</a>'+
          '<span style="display:none;">'+ t.slice(minimize_character_count ,t.length)+' <a href="#" class="less">Less</a></span>'
      );

  });

  $('a.more', minimized_elements).click(function(event){
      event.preventDefault();
      $(this).hide().prev().hide();
      $(this).next().show();
  });

  $('a.less', minimized_elements).click(function(event){
      event.preventDefault();
      $(this).parent().hide().prev().show().prev().show();
  });

  $('.social-btn').prepend('<span></span><span></span><span></span><span></span>');
});
