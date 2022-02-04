<template>
    <v-card elevation="5" @click="navigateToCode()">
        <!--v-hover v-slot="{ hover }"-->
        <v-card-text class="about-card-content">
            <v-row no-gutters>
                <v-col>
                    <v-row>
                        <v-col class="about-card-title">Code</v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col class="about-card-subtitle text-center code-subtitle">
                                    I write code using these languages and tools
                                </v-col>
                            </v-row>
                            <v-row class="language-row" justify="space-between" align="center">
                                <v-col class="language-col" v-for="logo in languageAndToolLogos" :key="logo.name">
                                    <v-img
                                        :src="codeLogosPaths + logo.filename"
                                        contain
                                        aspect-ratio="1"
                                        max-height="7vh"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-row>
                                <v-col class="about-card-subtitle text-center code-subtitle"
                                    >For these cool companies</v-col
                                >
                            </v-row>
                            <v-row class="work-row" justify="space-around" align="top">
                                <v-col
                                    v-for="logo in workLogos"
                                    :key="logo.name"
                                    :cols="5"
                                    :class="{ 'get-well': logo.name === 'GetWell' }"
                                >
                                    <v-img
                                        :src="codeLogosPaths + logo.filename"
                                        contain
                                        aspect-ratio="1"
                                        max-height="8vh"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row>
                                <v-col class="about-card-subtitle text-center code-subtitle"
                                    >And for my own projects</v-col
                                >
                            </v-row>
                            <v-row justify="center" align="top">
                                <v-col v-for="logo in projectLogos" :key="logo.name" :cols="4">
                                    <v-img
                                        :src="codeLogosPaths + logo.filename"
                                        contain
                                        aspect-ratio="1"
                                        max-height="9vh"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
        <!--/v-hover-->
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

.code-subtitle {
    font-size: 1.4em;
}

.language-row {
    padding: 0 3;
}

.work-row {
    padding: 0 1vw;
}

.get-well {
    padding-top: 2.25vh;
}
</style>
