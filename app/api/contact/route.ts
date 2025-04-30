import { NextResponse } from 'next/server';

// Define allowed methods
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

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
    
    if (!response.ok) {
      const text = await response.text();
      let errorMessage = 'Failed to submit form';
      try {
        const responseData = JSON.parse(text);
        errorMessage = responseData.message || errorMessage;
      } catch (e) {
        // If JSON parsing fails, use the text response
        errorMessage = text || errorMessage;
      }
      throw new Error(errorMessage);
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
