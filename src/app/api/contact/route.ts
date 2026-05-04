import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import ContactQuery from '@/models/ContactQuery';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Database
    try {
      await ContactQuery.create({
        name,
        email,
        phone,
        subject,
        message,
        status: 'NEW'
      });
    } catch (dbError) {
      console.error('Database Error:', dbError);
    }

    // 2. Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'anujguptaflymedia@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      text: `
        New submission received from the contact form:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Subject: ${subject || 'N/A'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Send to Admin
      await transporter.sendMail(mailOptions);

      // 3. Send Auto-Reply to User
      const autoReplyOptions = {
        from: `"Flymedia Technology" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Enquiry Received - Flymedia Technology',
        text: `Hi ${name}, we have received your enquiry and our team will contact you shortly.`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #ff9900;">Inquiry Received</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to <strong>Flymedia Technology</strong>.</p>
            <p>We have received your enquiry regarding <strong>${subject || 'our services'}</strong> and our team will contact you shortly.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #666;">Best Regards,</p>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #000;">Flymedia Technology Team</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">Plot no, 20, Vishal Nagar Ext, Ludhiana, Punjab 141001</p>
            </div>
          </div>
        `,
      };
      await transporter.sendMail(autoReplyOptions);
    } else {
      console.warn('Nodemailer credentials not found. Emails not sent.');
    }

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
