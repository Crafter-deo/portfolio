import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../components/About";

export default function Home() {
  //useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Sudodeo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicons/sudo-favicon.ico" />
      </Head>

      <NavBar />
      <Header />
      <main>
        <About />
      </main>
    </>
  );
}
