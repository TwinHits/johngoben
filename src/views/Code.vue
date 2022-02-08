<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Professional Experience</span>
            </v-col>
        </v-row>
        <v-row class="code-card-row" no-gutters>
            <v-col>
                <v-slide-group class="code-card-slide-group">
                    <template v-slot:next>
                        <v-icon :size="'8vh'">mdi-chevron-right</v-icon>
                    </template>
                    <template v-slot:prev>
                        <v-icon :size="'8vh'">mdi-chevron-left</v-icon>
                    </template>
                    <v-slide-item class="code-slide-item" v-for="(workDescription, index) in work" :key="index">
                        <Transition name="fade-in" mode="out-in" appear>
                            <CodeCard :content="workDescription" class="info-card" />
                        </Transition>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Personal Projects</span>
            </v-col>
        </v-row>
        <v-row class="code-card-row" no-gutters>
            <v-col>
                <v-slide-group class="code-card-slide-group">
                    <template v-slot:next>
                        <v-icon :size="'8vh'">mdi-chevron-right</v-icon>
                    </template>
                    <template v-slot:prev>
                        <v-icon :size="'8vh'">mdi-chevron-left</v-icon>
                    </template>
                    <v-slide-item class="code-slide-item" v-for="(projectDescription, index) in projects" :key="index">
                        <Transition name="fade-in" mode="out-in" appear>
                            <CodeCard :content="projectDescription" class="info-card" />
                        </Transition>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Skills & Expertise</span>
            </v-col>
        </v-row>
        <v-row no-gutters justify="space-around">
            <v-col v-for="(skill, index) in skills" :key="index" cols="4" class="info-col info-col-left">
                <Transition name="fade-in" mode="out-in" appear>
                    <CodeSkillsCard :content="skill" class="info-card" />
                </Transition>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Code from '@/common/constants/code';

import { CodeCardItem, CodeSkillsItem } from '@/common/types/code';

import CodeCard from '@/views/components/code/CodeCard.vue';
import CodeSkillsCard from '@/views/components/code/CodeSkillsCard.vue';

export default Vue.extend({
    components: {
        CodeCard,
        CodeSkillsCard,
    },
    data() {
        return {
            work: Code.WORK_DESCRIPTIONS as CodeCardItem[],
            projects: Code.PROJECT_DESCRIPTIONS as CodeCardItem[],
            skills: Code.SKILL_DESCRIPTIONS as CodeSkillsItem[],
        };
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Transitions.scss';

.code-header {
    font-size: 2.7em;
    padding-left: 1vw;
    transition: font-size 0.7s, padding-left 0.7s;
    color: $text-light;
    text-shadow: 2px 2px 8px $text-dark;
}

.code-card-slide-group > .v-icon.v-icon {
    color: red !important;
}

.code-slide-item {
    margin: 0 1vw;
    width: 35vw;
}

.info-col {
    padding: 0 1vw;
    padding-bottom: 1vw;
}

.info-col-left {
    padding-left: 2vw;
}

.info-col-right {
    padding-right: 2vw;
}

.info-card {
    min-height: 33vh;
    background: $foreground;
}
</style>
