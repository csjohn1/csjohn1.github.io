import Container from "../layout/Container";
import TitleText from "../components/TitleText";
import ImageGrid from "../components/ImageGrid";

export default function Hero() {
  return (
    <section id="hero" className="pt-16 lg:pt-24">
      <Container>
        <div className="block sm:hidden">
          <TitleText title text={`Fullstack\nDeveloper\nin Toronto`} />
        </div>
        <div className="hidden sm:block">
          <TitleText title text={`Fullstack Developer\nin Toronto`} />
        </div>
        <ImageGrid img="rainbow.jpeg" alt="Rainbow in sky" />
      </Container>
    </section>
  );
}
