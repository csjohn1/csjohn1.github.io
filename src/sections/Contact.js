import HeadingText from "../components/HeadingText";
import Line from "../components/Line";
import Link from "../components/Link";
import Container from "../layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="mb-4 lg:mb-20">
      <Container>
        <Line />
        <HeadingText text="Contact" />
        <div className="flex flex-col text-lg lg:text-2xl pt-12 pl-16 lg:pt-8 lg:pl-0 lg:w-1/2 lg:ml-auto">
          <Link title="cxjohn@pm.me" link="mailto:cxjohn@pm.me" />
          <Link
            ext
            title="github.com/cxjohn"
            link="https://www.github.com/cxjohn"
          />
          <Link title="+1 (647) 915 9870" link="tel:647-915-9870" />
        </div>
      </Container>
    </section>
  );
}
