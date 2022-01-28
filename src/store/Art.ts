export default {
    state: () => ({
        selectedTags: [] as string[],
    }),
    mutations: {
        selectTag(state: any, tag: string) {
            state.selectedTags.push
        },
    },
    actions: {
        isScrollNavigationEnabled: (state: any) => {
            return state.isScrollNavigationEnabled;
        },
    },
};
