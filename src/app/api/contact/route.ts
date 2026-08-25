import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  firstname: z.string().trim().min(1).max(50),
  lastname: z.string().trim().min(1).max(50),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Les informations saisies sont invalides.' }, { status: 400 });
    }

    const { firstname, lastname, email, phone, message } = parsed.data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Portfolio — Message de ${firstname} ${lastname}`,
      text: `
Nouveau message depuis le portfolio

Nom : ${firstname} ${lastname}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}

Message :
${message}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json({ error: "Impossible d'envoyer le message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 });
  }
}
