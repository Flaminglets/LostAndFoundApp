import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { createUser, getUser } from '../../../../lib/backend/database';

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
  ],

  pages: {
    signIn: "/loginregister",
  },

  callbacks: {
    async session({ session, user, token }) {
      const aUser = await getUser(user);
      if (!aUser && user != null) {
        await createUser(user.name, user.email, user.image);
      }

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

