import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { createUser, getUser } from '../../../../lib/backend/database';
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
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const response = await fetch("http://localhost:3000/api/credlogin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await response.json();
        if (response && user) {
          return user;
        }
        return user;
      }
    }),

  ],

  pages: {
    signIn: "/loginregister",
  },

  callbacks: {
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      // console.log("Current Session", user);
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
    // async jwt({ token, account }) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token
    //   }
    //   return token
    // }
  }
});

