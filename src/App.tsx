import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import { usePersonalInfo } from "./store";
import "./index.css";

type SidebarOptionType = {
  number: number;
  title: string;
  option: string;
};

function App() {
  const name = usePersonalInfo((state) => state.name);
  const email = usePersonalInfo((state) => state.email);
  const phone = usePersonalInfo((state) => state.phone);

  console.log("Name: ", name);
  console.log("Email", email);
  console.log("Phone", phone);

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
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
      <section className="flex w-[860px] p-4 rounded-md bg-white shadow-md">
        <Sidebar selectedStepOption={selectedStepOption} steps={steps} />
        <div className="flex flex-1 flex-col justify-around items-center p-4">
          <PersonalInfo />
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
