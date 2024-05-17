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
    <section className="flex justify-center gap-4 p-8 md:w-[274px] md:flex-col md:justify-start md:rounded-md md:bg-[url('./src/assets/images/bg-sidebar-desktop.svg')] md:bg-cover md:bg-center">
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
