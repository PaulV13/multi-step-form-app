import { create } from "zustand";

type StateSummary = {
  total: number;
};

type ActionSummary = {
  setTotal: (payload: number) => void;
};

export const useSummary = create<StateSummary & ActionSummary>((set) => ({
  total: 0,
  setTotal: (payload: number) => set({ total: payload }),
}));
