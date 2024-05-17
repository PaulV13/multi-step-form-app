import CardPlan from "./CardPlan";
import ToggleBilling from "./ToggleBilling";
import { useSelectPlan } from "../../stores/storeSelectPlan";

function SelectPlan() {
  const plans = useSelectPlan((state) => state.plans);

  return (
    <>
      <section className="flex flex-col gap-4 md:gap-8">
        <div>
          <h2 className="text-3xl font-bold text-blue-950">Select your plan</h2>
          <p className="my-1 text-gray-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <section className="flex flex-col justify-between gap-3 md:flex-row md:gap-6">
          {plans.map((plan) => (
            <CardPlan key={plan.id} plan={plan} />
          ))}
        </section>
        <ToggleBilling />
      </section>
    </>
  );
}

export default SelectPlan;
