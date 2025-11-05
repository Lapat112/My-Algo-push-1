import { create } from 'zustand'

export const usePostStore = create((set) => ({
  head: '',
  detail: '',
  setHead: (head) => set({ head }),
  setDetail: (detail) => set({ detail }),
}))
