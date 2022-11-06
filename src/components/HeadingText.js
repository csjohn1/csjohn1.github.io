import LoadOnView from "../utils/LoadOnView";
import Typing from "./Typing";

export default function HeadingText({ text, subheading, classes, idx }) {
  return (
    <h2
      className={`tracking-tight font-heading leading-tight ${
        subheading
          ? `text-[34px] lg:text-[50px] lg:pt-12 pb-8 lg:pb-10 lg:min-h-[0px] lg:h-[150.5px] ${
              idx === 0 ? "min-h-[117px] sm:min-h-[74.5px]" : "min-h-[74.5px]"
            } `
          : "text-[50px] lg:text-[100px] lg:pl-20 lg:pb-16 h-[62.5px] lg:h-[189px]"
      } ${classes ? classes : ""}`}
    >
      <LoadOnView>
        <Typing text={text} />
      </LoadOnView>
    </h2>
  );
}
