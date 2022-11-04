import HeadingText from "../components/HeadingText";
import ImageGrid from "../components/ImageGrid";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section id="hero" className="pt-16 lg:pt-24">
      <Container>
        <HeadingText title text="Fullstack Developer in Toronto" />
        <ImageGrid img="rainbow.jpeg" alt="Rainbow in sky" />
      </Container>
    </section>
  );
}
