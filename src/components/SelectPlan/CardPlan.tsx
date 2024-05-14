import { CardPlanType, useSelectPlan } from "../../stores/storeSelectPlan";

function CardPlan({ plan }: { plan: CardPlanType }) {
  const { id, title, price, logo } = plan;

  const setSelectedPlan = useSelectPlan((state) => state.setSelectedPlan);
  const selectedPlan = useSelectPlan((state) => state.selectedPlan);
  const billing = useSelectPlan((state) => state.billingPlan);

  return (
    <div
      onClick={() => setSelectedPlan(plan)}
      className={`flex flex-col flex-1 gap-8 justify-between ${
        selectedPlan.id == id
          ? "bg-blue-50 border-blue-800"
          : "bg-transparent border-gray-300"
      } p-2 border-2 rounded-md`}
    >
      <div>
        <img width={24} height={24} src={logo} />
      </div>

      <div>
        <h2 className="text-xs text-blue-900 font-bold">{title}</h2>
        <p className="text-xs text-gray-400">
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
