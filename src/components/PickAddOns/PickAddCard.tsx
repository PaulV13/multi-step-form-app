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

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddOns: AddOns = {
      id: id,
      name: name,
      description: description,
      price: billingPlan === "Monthly" ? price : price * 10,
    };

    if (e.target.checked === false) {
      deleteAddOn(newAddOns);
    } else {
      addPickAddOn(newAddOns);
    }
  };

  return (
    <div
      className={`flex justify-between items-center gap-4 border border-blue-900 rounded-md p-2 ${
        selected ? "bg-blue-50" : "bg-transparent"
      }`}
    >
      <input
        onChange={(e) => handleChecked(e)}
        id={id.toString()}
        type="checkbox"
        checked={selected}
        className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="ml-2 flex-1">
        <h3 className="font-bold text-blue-950 text-lg">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <p className="text-gray-400 text-sm">
        +${billingPlan === "Monthly" ? price : price * 10}
        {billingPlan === "Monthly" ? "/mo" : "/yr"}
      </p>
    </div>
  );
}

export default PickAddCard;
