var helper = require('sendgrid').mail;
var keys = require("./key.js");

var from = $("#from").val();
var comment = $("#comment").html();
var name = $("#name").val();
var phone = $("#phone").val();

from_email = new helper.Email(from);
to_email = new helper.Email("jgilligan.sav@gmail.com");
subject = "Sending with SendGrid is Fun";
content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')(keys.key);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
})






// var from = $("#from").val();
// var comment = $("#comment").html();
// var name = $("#name").val();
// var phone = $("#phone").val();

// email.addTo("jimmy@fishingtybee.com");
// email.setFrom(from);
// email.setSubmit("email from American Fishing Charters form");
// email.setHtml("\nSender name: " + name + "\nSender phone: " + phone + "\nhere is the comment provided:" + comment);

// sendgrid.send(email);