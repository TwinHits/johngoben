export default {
    state: () =>
        ({
            isScrollNavigationEnabled: true as boolean,
        } as Record<string, boolean>),
    mutations: {
        setScrollNavigationEnabled(state: Record<string, boolean>, enabled: boolean): void {
            state.isScrollNavigationEnabled = enabled;
        },
    },
    actions: {
        isScrollNavigationEnabled: (state: Record<string, boolean>): boolean => {
            return state.isScrollNavigationEnabled;
        },
    },
};
