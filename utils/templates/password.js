// utils/emailTemplates.js

export const passwordEmailTemplate = (recipientName, password) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .content {
                    margin-bottom: 20px;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: #ffffff;
                    background-color: #007bff;
                    border-radius: 5px;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome to Our Service</h1>
                </div>
                <div class="content">
                    <p>Dear ${recipientName},</p>
                    <p>Thank you for registering with us. Here is your password:</p>
                    <p><strong>${password}</strong></p>
                    <p>Please make sure to keep it safe and do not share it with anyone.</p>
                </div>
                <div class="footer">
                    <p>If you have any questions, feel free to contact our support team.</p>
                    <p>Best regards,</p>
                    <p>Pure View</p>
                </div>
            </div>
        </body>
        </html>
    `;
};
