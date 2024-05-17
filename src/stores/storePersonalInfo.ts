import { create } from "zustand";

export type StatePersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

type ActionsPersonalInfo = {
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
  updatePhone: (phone: string) => void;
};

export const usePersonalInfo = create<StatePersonalInfo & ActionsPersonalInfo>(
  (set) => ({
    name: "",
    email: "",
    phone: "",
    updateName: (name: string) => set(() => ({ name })),
    updateEmail: (email: string) => set(() => ({ email })),
    updatePhone: (phone: string) => set(() => ({ phone })),
  }),
);
