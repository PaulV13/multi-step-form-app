import { create } from "zustand";
import logoArcade from "../assets/images/icon-arcade.svg";
import logoAdvanced from "../assets/images/icon-advanced.svg";
import logoPro from "../assets/images/icon-pro.svg";

export type CardPlanType = {
  id: number;
  title: string;
  price: number;
  logo: string;
  monthFree: number;
};

const plans: CardPlanType[] = [
  { id: 1, title: "Arcade", price: 9, logo: logoArcade, monthFree: 0 },
  { id: 2, title: "Advanced", price: 12, logo: logoAdvanced, monthFree: 0 },
  { id: 3, title: "Pro", price: 15, logo: logoPro, monthFree: 0 },
];

type StateSelectPlan = {
  plans: CardPlanType[];
  selectedPlan: CardPlanType;
  billingPlan: "Monthly" | "Yearly";
};

type ActionsSelectPlan = {
  setSelectedPlan: (plan: CardPlanType) => void;
  setBillingPlan: (toggle: "Monthly" | "Yearly") => void;
};

export const useSelectPlan = create<StateSelectPlan & ActionsSelectPlan>(
  (set) => ({
    plans: plans,
    selectedPlan: {
      id: 1,
      title: "Arcade",
      price: 9,
      logo: logoArcade,
      monthFree: 0,
    },
    billingPlan: "Monthly",
    setSelectedPlan: (plan) => set(() => ({ selectedPlan: plan })),
    setBillingPlan: (billing) => set(() => ({ billingPlan: billing })),
  }),
);
