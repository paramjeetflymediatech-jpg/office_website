import { NextResponse } from 'next/server';
import { sendEmail, getAdminSummerTrainingHtml, getSummerTrainingAutoReplyHtml } from '@/lib/email';
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

    // 2. Build mail payloads using templates from email utility
    const adminMailHtml = getAdminSummerTrainingHtml({ name, email, phone, college, mode, course, message });
    const autoReplyHtml = getSummerTrainingAutoReplyHtml({ name, course, mode });

    const adminSubject = `New Summer Training Application: ${name} (${course})`;
    const adminText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCollege: ${college || 'N/A'}\nMode: ${mode}\nCourse: ${course}\n\nMessage:\n${message || 'N/A'}`;

    const replySubject = 'Application Received - Flymedia Summer Training';
    const replyText = `Hi ${name}, we have received your application for Summer Training in ${course}. Our team will contact you shortly.`;

    // 3. Fire emails in the background - DO NOT await them to keep form submission instantly fast
    const adminEmailTo = process.env.ADMIN_EMAIL || 'anujguptaflymedia@gmail.com';

    sendEmail({
      to: adminEmailTo,
      subject: adminSubject,
      text: adminText,
      html: adminMailHtml,
      from: `"Summer Training Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
    }).catch((err) => console.error('Admin email error:', err));

    sendEmail({
      to: email,
      subject: replySubject,
      text: replyText,
      html: autoReplyHtml,
      from: `"Flymedia Technology" <${process.env.EMAIL_USER}>`,
    }).catch((err) => console.error('Auto-reply email error:', err));

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
