import { AddOns, usePickAddOns } from "../../stores/storePickAddOns";
import PickAddCard from "./PickAddCard";

function PickAddOns() {
  const addons = usePickAddOns((state) => state.addOns);
  const selectedAddons = usePickAddOns((state) => state.selectedAddOns);

  return (
    <div>
      <h2 className="font-bold text-blue-950 text-3xl">Pick add-ons</h2>
      <p className="text-gray-400 text-sm my-1">
        Add-ons help enhance your gaming expirience.
      </p>
      <section className="flex flex-col gap-4">
        {addons.map((addon: AddOns) => (
          <PickAddCard
            key={addon.id}
            addOns={addon}
            selected={selectedAddons.some(
              (selected) => selected.id === addon.id
            )}
          />
        ))}
      </section>
    </div>
  );
}

export default PickAddOns;
