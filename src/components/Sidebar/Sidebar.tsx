import SidebarOption from "./SidebarOption";

function Sidebar({
  selectedStepOption,
  steps,
}: {
  selectedStepOption: number;
  steps: { number: number; title: string; option: string }[];
}) {
  return (
    <section className="w-[274px] h-[568px] flex flex-col gap-4 p-8 row-span-4 rounded-md bg-center bg-cover bg-[url('/src/assets/images/bg-sidebar-desktop.svg')]">
      {steps.map((step) => (
        <SidebarOption
          key={step.number}
          number={step.number}
          title={step.title}
          option={step.option}
          selectedStepOption={selectedStepOption}
        />
      ))}
    </section>
  );
}

export default Sidebar;
