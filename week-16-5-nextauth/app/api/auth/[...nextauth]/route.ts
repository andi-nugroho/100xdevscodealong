import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { uniqueUserName } from "@/app/lib/uniqueUsername";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials:{
                Username: { label: "Email",type: "text", placeholder: "email"},
                password: { label: "Password", type: "password", placeholder: "Password"}
            },
            async authorize(credentials:any) {
                return {
                    id: "user1",
                    name: "Prince Yadav",
                    email: "price@gmail.com"
                }
            },c
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({session,token,user}:any)=> {
            console.log("this is session",session)
            console.log("this is token",token);
            if(session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }
})

export const GET = handler;
export const POST = handler;





// export function GET(req:NextRequest, {params : {nextauth}}:{params: {nextauth:string[]}}) {
//     console.log(nextauth);
//         return NextResponse.json({
//             message: "asdf"
//         })
// }
// export function POST() {
//     return NextResponse.json({
//         message: "post request"
//     })
// }