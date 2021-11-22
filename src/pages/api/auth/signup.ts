import { hashPassword } from '../../../../lib/backend/hashpass';
import { createCredentialsForUser, findUserCredentialEmail } from '../../../../lib/backend/database';

async function handler(req, res) {
     if (req.method !== 'POST') {
          return;
     }

     const data = req.body;

     const { name, email, password } = data;

     if (
          !name ||
          !email ||
          !email.includes('@') ||
          !password ||
          password.trim().length < 7
     ) {
          res.status(422).json({
               message:
                    'Invalid input - password should also be at least 7 characters long.',
          });
          return;
     }

     const existingUser = await findUserCredentialEmail(email);

     if (existingUser) {
          res.status(422).json({ message: 'User exists already!' });
          return;
     }

     const hashedPassword = await hashPassword(password);

     const result = await createCredentialsForUser(name, email, hashedPassword)

     res.status(201).json({ message: 'Created user!' });
}

export default handler;