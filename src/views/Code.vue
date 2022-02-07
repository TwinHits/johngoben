<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Professional Experience</span>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <v-slide-group>
                    <v-slide-item class="code-slide-item" v-for="(workDescription, index) in work" :key="index">
                        <Transition name="fade-in" mode="out-in" appear>
                            <CodeCard :content="workDescription" />
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
        <v-row no-gutters>
            <v-col>
                <v-slide-group>
                    <v-slide-item class="code-slide-item" v-for="(projectDescription, index) in projects" :key="index">
                        <Transition name="fade-in" mode="out-in" appear>
                            <CodeCard :content="projectDescription" />
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
            <v-col cols="4" class="info-col info-col-left">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">Languages</v-card-title>
                        <v-card-text class="code-card-text">Content</v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="4" class="info-col">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">Libraries, Frameworks, and Tools</v-card-title>
                        <v-card-text class="code-card-text">Content</v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="4" class="info-col info-col-right">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">Other Expertise</v-card-title>
                        <v-card-text class="code-card-text">Content</v-card-text>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Code from '@/common/constants/code';

import { CodeCardItem } from '@/common/types/code';

import CodeCard from '@/views/components/code/CodeCard.vue';

export default Vue.extend({
    components: {
        CodeCard,
    },
    data() {
        return {
            work: Code.WORK_DESCRIPTIONS as CodeCardItem[],
            projects: Code.PROJECT_DESCRIPTIONS as CodeCardItem[],
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

.code-slide-item {
    margin: 0 1vw;
    width: 36vw;
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
    height: 33vh;
    background: $foreground;
}
</style>
