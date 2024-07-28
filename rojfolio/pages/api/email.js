import { sendEmail } from "@/backend/controlers/resendEmail";

export default async (req, res, next) => {
    switch (req.method) {
        case 'POST':
            await sendEmail(req, res);
            break;
        default:
            break;

    }
}