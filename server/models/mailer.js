var mailgun = require('mailgun');


var api_key = 'key-1c31d4e89b7f61799421c4d0410e7b05';
var domain = 'sandbox1c180201ab1b4b36b81ea0037626dd77.mailgun.org';


var mailgun = require('mailgun-js')({apiKey: 'key-1c31d4e89b7f61799421c4d0410e7b05', domain: 'sandbox1c180201ab1b4b36b81ea0037626dd77.mailgun.org'});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
