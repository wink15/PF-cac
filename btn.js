$('#submit').click(function(){
    $(this).addClass('loading hidden');
    window.setTimeout(function(){
      $('#submit').removeClass('loading hidden').addClass('done');
      
    }, 2000);
  });
  