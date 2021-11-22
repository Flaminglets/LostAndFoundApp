import { signIn } from 'next-auth/client'

export default function AccessDenied() {
    return (
        <div>
        <h1>Access Denied</h1>
        <p>
            You must be signed in to view this page
        </p>
        <button onClick={(e) => { e.preventDefault(), signIn() }}>Sign In</button>
        </div>
    )
}