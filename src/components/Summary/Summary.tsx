import { useEffect } from "react";
import { usePickAddOns } from "../../stores/storePickAddOns";
import { useSelectPlan } from "../../stores/storeSelectPlan";
import { useSummary } from "../../stores/storeSummary";

function Summary() {
  const billing = useSelectPlan((state) => state.billingPlan);
  const selectedAddOns = usePickAddOns((state) => state.selectedAddOns);
  const plan = useSelectPlan((state) => state.selectedPlan);
  const setTotal = useSummary((state) => state.setTotal);

  const total = selectedAddOns.reduce(
    (acc, addOn) => acc + addOn.price,
    plan.price
  );

  useEffect(() => setTotal(total), [total, setTotal]);

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-blue-950 text-3xl">Finishing up</h2>
        <p className="text-gray-400 text-sm my-1">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div>
        <section className="flex flex-col rounded-md bg-blue-50 p-4">
          <div className="flex justify-between items-center px-4">
            <div>
              <h3 className="font-bold text-blue-900 text-sm">{plan.title}</h3>
              <p className="font-medium text-gray-400 hover:text-purple-400 text-xs underline cursor-pointer">
                Change
              </p>
            </div>
            <p className="text-xs font-bold text-blue-950">
              ${plan.price}
              {billing === "Monthly" ? "/mo" : "/yr"}
            </p>
          </div>
          <hr className="border-t border-gray-200 mx-4 my-4" />
          <div className="flex flex-col gap-2">
            {selectedAddOns.map((addOn) => (
              <div
                key={addOn.id}
                className="flex justify-between items-center px-4 "
              >
                <h3 className="font-medium text-gray-400 text-xs">
                  {addOn.name}
                </h3>
                <p className="text-blue-900 font-bold text-xs">
                  +${addOn.price} {billing === "Monthly" ? "/mo" : "/yr"}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="flex justify-between gap-4 mx-8">
        <h3 className="font-medium text-gray-400 text-xs">Total (per month)</h3>
        <p className="font-bold text-blue-700 text-sm">
          +${total}
          {billing === "Monthly" ? "/mo" : "/yr"}
        </p>
      </section>
    </section>
  );
}

export default Summary;
