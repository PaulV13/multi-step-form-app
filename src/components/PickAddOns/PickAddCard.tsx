import { AddOns, usePickAddOns } from "../../stores/storePickAddOns";
import { useSelectPlan } from "../../stores/storeSelectPlan";

function PickAddCard({
  addOns,
  selected,
}: {
  addOns: AddOns;
  selected: boolean;
}) {
  const { id, name, description, price } = addOns;

  const billingPlan = useSelectPlan((state) => state.billingPlan);
  const addPickAddOn = usePickAddOns((state) => state.setAddOns);
  const deleteAddOn = usePickAddOns((state) => state.deleteAddOns);

  const pickAddOnSelected = () => {
    const newAddOns: AddOns = {
      id: id,
      name: name,
      description: description,
      price: billingPlan === "Monthly" ? price : price * 10,
    };

    if (!selected) {
      addPickAddOn(newAddOns);
    } else {
      deleteAddOn(addOns);
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-md border border-blue-900 p-2 ${
        selected ? "bg-blue-50" : "bg-transparent"
      } cursor-pointer md:p-4`}
      onClick={pickAddOnSelected}
    >
      <input
        id={id.toString()}
        type="checkbox"
        checked={selected}
        readOnly
        className="z-20 h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <div className="flex-1">
        <h3 className="font-bold text-blue-950">{name}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <p className="text-xs font-semibold text-purple-800">
        +${billingPlan === "Monthly" ? price : price * 10}
        {billingPlan === "Monthly" ? "/mo" : "/yr"}
      </p>
    </div>
  );
}

export default PickAddCard;
