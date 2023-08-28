// import { Typography } from "@mui/material";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// const Dashboard = () => {
//     const { data: session } = useSession();
//    const route = useRouter()
//     if (!session) {
//         return route.push('/signin')
//     }

//     return (
//         <>
//             <Typography>Welcome to Dashboard</Typography>
//             {session.user && (
//                 <>
//                     Signed in as {session.user.email} <br />
//                     <button onClick={() => {signOut()
//                     route.push('/signin')
//                     }}>Sign out</button>
//                 </>
//             )}
//         </>
//     );
// };

// export default Dashboard;
