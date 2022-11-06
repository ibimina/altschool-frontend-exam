import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavBar, Profile, Footer, ReceivedEvents } from "../components";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const url = "https://api.github.com/users/ibimina";
    const { state } = useFetch(url)
    const { loading, docs } = state;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ibimina Github profile</title>
          <meta name="description" content="Github profile" />
        </Helmet>
        <NavBar />
        <div className="home_content">
          <Profile docs={docs} loading={loading} />
          <ReceivedEvents  />
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}
