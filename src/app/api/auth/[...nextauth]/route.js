import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions={
  secret: process.env.NEXT_PUBLIC_API_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your name",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your password",
          required: true,
        },
      },
      async authorize (credentials) {
        const {email,password}= credentials
        if (!credentials) {
          return null;
        }
        if (email){
          
          
          // const currentUser= users.find(user=>user.email===email)
   
         const db = await connectDB()
         const currentUser = await db.collection('users').findOne({email})
          console.log(currentUser)
          if(currentUser){
            if(currentUser.password===password){
              return currentUser 
            }
          }
        }
    
      },
    }),
  ],
  callbacks:{
    async jwt({ token, account, user }) {
      //console.log(user)
      //console.log(account)
      if (account) {
        token.type = user.type
      }
      //console.log(token)
      return token
    },
    async session ({ session, token }) {
      //console.log(token)
      //console.log(session)
      session.user.type = token.type 
      return session
    }
  },

}

const handler = NextAuth(authOptions);



const users =[
  {
    "name": "user1",
    "email": "user1@example.com",
    "type": "admin",
    "password": "password",
    "image": "https://picsum.photos/200/300"
  },
  {
    "username": "user2",
    "email": "user2@example.com",
    "type": "mod",
    "password": "password"
  },
  {
    "username": "user3",
    "email": "user3@example.com",
    "type": "user",
    "password": "password"
  },
  {
    "username": "user4",
    "email": "user4@example.com",
    "password": "password"
  },
  {
    "username": "user5",
    "email": "user5@example.com",
    "password": "password"
  }
]



export { handler as GET, handler as POST };
