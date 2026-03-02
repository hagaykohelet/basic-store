import { create } from "zustand";


export const useCard = create((set) => ({
    totalPrice: 0,
    totalItems: 0,
    buyCarts: [],
    data: [],
    count: 0,
    fetchData: async (url) => {
        const res = await fetch(url)
        const result = await res.json()
        set({ data: result })
    },
    incCount: () => set((state) => ({ count: state.count + 1 })),
    decCount: () => set((state) => ({ count: state.count - 1 })),
    addToShop: (item) => set((state) => ({buyCarts:[...state.buyCarts, item]})),
    
}))