import nodemailer from "nodemailer";
import { emailTempalte } from "./emailTemplate.js";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  service: "gmail",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bassamwalid5@gmail.com",
    pass: "fhgahpertjvugfph",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"CodeSender🧑‍💻🧑‍💻🧑‍💻" <bassamwalid5@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Verify Your Email", // Subject line
    text: "Hello Please Verify Your Email", // plain text body
    html: emailTempalte(email), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
export default sendMail;
