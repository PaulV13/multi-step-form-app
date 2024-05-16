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
import Confirm from "./components/Confirm/Confirm";

import bgMobile from "./assets/images/bg-sidebar-mobile.svg";
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
    <div className="w-screen h-screen bg-slate-400 md:flex md:justify-center md:items-center">
      <img
        src={bgMobile}
        alt="Check mark"
        className="absolute w-full top-0 z-10 md:hidden"
      />
      <section className="relative h-full z-20 md:flex md:bg-white md:rounded-md md:p-4 md:h-[580px] md:w-[60%] md:max-w-[860px]">
        <Sidebar selectedStepOption={selectedStepOption} steps={steps} />
        <div
          className={`rounded-md bg-white py-6 px-6 mx-4 md:flex-1 md:flex md:flex-col ${
            confirm ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex flex-col bg-white rounded-md">
            {confirm ? (
              <Confirm checkMark={checkMark} />
            ) : (
              showStep(selectedStepOption)
            )}
          </div>
          {confirm ? null : (
            <footer className="absolute bottom-0 left-0 w-full flex justify-between p-4 bg-white md:relative md:p-0">
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
            </footer>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
