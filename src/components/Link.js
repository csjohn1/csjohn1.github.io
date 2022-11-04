export default function Link({ title, link, ext }) {
  return (
    <a
      {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
      href={link}
      className="hover:text-highlight-gray transition-colors duration-300 ease-in-out mb-4 lg:mb-8"
    >
      {title}
    </a>
  );
}
