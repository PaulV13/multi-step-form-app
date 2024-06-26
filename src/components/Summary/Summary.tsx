import { useEffect } from "react";
import { usePickAddOns } from "../../stores/storePickAddOns";
import { useSelectPlan } from "../../stores/storeSelectPlan";
import { useSummary } from "../../stores/storeSummary";
import { useSidebar } from "../../stores/storeSidebar";

function Summary() {
  const billing = useSelectPlan((state) => state.billingPlan);
  const selectedAddOns = usePickAddOns((state) => state.selectedAddOns);
  const plan = useSelectPlan((state) => state.selectedPlan);
  const setTotal = useSummary((state) => state.setTotal);
  const setStepOption = useSidebar((state) => state.handleSetStep);

  const total = selectedAddOns.reduce(
    (acc, addOn) => acc + addOn.price,
    plan.price,
  );

  useEffect(() => setTotal(total), [total, setTotal]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-blue-950">Finishing up</h2>
      <p className="text-gray-400">
        Double-check everything looks OK before confirming.
      </p>

      <section className="flex flex-col rounded-md bg-blue-50 p-4">
        <div className="flex items-center justify-between px-4">
          <div>
            <h3 className="font-bold text-blue-900">
              {plan.title} ({billing})
            </h3>
            <p
              onClick={() => setStepOption(2)}
              className="cursor-pointer text-gray-400 underline hover:text-purple-400"
            >
              Change
            </p>
          </div>
          <p className="font-bold text-blue-950">
            ${plan.price}
            {billing === "Monthly" ? "/mo" : "/yr"}
          </p>
        </div>
        <hr className="mx-4 my-4 border-t border-gray-200" />
        <div className="flex flex-col gap-2">
          {selectedAddOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex items-center justify-between px-4 "
            >
              <h3 className="text-gray-400">{addOn.name}</h3>
              <p className="font-semibold text-blue-900">
                +${addOn.price} {billing === "Monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-8 flex justify-between gap-4">
        <h3 className="text-gray-400">Total (per month)</h3>
        <p className="font-bold text-blue-700">
          +${total}
          {billing === "Monthly" ? "/mo" : "/yr"}
        </p>
      </section>
    </section>
  );
}

export default Summary;
