import { useState } from "react";
import { usePersonalInfo } from "./stores/storePersonalInfo";
import { useSelectPlan } from "./stores/storeSelectPlan";

import Sidebar from "./components/Sidebar/Sidebar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";

import "./index.css";

type SidebarOptionType = {
  number: number;
  title: string;
  option: string;
};

function showStep(step: number) {
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <h1>Add-ons</h1>;
    case 4:
      return <h1>Summary</h1>;
    case 5:
      return <h1>5555</h1>;
    default:
      return <PersonalInfo />;
  }
}

function App() {
  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);
  const plan = useSelectPlan((state) => state.selectedPlan);
  const billingPlan = useSelectPlan((state) => state.billingPlan);

  const steps: SidebarOptionType[] = [
    { number: 1, title: "STEP 1", option: "YOUR INFO" },
    { number: 2, title: "STEP 2", option: "SELECT PLAN" },
    { number: 3, title: "STEP 3", option: "ADD-ONS" },
    { number: 4, title: "STEP 4", option: "SUMMARY" },
  ];
  const [selectedStepOption, setSelectedStepOption] = useState(1);

  const handleNextStep = () => {
    if (selectedStepOption < steps.length) {
      setSelectedStepOption(selectedStepOption + 1);
    }
  };

  const handleBackStep = () => {
    if (selectedStepOption > 1) {
      setSelectedStepOption(selectedStepOption - 1);
    }
  };

  const handleConfirm = () => {
    console.log("Confirmed");
    // TODO: Show data in a modal and reset the forms
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Plan: ", plan);
    console.log("Billing plan: ", billingPlan);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
      <section className="flex w-[860px] p-4 rounded-md bg-white shadow-md">
        <Sidebar selectedStepOption={selectedStepOption} steps={steps} />
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="w-full px-12 py-4">
            {showStep(selectedStepOption)}
          </div>

          <div className="flex w-full justify-between px-12">
            <button
              className={`w-24 px-4 py-3 font-bold text-gray-200 hover:text-blue-800 text-sm ${
                selectedStepOption > 1 ? "visible" : "invisible"
              }`}
              onClick={handleBackStep}
            >
              Go Back
            </button>
            {selectedStepOption === steps.length ? (
              <button
                className="w-24 px-4 py-3 bg-purple-700 rounded-md text-gray-200 text-sm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            ) : (
              <button
                className="w-24 px-4 py-3 bg-blue-950 hover:bg-blue-800 rounded-md text-gray-200 text-sm"
                onClick={handleNextStep}
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
