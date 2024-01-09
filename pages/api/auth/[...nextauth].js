import axios from "axios";
import Cookies from "js-cookie";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// export const maxDuration = 300

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      console.log("user :", user);
      console.log("account :", account);
      if (account.provider === "google") {
        const { name, email , id } = user;
        try {
          const res = await axios.post("https://xpenso-backend.onrender.com/api/googlesignin", {
            name,
            email,
          });
          console.log(res.data);
          console.log(id);
          if (res.status === 201) {
            return Promise.resolve(`/dashboard?accesstoken=${id}&accessemail=${email}`);
          }
        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
  },
};

export default NextAuth(authOptions);
