import { create } from "zustand";

export type SidebarOptionType = {
  number: number;
  title: string;
  option: string;
};

type StateSidebar = {
  selectedStepOption: number;
  steps: SidebarOptionType[];
};

type ActionsSidebar = {
  handleNextStep: () => void;
  handleBackStep: () => void;
  handleSetStep: (index: number) => void;
};

const steps: SidebarOptionType[] = [
  { number: 1, title: "STEP 1", option: "YOUR INFO" },
  { number: 2, title: "STEP 2", option: "SELECT PLAN" },
  { number: 3, title: "STEP 3", option: "ADD-ONS" },
  { number: 4, title: "STEP 4", option: "SUMMARY" },
];

export const useSidebar = create<StateSidebar & ActionsSidebar>((set) => ({
  selectedStepOption: 1,
  steps,
  handleNextStep: () => {
    set((state) => ({
      selectedStepOption:
        state.selectedStepOption < state.steps.length
          ? state.selectedStepOption + 1
          : state.selectedStepOption,
    }));
  },
  handleBackStep: () =>
    set((state) => ({
      selectedStepOption:
        state.selectedStepOption > 1
          ? state.selectedStepOption - 1
          : state.selectedStepOption,
    })),
  handleSetStep: (index: number) => {
    set(() => ({ selectedStepOption: index }));
  },
}));
