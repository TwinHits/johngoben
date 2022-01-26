export default {
    state: () => ({ 
        isScrollNavigationEnabled: true as boolean,
    }),
    mutations: { 
        setScrollNavigationEnabled (state: any, enabled: boolean) {
            state.isScrollNavigationEnabled = enabled;
          }
    },
    actions: { 
        isScrollNavigationEnabled: (state: any) => {
            return state.isScrollNavigationEnabled;
          }
    }
}
  