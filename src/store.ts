import { create } from 'zustand';

import type { PostType } from './types';

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  mode: 'counter' | 'test';
};

const useStore = create<Store>((set) => ({
  count: 0,
  mode: 'counter',
  increment: () => set((state: Store) => ({ count: state.count + 1 })),
  decrement: () => set((state: Store) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
