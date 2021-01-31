import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
          const user = { id: 1, name: 'test', email: 'test@example.com' }
    
          if (credentials.username === "test" && credentials.password === "test") {
            return Promise.resolve(user)
          } else {
            return Promise.resolve(null)
          }
        }
      })
    
  ]
}

export default (req, res) => NextAuth(req, res, options)