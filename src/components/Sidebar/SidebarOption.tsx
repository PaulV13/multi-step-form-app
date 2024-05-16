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
    <div className="flex items-center gap-4 h-8">
      <div
        className={`w-8 h-8 md:w-6 md:h-6 flex justify-center items-center rounded-full border border-b-gray-300 ${
          selectedStepOption == number
            ? "bg-sky-300 border-sky-300"
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
      <div className="hidden md:flex flex-col">
        <p className="text-xs text-gray-400">{title}</p>
        <p className="text-xs font-bold text-gray-50">{option}</p>
      </div>
    </div>
  );
}

export default SidebarOption;
