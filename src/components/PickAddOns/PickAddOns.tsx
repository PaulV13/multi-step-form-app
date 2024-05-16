import { AddOns, usePickAddOns } from "../../stores/storePickAddOns";
import PickAddCard from "./PickAddCard";

function PickAddOns() {
  const addons = usePickAddOns((state) => state.addOns);
  const selectedAddons = usePickAddOns((state) => state.selectedAddOns);

  return (
    <section className="flex flex-col gap-3 md:mx-8">
      <h2 className="font-bold text-blue-950 text-2xl">Pick add-ons</h2>
      <p className="text-gray-400">
        Add-ons help enhance your gaming expirience.
      </p>
      <section className="flex flex-col gap-3 md:gap-4">
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
    </section>
  );
}

export default PickAddOns;
