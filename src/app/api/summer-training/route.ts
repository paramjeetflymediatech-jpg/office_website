import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { revalidatePath } from 'next/cache';
import ContactQuery from '@/models/ContactQuery';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, college, mode, course, message } = body;

    if (!name || !email || !phone || !mode || !course) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    const subject = `Summer Training Application - ${course}`;
    const dbMessage = `Mode: ${mode}\nCourse: ${course}\nCollege/University: ${college || 'N/A'}\n\nAdditional Details:\n${message || 'N/A'}`;

    // 1. Save to Database
    try {
      await ContactQuery.create({
        name,
        email,
        phone,
        subject,
        message: dbMessage,
        status: 'NEW'
      });
      revalidatePath('/admin/contact');
    } catch (dbError) {
      console.error('Database Error:', dbError);
    }

    // 2. Build transporter & mail payloads
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMail = {
      from: `"Summer Training Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'anujguptaflymedia@gmail.com',
      replyTo: email,
      subject: `New Summer Training Application: ${name} (${course})`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCollege: ${college || 'N/A'}\nMode: ${mode}\nCourse: ${course}\n\nMessage:\n${message || 'N/A'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #d81b60;">New Summer Training Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>College:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${college || 'N/A'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Mode:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${mode}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Course:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${course}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <strong>Additional Message:</strong>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">${message || 'N/A'}</p>
          </div>
        </div>
      `,
    };

    const autoReply = {
      from: `"Flymedia Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Application Received - Flymedia Summer Training',
      text: `Hi ${name}, we have received your application for Summer Training in ${course}. Our team will contact you shortly.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #d81b60;">Application Received</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for applying for the <strong>Summer Training Program</strong> at Flymedia Technology.</p>
          <p>We have successfully received your application for <strong>${course}</strong> (${mode}). Our admissions team will review your details and contact you shortly to guide you through the next steps.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #666;">Best Regards,</p>
            <p style="margin: 5px 0 0 0; font-weight: bold; color: #000;">Flymedia Technology Team</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">Plot no, 20, Vishal Nagar Ext, Ludhiana, Punjab 141001</p>
          </div>
        </div>
      `,
    };

    // 3. Fire emails in the background - DO NOT await them to keep form submission instantly fast
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter.sendMail(adminMail).catch((err) =>
        console.error('Admin email error:', err)
      );
      transporter.sendMail(autoReply).catch((err) =>
        console.error('Auto-reply email error:', err)
      );
    } else {
      console.warn('Email credentials not configured — emails skipped.');
    }

    return NextResponse.json(
      { message: 'Application submitted successfully! We will get back to you soon.' },
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
