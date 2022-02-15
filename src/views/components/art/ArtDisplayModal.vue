<template>
    <v-dialog v-model="show" :fullscreen="$store.getters.isMobile" width="unset">
        <v-card class="art-display-card">
            <v-btn class="close-icon-button" color="#90A4AE" icon medium elevation="4" @click="setShow(false)">
                <v-icon color="#263238" size="35">mdi-window-close</v-icon>
            </v-btn>
            <v-row no-gutters>
                <v-col class="art-img-container" align="center">
                    <img
                        class="art-img"
                        v-if="content && !isMobile"
                        :src="fullPath + content.filename"
                        @load="onImgLoad"
                    />
                    <v-img
                        class="art-img"
                        v-if="content && isMobile"
                        :src="fullPath + content.filename"
                        @load="onImgLoad"
                        contain
                    />
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import * as Art from '@/common/constants/art';

import { ArtPortfolioItem } from '@/common/types/art';

export default Vue.extend({
    props: {
        content: {
            type: Object as PropType<ArtPortfolioItem>,
        },
    },
    data() {
        return {
            show: false,
            loading: true,
            fullPath: Art.ART_FULL_PATH as string,
            clippath: Art.ART_CLIP_PATH as string,
        };
    },
    computed: {
        isMobile(): boolean {
            return this.$store.getters.isMobile;
        },
    },
    watch: {
        content(newValue) {
            if (newValue) {
                this.show = true;
            }
        },
        show(newValue) {
            if (!newValue) {
                this.onClose();
            }
        },
    },
    methods: {
        onImgLoad() {
            this.loading = false;
        },
        setShow(show: boolean) {
            this.show = show;
        },
        onClose() {
            this.$emit('close');
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/Transitions.scss';
@import '@/style/Utils.scss';

.art-display-card {
    background: $background;
}

.close-icon-button {
    position: absolute;
    right: 1vw;
    top: 1.5vh;
}

.art-img-title {
    text-align: center;
    word-break: break-word;
}

.art-img {
    padding: 0.75vh 0.5vw 0vh 0.5vw;
    height: 89vh;
}
</style>
