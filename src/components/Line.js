import LoadOnView from "../utils/LoadOnView";

export default function Line({ classes }) {
  return (
    <div
      className={`overflow-hidden mt-16 lg:mt-24 mb-8 ${
        classes ? classes : ""
      }`}
    >
      <LoadOnView>
        <div className="border border-b-0 border-x-0 animate-move-from-left" />
      </LoadOnView>
    </div>
  );
}
