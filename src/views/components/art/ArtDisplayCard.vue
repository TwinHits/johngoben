<template>
    <v-card class="art-display-card" elevation="5">
        <v-row>
            <v-col class="art-img-container">
                <v-skeleton-loader v-show="loading" type="card" class="art-img" />
                <img class="art-img" v-show="!loading" :src="fullPath + content.filename" @load="onImgLoad" @click="onImgClick"/>
            </v-col>
        </v-row>
        <v-row class="art-img-title text-left" no-gutters>
            <v-col>
                {{ content.name }}
            </v-col>
        </v-row>
        <v-row>
            <v-col class="art-img-container" no-gutters>
                {{ content.tags }}
            </v-col>
        </v-row>
    </v-card>
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
        transition: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            loading: true,
            fullPath: Art.ART_FULL_PATH as string,
            clippath: Art.ART_CLIP_PATH as string,
        };
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
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/Utils.scss';

.art-display-card {
    background: $silver;
}

.art-img-title {
    text-align: center;
    word-break: break-word;
    padding-left: 1vw;
}

.art-img {
    padding: 0 .5vw 0 .5vw;
    width: 100%;
    height: 100%;
}
</style>
