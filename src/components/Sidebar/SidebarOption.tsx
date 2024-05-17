import { SidebarOptionType } from "../../stores/storeSidebar";

function SidebarOption({
  step,
  selectedStepOption,
}: {
  step: SidebarOptionType;
  selectedStepOption: number;
}) {
  const { number, title, option } = step;
  return (
    <div className="flex h-8 items-center gap-4">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-b-gray-300 md:h-6 md:w-6 ${
          selectedStepOption == number
            ? "border-sky-300 bg-sky-300"
            : "transparent border-white"
        } `}
      >
        <p
          className={`text-xs font-semibold ${
            selectedStepOption == number ? "text-black" : "text-white"
          } `}
        >
          {number}
        </p>
      </div>
      <div className="hidden flex-col md:flex">
        <p className="text-xs text-gray-400">{title}</p>
        <p className="text-xs font-bold text-gray-50">{option}</p>
      </div>
    </div>
  );
}

export default SidebarOption;
