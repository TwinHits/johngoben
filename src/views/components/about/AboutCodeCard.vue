<template>
    <v-card elevation="5" @click="navigateToCode()">
        <v-card-text class="about-card-content">
            <v-row no-gutters>
                <v-col>
                    <v-row>
                        <v-col class="about-card-title">Code</v-col>
                    </v-row>
                    <v-row no-gutter>
                        <v-col>
                            <v-row no-gutters>
                                <v-col class="about-card-subtitle text-center code-subtitle">
                                    I write code using these languages and tools
                                </v-col>
                            </v-row>
                            <v-row class="language-row" justify="space-between" align="center">
                                <v-col class="language-col" v-for="logo in languageAndToolLogos" :key="logo.name">
                                    <v-row no-gutters>
                                        <v-col>
                                            <v-img
                                                class="logo-img"
                                                :src="codeLogosPaths + logo.filename"
                                                contain
                                                aspect-ratio="1"
                                            />
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <v-col class="about-card-subtitle text-center code-subtitle"
                                    >For these cool companies</v-col
                                >
                            </v-row>
                            <v-row class="work-row" justify="center" align="center">
                                <v-col
                                    v-for="logo in workLogos"
                                    :key="logo.name"
                                    :cols="6"
                                    :class="{ 'get-well': logo.name === 'GetWellNetwork, Inc' }"
                                >
                                    <v-img
                                        class="logo-img"
                                        :src="codeLogosPaths + logo.filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row no-gutters>
                                <v-col class="about-card-subtitle text-center code-subtitle"
                                    >And for my own projects</v-col
                                >
                            </v-row>
                            <v-row class="work-row" justify="center" align="center">
                                <v-col v-for="logo in projectLogos" :key="logo.name" :cols="4">
                                    <v-img
                                        class="logo-img"
                                        :src="codeLogosPaths + logo.filename"
                                        contain
                                        aspect-ratio="1"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import { CodeLogo } from '@/common/types/code';

import * as Code from '@/common/constants/code';

export default Vue.extend({
    data() {
        return {
            codeLogosPaths: Code.CODE_LOGOS_PATH as string,
            languageLogos: Code.LANGUAGE_LOGOS as CodeLogo[],
            toolLogos: Code.TOOL_LOGOS as CodeLogo[],
            workLogos: Code.WORK_LOGOS as CodeLogo[],
            projectLogos: Code.PROJECT_LOGOS as CodeLogo[],
        };
    },
    computed: {
        languageAndToolLogos(): CodeLogo[] {
            return this.languageLogos.concat(this.toolLogos);
        },
        isMobile(): boolean {
            return this.$store.getters.isMobile;
        },
    },
    methods: {
        navigateToCode() {
            this.$router.push('Code');
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/components/AboutCard.scss';

.logo-img {
    max-height: 9vh;
}

.language-row {
    padding: 0 3vw;
    margin-top: 1vh;
    margin-bottom: 2vh;
}

.work-row {
    padding: 0 1vw;
}

.get-well {
    padding-top: 2.5vh;
}
</style>
