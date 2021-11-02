import { get } from 'mongoose';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { createUser, getUsers } from '../../../../lib/backend/database';
import { verifyPassword } from '../../../../lib/backend/hashpass';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    // OAuth authentication providers...
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "EMAIL" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await getUsers(credentials);
        const validInput = await verifyPassword(
          credentials.password,
          user.password,
        );

        if (!user && !validInput) {
          throw new Error('Login failed')
        }

        return user;
      }
    }),

  ],

  pages: {
    signIn: "/loginregister",
  },

  //database: process.env.MONGODB_URL,

  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like an access_token from a provider.
      console.log("Current Session", user);
      const aUser = await getUsers(user);
      if (!aUser) {
        createUser(user.name, user.email, user.image);
      }

      const sessionUser = {
        name: user.name,
        email: user.email,
        image: user.image,
      }

      session = sessionUser;

      return session;
    },
  }

});

