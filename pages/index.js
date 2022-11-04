import NavBar from "../src/sections/NavBar";
import Hero from "../src/sections/Hero";
import Portfolio from "../src/sections/Portfolio";
import Contact from "../src/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris John - Fullstack Developer</title>
        <meta name="description" content="Fullstack Developer" />
      </Head>
      <div className="text-charcoal">
        <NavBar />
        <Hero />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
