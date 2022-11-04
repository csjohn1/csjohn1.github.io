import Container from "../layout/Container";

export const navItems = [
  { dest: "portfolio", name: "Portfolio" },
  { dest: "contact", name: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-10 bg-white">
      <Container>
        <div className="flex items-center justify-between w-full h-16 lg:h-24 select-none">
          <div className="flex items-center justify-between">
            <a href="#hero">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-7 sm:h-8 mb-2"
              />
            </a>
          </div>
          <div>
            {navItems.map((item, idx) => {
              return (
                <a
                  href={`#${item.dest}`}
                  key={idx}
                  className={`border px-3 py-2 md:px-10 hover:text-white hover:bg-charcoal transition-colors duration-300 ease-in-out text-sm lg:text-base font-body ${
                    idx === 0 ? "mr-3 md:mr-7" : ""
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}
