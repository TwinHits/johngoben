<template>
    <v-card class="art-display-card" elevation="5">
        <v-row no-gutters>
            <v-col class="art-img-container">
                <v-skeleton-loader v-show="loading" type="card" class="art-img" />
                <img
                    class="art-img"
                    v-show="!loading"
                    :src="fullPath + content.filename"
                    @load="onImgLoad"
                    @click="onImgClick"
                />
            </v-col>
        </v-row>
        <v-row class="art-img-title text-left" no-gutters align="center">
            <v-col class="art-img-font" md="auto">
                {{ content.name }}
            </v-col>
            <v-col>
                <v-row no-gutters justify="end">
                    <v-col class="art-tag" md="auto" v-for="tag in content.tags" :key="tag">
                        <ArtTag :content="tag" @click="onTagClick(tag)" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import * as Art from '@/common/constants/art';

import { ArtPortfolioItem } from '@/common/types/art';

import ArtTag from '@/views/components/art/ArtTag.vue';

export default Vue.extend({
    components: {
        ArtTag,
    },
    props: {
        content: {
            type: Object as PropType<ArtPortfolioItem>,
            required: true,
        },
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
            this.$emit('imgClick', this.content);
        },
        onTagClick(tag: string) {
            this.$emit('tagClick', tag);
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/Utils.scss';

.art-display-card {
    background: $foreground;
}

.art-img-title {
    text-align: center;
    word-break: break-word;
    padding-left: 0.75vw;
    padding-top: 0.75vh;
    padding-bottom: 0.75vh;
}

.art-img-font {
    color: $text;
    font-weight: bold;
}

.art-img {
    padding: 1vh 0.5vw 0 0.5vw;
    width: 100%;
    height: 100%;
}

.art-tag {
    padding: 0.25vh 0.25vw;
}
</style>
