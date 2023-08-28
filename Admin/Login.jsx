// import { signIn, signOut, providers, useSession } from "next-auth/react"

// export default function Login() {
//   const { data: session } = useSession()

//   if (session) {
//     // Set the user data in sessionStorage only when the user is signed in
//     sessionStorage.setItem("user", JSON.stringify(session))

//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn('google')}>Sign in with Google</button>
//     </>
//   )
// }
