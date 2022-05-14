import AppStateProvider from "../components/AppStateProvider";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
