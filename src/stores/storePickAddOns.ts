import { create } from "zustand";

export type AddOns = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type StatePickAddOns = {
  addOns: AddOns[];
  selectedAddOns: AddOns[];
};

type ActionsPickAddOns = {
  setAddOns: (payload: AddOns) => void;
  deleteAddOns: (payload: AddOns) => void;
  updatePriceAddOns: (checked: boolean) => void;
};

const addOns: AddOns[] = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    id: 2,
    name: "Large storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export const usePickAddOns = create<StatePickAddOns & ActionsPickAddOns>(
  (set) => ({
    addOns: addOns,
    selectedAddOns: [],
    setAddOns: (payload: AddOns) =>
      set((state) => ({ selectedAddOns: [...state.selectedAddOns, payload] })),
    deleteAddOns: (payload: AddOns) =>
      set((state) => ({
        selectedAddOns: state.selectedAddOns.filter(
          (addOn) => addOn.id !== payload.id,
        ),
      })),
    updatePriceAddOns: (checked: boolean) =>
      set((state) => ({
        selectedAddOns: state.selectedAddOns.map((addOn) => ({
          ...addOn,
          price: checked ? addOn.price * 10 : addOn.price / 10,
        })),
      })),
  }),
);
