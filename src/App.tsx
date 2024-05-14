import { useState } from "react";
import { usePersonalInfo } from "./stores/storePersonalInfo";
import { useSelectPlan } from "./stores/storeSelectPlan";

import Sidebar from "./components/Sidebar/Sidebar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";

import "./index.css";
import PickAddOns from "./components/PickAddOns/PickAddOns";
import { usePickAddOns } from "./stores/storePickAddOns";
import Summary from "./components/Summary/Summary";
import { useSummary } from "./stores/storeSummary";

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
      return <PickAddOns />;
    case 4:
      return <Summary />;
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
  const addons = usePickAddOns((state) => state.selectedAddOns);
  const total = useSummary((state) => state.total);

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
    console.log("Add-ons: ", addons);
    console.log("Total: ", total);
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
              className={`w-24 px-4 py-2 font-bold text-gray-400 hover:text-blue-800 text-sm ${
                selectedStepOption > 1 ? "visible" : "invisible"
              }`}
              onClick={handleBackStep}
            >
              Go Back
            </button>
            {selectedStepOption === steps.length ? (
              <button
                className="w-24 px-4 py-2 bg-blue-700 hover:bg-purple-500 rounded-md text-gray-200 text-sm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            ) : (
              <button
                className="w-24 px-4 py-2 bg-blue-950 hover:bg-blue-800 rounded-md text-gray-200 text-sm"
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
