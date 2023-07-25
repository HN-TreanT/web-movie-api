var nodemailer = require("nodemailer");

const options = {
  service: "gmail",
  auth: {
    user: "hoangnammta2301@gmail.com",
    pass: "rtikemkkstuvrfwf",
  },
};

const Mail = (token, targetMail) => {
  var transporter = nodemailer.createTransport(options);
  transporter.verify(async (error) => {
    if (error) console.log(error);
    else {
      console.log("connected successfully!");
      var mail = {
        from: "hoangnammta2301@gmail.com",
        to: targetMail,
        subject: "Verify Login",
        text: `Verify Token: ${token}`,
      };
      transporter.sendMail(mail, (error, info) => {
        if (error) console.log(error);
        else console.log("Email sent: " + info.response);
      });
    }
  });
};

const PasswordMail = (newpassword, targetMail) => {
  var transporter = nodemailer.createTransport(options);
  // transporter.verify(async (error) => {
  //   if (error) console.log("check err:", error);
  //   else {
  //     console.log("connected mail successfully");
  //     var mail = {
  //       from: "hoangnammta2301@gmail.com",
  //       to: targetMail,
  //       subject: "Mật khẩu mới của bạn",
  //       text: `Mật khẩu:${newpassword}`,
  //     };
  //     transporter.sendMail(mail, (error, info) => {
  //       if (error) console.log(error);
  //       else console.log("email sent:" + info.response);
  //     });
  //   }
  // });
  var mail = {
    from: "hoangnammta2301@gmail.com",
    to: targetMail,
    subject: "Mật khẩu mới của bạn",
    text: `Mật khẩu:${newpassword}`,
  };
  transporter.sendMail(mail, (error, info) => {
    if (error) console.log(error);
    else console.log("email sent:" + info.response);
  });
};

module.exports = {
  Mail,
  PasswordMail,
};
