import nodemailer from 'nodemailer';

export const sendEmailnode = (req, res, next) => {
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);
    const textData= `"name":${name} "email":${email} "message":${message} `;
    console.log(textData);
    /*const transporter = nodemailer.createTransport({
        host: "",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "firozahmed3052000@gmail.com",
            pass: "jn7jnAPss4f63QBp6D",
        },
    });
    const sendE = async () => {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"From Protfolio 👻" <firozahmed3052000@gmail.com>', // sender address
            to: "mdfirojahmedkgec2023@gmail.com", // list of receivers
            subject: {subject}, // Subject line
            text: textData, // plain text body
            html: `<b>{message}</b>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    sendE();*/
}