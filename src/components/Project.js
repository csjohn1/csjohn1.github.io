import { useState } from "react";
import Image from "next/image";
import HeadingText from "../components/HeadingText";
import Line from "./Line";
import Underline from "./Underline";

export default function Project({
  title,
  img,
  subtitle,
  description,
  link,
  linkTitle,
  idx,
}) {
  const [hoverAction, setHoverAction] = useState("");
  const [hoverState, setHoverState] = useState(false);

  const setHover = (action, state) => {
    setHoverAction(action);
    setHoverState(state);
  };

  return (
    <div className="lg:pl-20">
      <Line classes="pl-8 lg:pl-0" />
      <HeadingText subheading text={title} idx={idx} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pb-4 lg:pb-0 lg:pr-10">
          <img
            src={`./images/${img}.png`}
            alt="Small image of portfolio project"
            className="w-full border border-charcoal"
          />
        </div>
        <div className="font-body lg:w-1/2 pl-16 lg:pl-10">
          <p className="text-lg lg:text-4xl pb-4 lg:pb-6">{subtitle}</p>
          <div className="flex flex-col lg:flex-row">
            <p className="text-md lg:text-lg text-gray lg:w-2/3 pb-6 lg:pb-0 lg:pr-6">
              {description}
            </p>
            <div className="lg:w-1/3">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                onMouseEnter={() => setHover("enter", true)}
                onMouseLeave={() => setHover("leave", false)}
              >
                <div
                  className={`flex justify-between transition-all duration-300 ease-in-out ${
                    hoverState ? "text-highlight-gray" : ""
                  }`}
                >
                  {hoverState}
                  <span>{linkTitle}</span>
                  <span>↗</span>
                </div>
                <Underline hoverAction={hoverAction} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
