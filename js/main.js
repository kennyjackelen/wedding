var fixEmail = function fixEmail(){
  var addy = $('.email-link').attr('href').replace('[at]','@').replace('[dot]','.');
  $('.email-link').attr('href',addy);
};

$(fixEmail);
