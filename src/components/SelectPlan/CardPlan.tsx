import { CardPlanType, useSelectPlan } from "../../stores/storeSelectPlan";

function CardPlan({ plan }: { plan: CardPlanType }) {
  const { id, title, price, logo } = plan;

  const setSelectedPlan = useSelectPlan((state) => state.setSelectedPlan);
  const selectedPlan = useSelectPlan((state) => state.selectedPlan);
  const billing = useSelectPlan((state) => state.billingPlan);

  const onSelectPlan = (plan: CardPlanType) => {
    if (billing === "Yearly") {
      const newPlan = {
        ...plan,
        price: plan.price * 10,
        monthFree: 2,
      };
      setSelectedPlan(newPlan);
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <div
      onClick={() => onSelectPlan(plan)}
      className={`flex gap-3 ${
        selectedPlan.id == id
          ? "border-blue-800 bg-blue-50"
          : "border-gray-300 bg-transparent"
      } rounded-md border p-2 md:flex-1 md:flex-col md:gap-8 md:p-4`}
    >
      <img src={logo} className="md:w-[32px]" />

      <div>
        <h2 className="font-bold text-blue-900">{title}</h2>
        <p className="text-gray-400">
          ${billing === "Monthly" ? price + "/mo" : price * 10 + "/yr"}
        </p>
        {billing === "Yearly" && (
          <p className="text-[10px] font-bold text-blue-800">2 months free</p>
        )}
      </div>
    </div>
  );
}

export default CardPlan;
