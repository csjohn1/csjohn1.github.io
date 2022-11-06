import Typing from "./Typing";

export default function TitleText({ text }) {
  return (
    <h1 className="text-[50px] lg:text-[100px] tracking-tight font-heading leading-tight min-h-[187.5px] md:min-h-0 lg:min-h-[250px] lg:max-w-4xl">
      <Typing text={text} />
    </h1>
  );
}
