import { create } from "zustand";


export const useCard = create((set) => ({
    buyCarts: [],
    data: [],
    fetchData: async (url) => {
        const res = await fetch(url)
        const result = await res.json()
        set({ data: result })
    },
    addToShop: (item) => set((state) => ({buyCarts:[...state.buyCarts, item]})),
    removeFromShop:(item) => set((state)=>({buyCarts:state.buyCarts.filter((product)=>product.id !== item.id)})),
    clearBuyCarts:()=>set({buyCarts:[]})
}))