<template>
    <v-dialog v-model="show" max-width="66%">
        <v-card class="art-display-card">
        <v-row class="art-img-title text-center" no-gutters>
            <v-col>
                {{ content.name }}
            </v-col>
            <v-col class="art-img-container">
                {{ content.tags }}
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="art-img-container" align="center">
                <img class="art-img" v-show="!loading" :src="fullPath + content.filename" @load="onImgLoad" @click="onImgClick" />
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
            required: true,
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
    watch: {
        content() {
            this.show = true;
        },
        show(newValue) {
            if (!newValue) {
                this.onClose();
            }
        }
    },
    methods: {
        onImgLoad() {
            this.loading = false;
        },
        onImgClick() {
            this.$emit("imgClick", this.content);
        },
        onTagClick(tag: string) {
            this.$emit("tagClick", tag);
        },
        onClose() {
            this.$emit("close");
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/Transitions.scss';
@import '@/style/Utils.scss';

.art-display-card {
    background: $off-white;
}

.art-img-title {
    text-align: center;
    word-break: break-word;
}

.art-img {
    padding: 1vh 1vw;
    height: 86vh;
}
</style>
