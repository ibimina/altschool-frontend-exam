import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavBar, Profile, Footer } from "../components";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ibimina Github profile</title>
          <meta name="description" content="Github profile" />
        </Helmet>
        <NavBar />
        <Profile />
        <Footer />
      </HelmetProvider>
    </>
  );
}
