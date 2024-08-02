import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    //secret:'hello',
    session:{
        strategy: "jwt"
        
    },
    providers: [
        CredentialsProvider({
            credentials  :{
                email: {label:'username',type:"email",placeholder:"your name",require: true},
                password: {label:'password',type:"password",placeholder:"your password",require: true}
            },
            async authorize(credential){
                if(!credential){
                    return null
                }
                return true
            }
        })
    ]
        
    
});

export { handler as GET}