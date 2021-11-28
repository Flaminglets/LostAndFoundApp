import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { createUser, getUser } from '../../../../lib/backend/database';

// By Danny @Flaminglets
// This file represents the authentication process for users
// It uses NextAuth to connect the sign in and the register process through a provider

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
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    })
  ],

  pages: {
    signIn: "/loginregister",
  },

  callbacks: {
    async session({ session, user, token }) {
      const aUser = await getUser(user);

      const sessionUser = {
        id: aUser.id.toString(),
        name: aUser.name,
        email: aUser.email,
        image: aUser.image,
      }

      session = sessionUser;

      return session;
    },
  }
});

