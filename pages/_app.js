
import Appprovider from "@/Context/AppContext";
import "../styles/globals.css"; // Import any global styles you have

function MyApp({ Component, pageProps }) {
  return (
    <Appprovider>
      <Component {...pageProps} />
    </Appprovider>
  );
}

export default MyApp;
