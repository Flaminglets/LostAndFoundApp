import { findUserCredentialEmail } from '../../../lib/backend/credentialuser';
import { verifyPassword } from '../../../lib/backend/hashpass';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;
    const { email, password } = data;

    if (!email || !email.includes('@') || !password) {
        res.status(400).json({ message: "Invalid inputs" });
        return;
    }

    const user = await findUserCredentialEmail(email);
    const validInput = await verifyPassword(password, user.password);

    if (!user && !validInput) {
        res.status(400).json({ message: 'Invalid login' });
        return;
    }

    return user;
}