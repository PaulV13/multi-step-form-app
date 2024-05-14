import { usePickAddOns } from "../../stores/storePickAddOns";
import { useSelectPlan } from "../../stores/storeSelectPlan";

function useTotalSuscription() {
  const selectedAddOns = usePickAddOns((state) => state.selectedAddOns);
  const plan = useSelectPlan((state) => state.selectedPlan);

  const total = selectedAddOns.reduce((acc, addOn) => {
    return acc + addOn.price;
  }, plan.price);

  return total;
}

export default useTotalSuscription;
