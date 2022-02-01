<template>
    <Transition name="fade-in" mode="out-in" appear>
        d
        <v-card v-show="true || !loading" class="art-display-card" elevation="5">
            <v-row class="art-img-container-row" no-gutters align="center" justify="middle">
                <v-col class="art-img-container-col">
                    <v-img
                        class="art-img"
                        :src="fullPath + content.filename"
                        @load="onImgLoad"
                        @click="onImgClick"
                        contain
                        aspect-ratio="1"
                        max-height="39vh"
                    />
                </v-col>
            </v-row>
            <v-row class="art-img-footer-row text-left" no-gutters align="center">
                <v-col class="art-img-font">
                    {{ content.name }}
                </v-col>
                <v-col>
                    <v-row no-gutters justify="end">
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

.art-img-footer-row {
    word-break: break-word;
    padding-left: 0.75vw;
    padding-top: 0.75vh;
    padding-bottom: 0.75vh;
}

.art-img-font {
    color: $text-dark;
    font-weight: bold;
}

.art-img-container-col {
}

.art-tag {
    padding: 0.25vh 0.25vw;
}
</style>
