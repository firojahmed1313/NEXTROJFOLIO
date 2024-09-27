import { Resend } from 'resend';
import EmailCodeSent from '../config/EmailConfig';

export const sendEmail = async (req, res) => {
    //const resend = new Resend(process.env.RESEND_API_KEY);
    const RESEND_API_KEY="re_QBNo9PzV_F8L6wm77rLpMExEJ579nfRV5"
    const resend = new Resend(RESEND_API_KEY);
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);
    const textData = `"name":${name} "email":${email} "subject":${subject} "message":${message} `;
    console.log(textData);
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ["mdfirojahmed3052000@gmail.com"],
            subject: subject,
            react: EmailCodeSent({ name, email, subject, message }),
        });
        if (error) {
            console.log(error);
            return {
                success: false,
                massage: "Failed to send email",
            }
        }
        return {
            success: true,
            massage: "Email sent successfully",
        }
    } catch (error) {
        console.warn(error);
        return {
            success: false,
            massage: "Failed to send email",
        }
    }
}