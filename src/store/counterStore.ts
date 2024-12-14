import { create } from "zustand";

interface ICounterStore {
  counter: number;
  increment : ()=> void;
  decrement : ()=> void;
  reset : ()=> void;
}
export const useCounterStore = create<ICounterStore>((set) => ({
  counter: 0,

  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0 }),
}));
