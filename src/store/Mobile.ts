export default {
    state: () => ({
        isMobile: false,
    }),
    mutations: {
        setMobile(state: any, isMobile: boolean) {
            state.isMobile = isMobile;
        },
    },
    getters: {
        isMobile: (state: any) => {
            return state.isMobile;
        },
    },
};
