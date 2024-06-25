import nodemailer from 'nodemailer';

export const SendEmail = async (to, subject, text, html, ) => {
    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_HOST,
        port: process.env.NEXT_PUBLIC_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.NEXT_PUBLIC_USERNAME,
            pass: process.env.NEXT_PUBLIC_PASSWORD,
        },
    });

    try {
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_USERNAME, // Sender address
            to, // List of receivers
            subject, // Subject line
            text, // Plain text body
            html, // HTML body
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Error sending email', error };
    }
};
