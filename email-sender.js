var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yazenabouchendi97@gmail.com',
    pass: 'yazen@1998'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'yazenabouchendi97@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});