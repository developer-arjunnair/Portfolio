import Email from "./smtp";
const sendEmail = (typeOfWriter = "Recruiter", body) =>
  Email.send({
    SecureToken: "583efbe9-11b0-45a5-9f1c-23074e987b1e",
    To: "aku2anu@gmail.com",
    From: "developer.arjunnair@gmail.com ",
    Subject: `Reaching out from portfolio - ${typeOfWriter}`,
    Body: body,
  }).then((message) => alert(message));

export default sendEmail;
