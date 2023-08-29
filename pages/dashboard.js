import { Stack, Typography } from "@mui/material";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
const Dashboard = () => {
//     const { data: session } = useSession();
//    const route = useRouter()
//     if (!session) {
//         return route.push('/signin')
//     }

    return (
        <>
            {/* <Typography>Welcome to Dashboard</Typography>
            {session.user && (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => {signOut()
                    route.push('/signin')
                    }}>Sign out</button>
                </>
            )} */}
            <Stack bgcolor='#f9f9f9' flexDirection='row' gap='2em' justifyContent='center' padding='2em 2em'>
                <Stack width='30%' height='20em' bgcolor='#000'>

                </Stack>
                <Stack width='70%' height='20em' bgcolor='#d2d2d2'>

</Stack>
            </Stack>
        </>
    );
};

export default Dashboard;
