import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend('re_5yRQ7UAQ_7xZ3JDyYdZzFWSSGNiCVtDM7');

export async function POST(req: NextRequest) {
  const payload: { email: string; emailContents: string } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'feedback@omnihale.com',
      to: ['omnihaleinc@gmail.com'],
      subject: 'Feed Back',
      headers: {
        'X-Entity-Ref-ID': '123456789',
      },

      react: EmailTemplate({
        emailContents: payload.emailContents,
        email: payload.email,
      }),
    });

    return NextResponse.json({ message: 'sent', data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
