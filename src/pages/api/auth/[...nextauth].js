import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
          console.log(credentials);
          if (credentials.username === "test" && credentials.password === "test") {
            console.log("logou");
             return Promise.resolve({ id: 1, name: 'test', email: 'test@example.com' });
          } else {
             Promise.reject(new Error('Invalid Username  and Password combination'));
          }
        }
      })
  ],
  site: "http://localhost:3000",
  pages: {
    signIn: '/signin'
  },
  session: {
    jwt: true, 
    maxAge: 1 * 3 * 60 * 60, // 3 hrs
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true)
    },
    redirect: async (url, baseUrl) => {
      return Promise.resolve(baseUrl)
    },
    session: async (session, user) => {
      return Promise.resolve(session)
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      return Promise.resolve(token)
    }
  }
  ,
  secret: "abc",
  jwt: {
      secret: "abc",
  }
}

export default (req, res) => NextAuth(req, res, options)