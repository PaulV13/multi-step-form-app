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
    <div className="flex justify-center rounded-md bg-blue-50 p-4">
      <label className="flex cursor-pointer items-center justify-center">
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
          className="peer sr-only"
          id="billing"
          name="billing"
        />
        <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-950"></div>
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
