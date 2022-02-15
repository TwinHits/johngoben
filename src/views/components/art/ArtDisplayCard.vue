<template>
    <Transition name="fade-in" mode="out-in" appear>
        <v-card v-show="true || !loading" class="art-display-card" elevation="5">
            <v-row class="art-img-container-row" no-gutters>
                <v-col class="art-img-container-col">
                    <v-img
                        class="art-img"
                        :src="clippath + content.filename"
                        @load="onImgLoad"
                        @click="onImgClick"
                        aspect-ratio="1"
                        max-width="100%"
                        max-height="38vh"
                    />
                </v-col>
            </v-row>
            <v-row class="art-img-footer-row text-left" no-gutters align="center">
                <v-col class="art-img-font">
                    {{ content.name }}
                </v-col>
                <v-col class="col-auto">
                    <v-row no-gutters justify="end">
                        <v-col class="art-tag col-auto" v-for="tag in content.tags" :key="tag">
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
    min-height: 100%;
}

.art-img-footer-row {
    height: 5vh;
    word-break: break-word;
}

.art-img {
    border-radius: 4px 4px 0 0;
}

.art-img-font {
    color: $text-dark;
    font-weight: bold;
    font-size: 1.6vh;
    padding-left: 0.5vw;
}

.art-img-container-col {
}

.art-tag {
    padding: 0.2vh 0.2vw;
}

@media only screen and (max-width: 768px) {
    .art-img-font {
        padding-left: 3vw;
    }

    .art-tag {
        padding-right: 0.5vw;
        padding-left: 0.5vw;
    }

    .art-img-footer-row {
        height: 5vh;
    }
}
</style>
