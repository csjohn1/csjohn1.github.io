import Typed from "react-typed";

export default function Typing({ text }) {
  return (
    <Typed
      strings={[text]}
      typeSpeed={20}
      showCursor={false}
      className="whitespace-pre"
    />
  );
}
