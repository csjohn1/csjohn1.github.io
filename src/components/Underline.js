export default function Underline({ hoverAction }) {
  return (
    <div className="overflow-hidden pt-4">
      <div
        className={` border border-b-0 border-x-0
       
        ${hoverAction === "enter" && "animate-move-to-right"}
        ${hoverAction === "leave" && "animate-move-from-left"}
        `}
      />
    </div>
  );
}
