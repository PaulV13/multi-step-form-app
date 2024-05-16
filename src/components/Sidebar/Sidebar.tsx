import { SidebarOptionType } from "../../stores/storeSidebar";
import SidebarOption from "./SidebarOption";

function Sidebar({
  selectedStepOption,
  steps,
}: {
  selectedStepOption: number;
  steps: SidebarOptionType[];
}) {
  return (
    <section className="flex gap-4 p-8 justify-center md:flex-col md:bg-[url('./src/assets/images/bg-sidebar-desktop.svg')] md:bg-cover md:bg-center md:w-[274px] md:justify-start md:rounded-md">
      {steps.map((step) => (
        <SidebarOption
          key={step.number}
          step={step}
          selectedStepOption={selectedStepOption}
        />
      ))}
    </section>
  );
}

export default Sidebar;
