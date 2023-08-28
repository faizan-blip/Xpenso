import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
export default NextAuth ({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        })
    ]
})
