import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = create<Store>()(
  persist(
    (set) => ({
      count: 1,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    { name: "app-storage" }
  )
);
















/*
    Without persist
*/

// import { create } from "zustand";
// type Store = {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// };

// export const useCounter = create<Store>()((set) => ({
//   count: 1,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));
