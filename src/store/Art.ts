export default {
    state: () => ({
        selectedTags: [] as string[],
    }),
    mutations: {
        selectTag(state: any, tag: string) {
            if (state.selectedTags.includes(tag)) {
                state.selectedTags = state.selectedTags.filter((t: string) => t !== tag);
            } else {
                state.selectedTags.push(tag);
            }
        },
    },
    getters: {
        selectedTags: (state: any) => {
            return state.selectedTags;
        },
        isTagSelected: (state: any) => (tag: string) => {
            return state.selectedTags.includes(tag);
        },
    },
};
