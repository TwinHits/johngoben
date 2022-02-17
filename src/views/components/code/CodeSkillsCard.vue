<template>
    <v-card elevation="5">
        <v-card-title class="code-card-title">{{ content.title }}</v-card-title>
        <v-card-text class="code-card-subtitle">
            <v-row class="skill-row" v-for="skill in sortedSkills" :key="skill.name" align="center" no-gutters>
                <v-col :cols="9">
                    {{ skill.name }}
                </v-col>
                <v-col :cols="3" class="text-center">
                    <ProficiencyTag :content="skill.proficiency" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { CodeSkill, CodeSkillsItem } from '@/common/types/code';

import ProficiencyTag from '@/views/components/code/ProficiencyTag.vue';

export default Vue.extend({
    components: {
        ProficiencyTag,
    },
    props: {
        content: {
            type: Object as PropType<CodeSkillsItem>,
            required: true,
        },
    },
    computed: {
        sortedSkills(): CodeSkill[] {
            // Use filter to create a copy of the array
            return this.content.skills
                .filter(() => true)
                .sort((rhs, lhs) => (rhs.proficiency < lhs.proficiency ? 1 : -1));
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Links.scss';

.code-logo-img {
    height: 5vh;
}

.code-card-title {
    font-weight: bold;
    font-size: 1.6em;
}

.code-card-subtitle {
    font-weight: bold;
    font-size: 1.1em;
}

.code-card-text {
    font-size: 1em;
}

.skill-row {
    padding-bottom: 1vh;
}
</style>
