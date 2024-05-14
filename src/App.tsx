import { useState } from "react";
import { usePersonalInfo } from "./stores/storePersonalInfo";
import { useSelectPlan } from "./stores/storeSelectPlan";
import { usePickAddOns } from "./stores/storePickAddOns";
import { useSummary } from "./stores/storeSummary";
import { useSidebar } from "./stores/storeSidebar";

import Sidebar from "./components/Sidebar/Sidebar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import PickAddOns from "./components/PickAddOns/PickAddOns";
import Summary from "./components/Summary/Summary";

import checkMark from "./assets/images/icon-thank-you.svg";

import "./index.css";

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
  const [confirm, setConfirm] = useState(false);
  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);
  const plan = useSelectPlan((state) => state.selectedPlan);
  const billingPlan = useSelectPlan((state) => state.billingPlan);
  const addons = usePickAddOns((state) => state.selectedAddOns);
  const total = useSummary((state) => state.total);

  const handleBackStep = useSidebar((state) => state.handleBackStep);
  const handleNextStep = useSidebar((state) => state.handleNextStep);

  const selectedStepOption = useSidebar((state) => state.selectedStepOption);
  const steps = useSidebar((state) => state.steps);

  const handleConfirm = () => {
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Plan: ", plan);
    console.log("Billing plan: ", billingPlan);
    console.log("Add-ons: ", addons);
    console.log("Total: ", total);
    setConfirm(true);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
      <section className="flex w-[860px] p-4 rounded-md bg-white shadow-md">
        <Sidebar selectedStepOption={selectedStepOption} steps={steps} />
        {confirm ? (
          <div className="flex flex-1 flex-col h-[568px] justify-center items-center p-4">
            <div className="w-full px-12 py-4">
              <div className="flex flex-col items-center gap-4">
                <img src={checkMark} alt="Check mark" />
                <h1 className="text-3xl font-bold text-blue-950">Thank you!</h1>
                <p className="text-gray-400 text-center text-sm">
                  Thanks for confirming your subscription! We hope you have fun
                  using our plataform. If you ever need support, please feel
                  free to email us at support@loremgaming.com.
                </p>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </section>
    </div>
  );
}

export default App;
