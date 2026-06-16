import { NextResponse } from 'next/server';
import { sendEmail, getAdminContactEmailHtml, getContactAutoReplyHtml } from '@/lib/email';
import { revalidatePath } from 'next/cache';
import ContactQuery from '@/models/ContactQuery';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !message || !subject || !phone) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Database first
    try {
      await ContactQuery.create({
        name,
        email,
        phone,
        subject,
        message,
        status: 'NEW'
      });

      if (process.env.CRM_API_URL) {
        await axios.post(process.env.CRM_API_URL, {
          name,
          email,
          phone,
          subject,
          message,
          status: 'NEW'
        },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
          },
        });
      } else {
        console.warn('CRM_API_URL is not configured — CRM post skipped.');
      }

      // Invalidate admin contact cache so new submission appears immediately
      revalidatePath('/admin/contact');
    } catch (dbError) {
      console.error('Database Error:', dbError);
    }

    // 2. Build mail payloads using templates from email utility
    const adminMailHtml = getAdminContactEmailHtml({ name, email, phone, subject, message });
    const autoReplyHtml = getContactAutoReplyHtml({ name, subject, message });

    const adminSubject = `New Contact Form Submission: ${subject || 'General Inquiry'}`;
    const adminText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`;

    const replySubject = 'Enquiry Received - Flymedia Technology';
    const replyText = `Hi ${name}, we have received your enquiry and our team will contact you shortly.`;

    // 3. Fire emails in the background — no await, respond instantly
    const adminEmailTo = process.env.ADMIN_EMAIL || 'anujguptaflymedia@gmail.com';

    sendEmail({
      to: adminEmailTo,
      subject: adminSubject,
      text: adminText,
      html: adminMailHtml,
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
    }).catch((err) => console.error('Admin email error:', err));

    sendEmail({
      to: email,
      subject: replySubject,
      text: replyText,
      html: autoReplyHtml,
      from: `"Flymedia Technology" <${process.env.EMAIL_USER}>`,
    }).catch((err) => console.error('Auto-reply email error:', err));

    // Respond immediately without waiting for SMTP
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
