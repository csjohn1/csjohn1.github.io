import LoadOnView from "../utils/LoadOnView";
import Typing from "./Typing";

export default function HeadingText({ text, title, subheading, classes, idx }) {
  return (
    <>
      {title ? (
        <h1 className="text-[50px] lg:text-[100px] tracking-tight font-heading leading-tight min-h-[187.5px] md:min-h-0 lg:min-h-[250px] lg:max-w-4xl pr-20 sm:pr-0">
          <Typing text={text} />
        </h1>
      ) : (
        <h2
          className={`tracking-tight font-heading leading-tight ${
            subheading
              ? `text-[34px] lg:text-[50px] lg:pt-12 pb-8 lg:pb-10 lg:min-h-[0px] lg:h-[150.5px] ${
                  idx === 0
                    ? "min-h-[117px] sm:min-h-[74.5px]"
                    : "min-h-[74.5px]"
                } `
              : "text-[50px] lg:text-[100px] lg:pl-20 lg:pb-16 h-[62.5px] lg:h-[189px]"
          } ${classes ? classes : ""}`}
        >
          <LoadOnView>
            <Typing text={text} />
          </LoadOnView>
        </h2>
      )}
    </>
  );
}
