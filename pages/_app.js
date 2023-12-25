
import Appprovider from "@/Context/AppContext";
import "../styles/globals.css"; // Import any global styles you have
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <Appprovider>
      <Component {...pageProps} />
    </Appprovider>
    </SessionProvider>
  );
}

export default MyApp;
