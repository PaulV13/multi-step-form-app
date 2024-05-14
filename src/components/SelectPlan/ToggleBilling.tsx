import { usePickAddOns } from "../../stores/storePickAddOns";

type ToggleBillingProps = {
  billing: string;
  setBilling: (checked: boolean) => void;
};

function ToggleBilling({ setBilling, billing }: ToggleBillingProps) {
  const updatePriceAddOns = usePickAddOns((state) => state.updatePriceAddOns);

  const onBilling = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBilling(true);
      updatePriceAddOns(true);
    } else {
      setBilling(false);
      updatePriceAddOns(false);
    }
  };

  return (
    <div className="flex justify-center p-4 bg-blue-50 rounded-md">
      <label className="flex items-center justify-center cursor-pointer">
        <span
          className={`me-6 text-sm font-semibold
           ${billing === "Monthly" ? "text-blue-900" : "dark:text-gray-400"}`}
        >
          Monthly
        </span>
        <input
          checked={billing === "Yearly" ? true : false}
          onChange={(e) => onBilling(e)}
          type="checkbox"
          className="sr-only peer"
          id="billing"
          name="billing"
        />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-950 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
        <span
          className={`ms-6 text-sm font-semibold
         ${billing === "Yearly" ? "text-blue-900" : "dark:text-gray-400"}`}
        >
          Yearly
        </span>
      </label>
    </div>
  );
}

export default ToggleBilling;
