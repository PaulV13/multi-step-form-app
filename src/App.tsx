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
import Button from "./components/Button/Button";

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
    <div className="h-screen w-screen bg-slate-400 md:flex md:items-center md:justify-center">
      <img
        src={bgMobile}
        alt="Check mark"
        className="absolute top-0 z-10 w-full md:hidden"
      />
      <section className="relative z-20 h-full md:flex md:h-[580px] md:w-[60%] md:max-w-[860px] md:rounded-md md:bg-white md:p-4">
        <Sidebar selectedStepOption={selectedStepOption} steps={steps} />
        <div
          className={`mx-4 rounded-md bg-white px-6 py-6 md:flex md:flex-1 md:flex-col ${
            confirm ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex flex-col rounded-md bg-white">
            {confirm ? (
              <Confirm checkMark={checkMark} />
            ) : (
              showStep(selectedStepOption)
            )}
          </div>
          {confirm ? null : (
            <footer
              className={`absolute bottom-0 left-0 flex w-full justify-between bg-white p-4 md:relative md:p-0 ${selectedStepOption > 1 ? "block" : "hidden"}`}
            >
              <Button
                title="Go Back"
                styles={`w-24 px-4 py-2 text-sm font-bold text-gray-400 hover:text-blue-800 ${selectedStepOption > 1 ? "visible" : "invisible"}`}
                handleAction={handleBackStep}
              />
              {selectedStepOption === steps.length ? (
                <Button
                  title="Confirm"
                  styles="w-24 rounded-md bg-blue-700 px-4 py-2 text-sm text-gray-200 hover:bg-purple-500"
                  handleAction={handleConfirm}
                />
              ) : (
                <Button
                  title="Next Step"
                  styles="w-24 rounded-md bg-blue-950 px-4 py-2 text-sm text-gray-200 hover:bg-blue-800"
                  handleAction={handleNextStep}
                />
              )}
            </footer>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
