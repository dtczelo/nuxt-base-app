import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
        name: "Eduardo",
    }),
    getters: {
        doubleCount: ({ count }) => count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
        // async fetchCustomers(): Promise<void> {
        //     const promise: Promise<Customer[]> = new Promise((resolve) => {
        //       resolve([
        //         {
        //           id: '1',
        //           fullName: 'John Doe',
        //           isActive: false,
        //           totalSpending: 3000,
        //         },
        //         {
        //           id: '2',
        //           fullName: 'Jane Doe',
        //           isActive: true,
        //           totalSpending: 5000,
        //         },
        //       ])
        //     })

        //     this.customers = await promise
        //   },
    },
});
