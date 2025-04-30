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
    const formSubmitEndpoint = `https://formsubmit.co/ajax/admin@epiphanyenterprisesinternational.com`;
    
    // Send to FormSubmit using their AJAX endpoint
    const response = await fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone || 'Not provided',
        message: message,
        _subject: 'New Contact Form Submission'
      })
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to submit form');
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
