import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// Dummy user data - in production this would come from a database
const users = [
  {
    id: '1',
    email: 'member@salon.jp',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewEB4F6mwmPOSufu', // password123
    name: '田中太郎',
    role: 'member'
  },
  {
    id: '2', 
    email: 'admin@salon.jp',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewEB4F6mwmPOSufu', // password123
    name: 'サロン運営者',
    role: 'admin'
  },
  {
    id: '3',
    email: 'yamada@salon.jp', 
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewEB4F6mwmPOSufu', // password123
    name: '山田花子',
    role: 'member'
  }
]

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'メールアドレス', type: 'email' },
        password: { label: 'パスワード', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find(user => user.email === credentials.email)
        
        if (!user) {
          return null
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)
        
        if (!passwordMatch) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    }
  },
  session: {
    strategy: 'jwt',
  },
})

export { handler as GET, handler as POST }