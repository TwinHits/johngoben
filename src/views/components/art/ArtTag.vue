<template>
    <v-chip
        class="art-tag"
        color="#607D8B"
        label
        text-color="#ECEFF1"
        @click="selectTag(content)"
        :class="{ 'art-tag-disabled': inactive }"
    >
        <span class="art-tag-label">
            {{ content }}
        </span>
    </v-chip>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        content: {
            type: String,
            required: true,
        },
    },
    computed: {
        inactive(): boolean {
            let thereAreTags = this.$store.getters.selectedTags.length;
            if (thereAreTags) {
                return !this.$store.getters.isTagSelected(this.content);
            } else {
                return false;
            }
        },
    },
    methods: {
        selectTag(tag: string) {
            this.$store.commit('selectTag', tag);
        },
    },
});
</script>

<style scoped>
.art-tag-label {
    padding: 0vh 0.25vw;
    font-size: 1.6vh;
}

.art-tag-disabled {
    opacity: 50%;
}

@media only screen and (max-width: 768px) {
    .art-tag-label {
        padding: 0vh 2vw;
        font-size: 1.6vh;
    }
}
</style>
