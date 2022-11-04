import Typed from "react-typed";

export default function Typing({ text }) {
  return <Typed strings={[text]} typeSpeed={30} showCursor={false} />;
}
