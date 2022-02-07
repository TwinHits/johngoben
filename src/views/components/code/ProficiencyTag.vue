<template>
    <v-chip class="proficiency-tag" :color="backgroundColor" label text-color="#ECEFF1">
        <span class="proficiency-tag-label">
            {{ proficiencyName }}
        </span>
    </v-chip>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Proficiency } from '@/common/types/code';

const PROFICIENCY_NAMES_BY_PROFICIENCY = {} as Record<Proficiency, string>;
PROFICIENCY_NAMES_BY_PROFICIENCY[Proficiency.Familiar] = 'Familiar';
PROFICIENCY_NAMES_BY_PROFICIENCY[Proficiency.Proficient] = 'Proficient';
PROFICIENCY_NAMES_BY_PROFICIENCY[Proficiency.Excellent] = 'Excellent';
PROFICIENCY_NAMES_BY_PROFICIENCY[Proficiency.Expert] = 'Expert';

const PROFICIENCY_COLORS_BY_PROFICIENCY = {} as Record<Proficiency, string>;
PROFICIENCY_COLORS_BY_PROFICIENCY[Proficiency.Familiar] = '#607D8B';
PROFICIENCY_COLORS_BY_PROFICIENCY[Proficiency.Proficient] = '#546E7A';
PROFICIENCY_COLORS_BY_PROFICIENCY[Proficiency.Excellent] = '#455A64';
PROFICIENCY_COLORS_BY_PROFICIENCY[Proficiency.Expert] = '#37474F';

export default Vue.extend({
    props: {
        content: {
            type: Number as PropType<Proficiency>,
            required: true,
        },
    },
    data() {
        return {
            proficiencyNamesByProficiency: {} as Record<Proficiency, string>,
        };
    },
    computed: {
        proficiencyName(): string {
            return PROFICIENCY_NAMES_BY_PROFICIENCY[this.content];
        },
        backgroundColor(): string {
            return PROFICIENCY_COLORS_BY_PROFICIENCY[this.content];
        },
    },
});
</script>

<style scoped>
.proficiency-tag {
    width: 100%;
    justify-content: center;
}

.proficiency-tag-label {
    padding: 0vh 0.25vw;
}
</style>
