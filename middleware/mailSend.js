const nodemailer = require("nodemailer");

// Create a transporter object
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "anmolrajputzixisoft@gmail.com",
        pass: "AnmolR123"
    }
});

// Send email
let mailOptions = {
    from: "anmolrajputzixisoft@gmail.com",
    to: "recipient_email@example.com",
    subject: "Password Reset",
    text: "Click the link to reset your password: http://example.com/reset?token=your_reset_token"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
