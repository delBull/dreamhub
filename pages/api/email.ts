import { Resend } from 'resend';

import SubscribedEmail from '../../components/emails/subscribed';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    firstName: z.string(),
    email: z.string().email()
});

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
    const parsed = schema.safeParse(JSON.parse(request.body));

    if (!parsed.success) {
        return response.status(400).json(parsed.error);
    }

    const { firstName, email } = parsed.data;

    try {
        await resend.emails.send({
            from: 'Dreamhub Agency <no-reply@subscribers.dreamhub.agency>',
            to: [email],
            subject: 'La tokenización ha comenzado',
            react: SubscribedEmail({
                firstName
            })
        });

        response.status(200).json({
            status: 'OK'
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(`Failed to send email: ${e.message}`);
        }
        response.status(500).json({
            error: 'Internal server error.'
        });
    }
}
