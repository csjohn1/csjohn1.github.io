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
        <meta property="og:title" content="Chris John | Fullstack Developer" />
        <meta name="description" content="I can make websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cxjohn.me/" />
        <meta property="og:image" content="/images/rainbow.jpeg" />
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
