import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import SubscribedEmail from '../../components/emails/subscribed';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email } = await request.json();

  try {
    await resend.emails.send({
      from: 'DHUB <no-reply@subscribers.dreamhub.art>',
      to: email,
      subject: 'La tokenización ha comenzado',
      react: SubscribedEmail({ 
      firstName 
    })
    });

    return NextResponse.json({
        status: 'OK'
    }, {
        status: 200
      })
    } catch(e: unknown) {
      if (e instanceof Error) {
        console.log(`Failed to send email: ${e.message}`);
      }
      return NextResponse.json({
        error: 'Internal server error.'
      }, {
        status: 500
      })
    }
    
  
  }
