import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // FormSubmit.co endpoint - a free email service that doesn't require API keys
    // You'll need to activate your email with them first by visiting their site
    const formSubmitEndpoint = `https://formsubmit.co/admin@epiphanyenterprisesinternational.com`;
    
    const formData = new FormData();
    formData.append('name', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('phone', phone || 'Not provided');
    formData.append('message', message);
    formData.append('_subject', 'New Contact Form Submission');
    
    // Send to FormSubmit
    const response = await fetch(formSubmitEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
