import { hashPassword } from '../../../lib/backend/hashpass';
import { createCredentialsForUser, findUserCredentialEmail } from '../../../lib/backend/credentialuser';

export default async function handler(req, res) {
     if (req.method !== 'POST') {
          return;
     }

     const data = req.body;
     const { username, email, password } = data;

     if (!username || !email || !email.includes('@') || !password || password.trim().length < 7) {
          res.status(422).json({ message: 'Invalid inputs', });
          return;
     }

     const existingUser = await findUserCredentialEmail(email);
     if (existingUser) {
          res.status(422).json({ message: 'User exists already!' });
          return;
     }

     const hashedPassword = await hashPassword(password);
     await createCredentialsForUser(username, email, hashedPassword);
     res.status(200).json({ message: 'Created user!' });
}