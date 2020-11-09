import Email from "./smtp";
const sendEmail = ({ content, email, reason, name }) => {
  const body = `<html>
  <head>
  <title>
    ${name} is reachig out regarding ${reason}
  </title>
  </head>
  <body>
  <p>name : ${name}</p>
  <p>email : ${email}</p>
  <p>reason : ${reason}</p>
  <p>${content}</p>
  </body>
  </html>`;
  return Email.send({
    SecureToken: "583efbe9-11b0-45a5-9f1c-23074e987b1e",
    To: "aku2anu@gmail.com",
    From: "developer.arjunnair@gmail.com ",
    Subject: `Reaching out from ghpages bio - ${reason}`,
    Body: body,
  });
};

export default sendEmail;
