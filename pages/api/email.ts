import { Resend } from 'resend';

import SubscribedEmail from '../../components/emails/subscribed';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
    const data = request.body;
    const { firstName, email } = JSON.parse(data);
    
    try {
        await resend.emails.send({
            from: 'DHUB <no-reply@subscribers.dreamhub.art>',
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
