import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend('re_9ctnBGhg_EpTYCmr7w2Qr1faQuCkkU5Chsss');

export async function POST(req: NextRequest) {
  req.headers;
  const payload: { email: string; emailContents: string } = await req.json();
  console.log(payload);
  try {
    const data = await resend.emails.send({
      from: payload.email,
      to: 'contact@omnihale.com',
      subject: 'Feed Back',
      react: EmailTemplate({ emailContents: payload.emailContents }),
    });

    return NextResponse.json({ message: 'sent', data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
