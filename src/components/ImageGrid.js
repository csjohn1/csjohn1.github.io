export default function ImageGrid({ img, alt }) {
  return (
    <div className="flex items-center justify-center mt-16 lg:mt-20">
      <img src={`./images/${img}`} alt={alt} className="w-full lg:w-1/3" />{" "}
      <img
        src={`./images/${img}`}
        alt={alt}
        className="hidden lg:block w-1/3"
      />{" "}
      <img
        src={`./images/${img}`}
        alt={alt}
        className="hidden lg:block w-1/3"
      />{" "}
    </div>
  );
}
