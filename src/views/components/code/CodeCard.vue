<template>
    <v-card elevation="5">
        <v-card-title class="code-card-title">
            <v-row no-gutters justify="space-between" align="center">
                <v-col cols="6">{{ content.title }}</v-col>
                <v-col cols="2">
                    <v-img
                        class="code-logo-img"
                        :src="codeLogosPath + content.logo.filename"
                        contain
                        aspect-ratio="1"
                    />
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-subtitle class="code-card-subtitle">
            <v-row no-gutters justify="space-between">
                <v-col cols="5">{{ content.subtitle }}</v-col>
                <v-col class="text-right" cols="7">
                    <a v-if="isRightSubtitleLink" :href="content.rightSubtitle">{{ truncatedRightSubtitleLink }}</a>
                    <span v-else>{{ content.rightSubtitle }}</span>
                </v-col>
            </v-row>
        </v-card-subtitle>
        <v-card-text class="code-card-text">
            <ul class="code-card-ul">
                <li class="code-card-li" v-for="line in content.description" :key="line">
                    {{ line }}
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { CodeCardItem } from '@/common/types/code';
import * as Code from '@/common/constants/code';

export default Vue.extend({
    props: {
        content: {
            type: Object as PropType<CodeCardItem>,
            required: true,
        },
    },
    data() {
        return {
            codeLogosPath: Code.CODE_LOGOS_PATH,
        };
    },
    computed: {
        isRightSubtitleLink(): boolean {
            return !!this.content.rightSubtitle && this.content.rightSubtitle.includes('www');
        },
        truncatedRightSubtitleLink(): string {
            return this.content.rightSubtitle.replace('https://www.', '');
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
    font-size: 2.5vh;
}

.code-card-subtitle {
    font-weight: bold;
    font-size: 2vh;
}

.code-card-text {
    font-size: 1.8vh
}
</style>
