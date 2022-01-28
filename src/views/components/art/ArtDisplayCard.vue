<template>
<Transition name="fade-in" mode="out-in" appear>
    <v-card v-show="!loading" class="art-display-card" elevation="5">
        <v-row no-gutters>
            <v-col class="art-img-container">
                <img
                    class="art-img"
                    :src="fullPath + content.filename"
                    @load="onImgLoad"
                    @click="onImgClick"
                />
            </v-col>
        </v-row>
        <v-row class="art-img-title text-left" no-gutters align="center">
            <v-col class="art-img-font" :cols="7">
                {{ content.name }}
            </v-col>
            <v-col>
                <v-row no-gutters justify="start">
                    <v-col class="art-tag" md="auto" v-for="tag in content.tags" :key="tag">
                        <ArtTag :content="tag" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</Transition>
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
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/Utils.scss';
@import '@/style/Transitions.scss';

.art-display-card {
    background: $foreground;
}

.art-img-title {
    word-break: break-word;
    padding-left: 0.75vw;
    padding-top: 0.75vh;
    padding-bottom: 0.75vh;
}

.art-img-font {
    color: $text-dark;
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
