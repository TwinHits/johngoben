<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Professional Experience</span>
            </v-col>
        </v-row>
        <v-row no-gutters justify="space-around">
            <v-col cols="5">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">
                            <v-row no-gutters justify="space-between">
                                <v-col md="auto"> RightEye, LLC </v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="code-logo-img"
                                        :src="codeLogosPath + workLogos[1].filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-subtitle class="code-card-subtitle">
                            <v-row no-gutters justify="space-between">
                                <v-col md="auto"> Senior Software Engineer </v-col>
                                <v-col class="text-right" cols="6"> January, 2020 -> November, 2021 </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-card-text class="code-card-text">
                            <ul class="code-card-ul">
                                <li class="code-card-li">
                                    Designed, iterated, and then developed major product interface redesign with
                                    stakeholders
                                </li>
                                <li class="code-card-li">
                                    Migrated server log management to Datadog for better product analysis and
                                    troubleshooting
                                </li>
                                <li class="code-card-li">
                                    Rewrote development documentation and ‘Get Started’ materials for the full stack
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="5">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">
                            <v-row no-gutters justify="space-between" align="center">
                                <v-col md="auto"> GetWellNetwork, Inc </v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="code-logo-img"
                                        :src="codeLogosPath + workLogos[0].filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-subtitle class="code-card-subtitle">
                            <v-row no-gutters justify="space-between">
                                <v-col md="auto"> Software Engineer </v-col>
                                <v-col class="text-right" cols="6"> January, 2017 -> October, 2019 </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-card-text class="code-card-text">
                            <ul class="code-card-ul">
                                <li class="code-card-li">
                                    Implemented, and maintained RESTful internal tools and services based on rapidly
                                    evolving requirements
                                </li>
                                <li class="code-card-li">
                                    Implemented AWS Lambda serverless based central media management and storage system
                                </li>
                                <li class="code-card-li">
                                    Developed client contracted server upgrade and maintenance windows using Google
                                    Calendar API
                                </li>
                                <li class="code-card-li">
                                    Designed and implemented heuristic based custom project tracking tools for legacy
                                    projects
                                </li>
                                <li class="code-card-li">
                                    Modernized our development environment using Docker so new developers can get
                                    writing immediately
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <span class="code-header">Personal Projects</span>
            </v-col>
        </v-row>
        <v-row no-gutters justify="space-around">
            <v-col cols="5">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">
                            <v-row no-gutters justify="space-between" align="center">
                                <v-col md="auto">TIEngine</v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="code-logo-img"
                                        :src="codeLogosPath + projectLogos[0].filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col> </v-row
                        ></v-card-title>
                        <v-card-subtitle class="code-card-subtitle">
                            <v-row no-gutters justify="space-between">
                                <v-col md="auto">2D Game Engine</v-col>
                                <v-col class="text-right" cols="6">
                                    <a href="https://github.com/TwinHits/TIEngine">github.com/TwinHits/TIEngine</a>
                                </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="5">
                <Transition name="fade-in" mode="out-in" appear>
                    <v-card elevation="5" class="info-card">
                        <v-card-title class="code-card-title">
                            <v-row no-gutters justify="space-between" align="center">
                                <v-col md="auto">www.johngoben.com</v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="code-logo-img"
                                        :src="codeLogosPath + projectLogos[1].filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col> </v-row
                        ></v-card-title>
                        <v-card-subtitle class="code-card-subtitle">
                            <v-row no-gutters justify="space-between">
                                <v-col md="auto">Resume & Portfolio Website</v-col>
                                <v-col class="text-right" cols="6">
                                    <a href="https://github.com/TwinHits/TIEngine">github.com/TwinHits/johngoben</a>
                                </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-card-text class="code-card-text">Content</v-card-text>
                    </v-card>
                </Transition>
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

export default Vue.extend({
    data() {
        return {
            codeLogosPath: Code.CODE_LOGOS_PATH,
            workLogos: Code.WORK_LOGOS,
            projectLogos: Code.PROJECT_LOGOS,
        };
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Transitions.scss';
@import '@/style/Links.scss';

.code-header {
    font-size: 2.7em;
    padding-left: 1vw;
    transition: font-size 0.7s, padding-left 0.7s;
    color: $text-light;
    text-shadow: 2px 2px 8px $text-dark;
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
</style>
