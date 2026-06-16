import nodemailer from 'nodemailer';

// Configure SMTP transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  from?: string;
  replyTo?: string;
}

/**
 * Utility function to send an email.
 * Supports multiple recipients (as array of strings or comma-separated string).
 */
export async function sendEmail({ to, subject, text, html, from, replyTo }: SendEmailOptions) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not configured — email sending skipped.');
    return null;
  }

  // Parse recipients
  let recipientsList: string[] = [];
  if (Array.isArray(to)) {
    recipientsList = to.map((e) => e.trim()).filter(Boolean);
  } else if (typeof to === 'string') {
    recipientsList = to
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean);
  }

  if (recipientsList.length === 0) {
    throw new Error('No recipients provided.');
  }

  const sendPromises = recipientsList.map((recipient) => {
    const mailOptions = {
      from: from || `"Flymedia Technology" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo,
      subject,
      text,
      html,
    };
    return transporter.sendMail(mailOptions);
  });

  return Promise.all(sendPromises);
}

/**
 * ----------------------------------------------------
 * HTML Template Helpers
 * ----------------------------------------------------
 */

interface AdminContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Professional HTML template for new Contact inquiry (Admin notification)
 */
export function getAdminContactEmailHtml({ name, email, phone, subject, message }: AdminContactData) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #1f2937;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e5e7eb;">
        <!-- Header -->
        <div style="background-color: #111827; padding: 24px 32px; border-bottom: 4px solid #ff9900;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.025em;">Flymedia Technology</h2>
          <p style="color: #9ca3af; margin: 4px 0 0 0; font-size: 14px;">Website Contact Form Submission</p>
        </div>
        <!-- Content Body -->
        <div style="padding: 32px;">
          <h3 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Contact Inquiry Details</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; width: 120px; color: #6b7280; font-size: 14px; font-weight: 500;">Name:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Email:</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #ff9900; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Phone:</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #111827; text-decoration: none; font-weight: 600;">${phone || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Subject:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${subject || 'N/A'}</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; border-left: 4px solid #ff9900; padding: 20px; border-radius: 0 8px 8px 0; margin-top: 20px;">
            <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</h4>
            <p style="color: #4b5563; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">This email was sent automatically from Flymedia Technology Website contact form.</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Beautiful HTML template for customer auto-reply (Contact submission response)
 */
export function getContactAutoReplyHtml({ name, subject, message }: { name: string; subject: string; message: string }) {
  const currentYear = new Date().getFullYear();
  const trimmedMessage = message.length > 150 ? message.substring(0, 150) + '...' : message;
  
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #1f2937;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e5e7eb;">
        <!-- Header banner -->
        <div style="background-color: #ff9900; padding: 40px 32px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">Inquiry Received Successfully</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for contacting Flymedia Technology</p>
        </div>
        <!-- Content Body -->
        <div style="padding: 32px; line-height: 1.6;">
          <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #111827;">Hi ${name},</p>
          <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 15px;">Thank you for reaching out to us. We have received your inquiry regarding <strong>${subject || 'our services'}</strong>. One of our representatives is currently reviewing your request and will follow up with you as soon as possible.</p>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 24px;">
            <h4 style="margin: 0 0 12px 0; color: #111827; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Your Submission Summary</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 100px;">Subject:</td>
                <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${subject || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Message:</td>
                <td style="padding: 6px 0; color: #4b5563; font-size: 14px; font-style: italic;">"${trimmedMessage}"</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 32px; padding: 20px; background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #b45309; font-size: 14px; font-weight: 600;">Need immediate assistance? Feel free to call us!</p>
            <p style="margin: 6px 0 0 0; font-size: 16px; font-weight: 700; color: #111827;">+91-98884-84310</p>
          </div>
        </div>
        <!-- Footer -->
        <div style="background-color: #111827; padding: 32px; color: #9ca3af; text-align: center; font-size: 13px;">
          <p style="margin: 0 0 8px 0; font-weight: 600; color: #ffffff;">Flymedia Technology</p>
          <p style="margin: 0 0 16px 0;">Plot no, 20, Vishal Nagar Ext, Ludhiana, Punjab 141001</p>
          <div style="border-top: 1px solid #374151; padding-top: 16px; font-size: 12px; color: #6b7280;">
            &copy; ${currentYear} Flymedia Technology. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  `;
}

interface AdminSummerTrainingData {
  name: string;
  email: string;
  phone: string;
  college: string;
  mode: string;
  course: string;
  message: string;
}

/**
 * Professional HTML template for new Summer Training Application (Admin notification)
 */
export function getAdminSummerTrainingHtml({ name, email, phone, college, mode, course, message }: AdminSummerTrainingData) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #1f2937;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e5e7eb;">
        <!-- Header -->
        <div style="background-color: #111827; padding: 24px 32px; border-bottom: 4px solid #d81b60;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.025em;">Flymedia Technology</h2>
          <p style="color: #9ca3af; margin: 4px 0 0 0; font-size: 14px;">Summer Training Program Application</p>
        </div>
        <!-- Content Body -->
        <div style="padding: 32px;">
          <h3 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Applicant Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Name:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Email:</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #d81b60; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Phone:</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #111827; text-decoration: none; font-weight: 600;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">College/University:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${college || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Training Mode:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${mode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">Course Selected:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${course}</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; border-left: 4px solid #d81b60; padding: 20px; border-radius: 0 8px 8px 0; margin-top: 20px;">
            <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Additional Message</h4>
            <p style="color: #4b5563; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'N/A'}</p>
          </div>
        </div>
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">This email was sent automatically from Flymedia Technology Summer Training Form.</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Beautiful HTML template for summer training auto-reply
 */
export function getSummerTrainingAutoReplyHtml({ name, course, mode }: { name: string; course: string; mode: string }) {
  const currentYear = new Date().getFullYear();
  
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 40px 20px; color: #1f2937;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e5e7eb;">
        <!-- Header banner -->
        <div style="background-color: #d81b60; padding: 40px 32px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">Application Received</h1>
          <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">Flymedia Technology Summer Training Program</p>
        </div>
        <!-- Content Body -->
        <div style="padding: 32px; line-height: 1.6;">
          <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #111827;">Hi <strong>${name}</strong>,</p>
          <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 15px;">Thank you for applying for our <strong>Summer Training Program</strong>. We have successfully received your application details for the <strong>${course}</strong> course under <strong>${mode}</strong> training mode.</p>
          <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 15px;">Our academic admissions team is currently reviewing your details. We will contact you shortly to discuss the next steps, fee structures, batch timings, and slot availability.</p>
          
          <div style="margin-top: 32px; padding: 20px; background-color: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #be185d; font-size: 14px; font-weight: 600;">Want to expedite your application? Connect with our counselor!</p>
            <p style="margin: 6px 0 0 0; font-size: 16px; font-weight: 700; color: #111827;">+91-98884-84310</p>
          </div>
        </div>
        <!-- Footer -->
        <div style="background-color: #111827; padding: 32px; color: #9ca3af; text-align: center; font-size: 13px;">
          <p style="margin: 0 0 8px 0; font-weight: 600; color: #ffffff;">Flymedia Technology</p>
          <p style="margin: 0 0 16px 0;">Plot no, 20, Vishal Nagar Ext, Ludhiana, Punjab 141001</p>
          <div style="border-top: 1px solid #374151; padding-top: 16px; font-size: 12px; color: #6b7280;">
            &copy; ${currentYear} Flymedia Technology. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  `;
}
