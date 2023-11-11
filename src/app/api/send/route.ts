import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend('re_5htDFkaa_EKmSx984TvZ3hnUJRsm7opg4');

export async function POST(req: NextRequest) {
  const payload: { email: string; emailContents: string } = await req.json();
  try {
    const data = await resend.sendEmail({
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
