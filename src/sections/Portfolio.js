import HeadingText from "../components/HeadingText";
import ImageGrid from "../components/ImageGrid";
import Line from "../components/Line";
import Project from "../components/Project";
import Container from "../layout/Container";

export default function Portfolio() {
  const projects = [
    {
      title: "↳ Climate Change Podcasting",
      img: "spot",
      subtitle:
        "Climate Education Credits - Built for New Relic x DEV's “Hack the Planet” Hackathon",
      description: (
        <>
          Stack: React, CSS, Firebase, Spotify Web API <br />
          Grand Prize Winner (USD$5000)
        </>
      ),
      link: "https://github.com/cxjohn/spotify-climate",
      linkTitle: "Github Repo",
    },
    {
      title: "↳ 3Feed",
      img: "feed",
      subtitle: "Web3 Substack - Built for ETHGlobal's “Web3 Jam” Hackathon",
      description: (
        <>
          Stack: Next.js, Tailwind CSS, Ceramic, Unlock <br />
          Winner (~USD$4800)
        </>
      ),
      link: "https://showcase.ethglobal.com/web3jam/3feed",
      linkTitle: "Showcase",
    },
    {
      title: "↳ Bookm3",
      img: "bookm3",
      subtitle:
        "Web3 Calendly  - Built for ETHGlobal's “Road to Web3” Hackathon",
      description: (
        <>
          Stack: Next.js, Tailwind CSS, Moralis, Solidity <br />
          Category Winner (USD$3000)
        </>
      ),
      link: "https://showcase.ethglobal.com/roadtoweb3/bookm3",
      linkTitle: "Showcase",
    },
  ];
  return (
    <section id="portfolio" className="scroll-mt-16 lg:scroll-mt-24">
      <Container>
        <Line />
        <HeadingText text="Portfolio" />
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Project {...project} idx={idx} />
            </div>
          );
        })}
        <Line classes="pl-8 lg:pl-0" />

        <ImageGrid img="texture.png" alt="Textured black and white 3D grid" />
      </Container>
    </section>
  );
}
