import { getSession, signOut } from 'next-auth/client'
import AccessDenied from '../components/accessDenied'

export default function Page ({ session }) {
  // If no session exists, display access denied message
  if (!session) { return  <div><AccessDenied/></div> }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p><strong>Welcome {session.user.name}</strong></p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}