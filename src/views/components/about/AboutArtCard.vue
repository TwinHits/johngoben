<template>
    <v-card elevation="5" @click="navigateToArt()">
        <v-hover v-slot="{ hover }">
            <v-card-text class="about-card-content">
                <v-row no-gutters>
                    <v-col>
                        <v-row>
                            <v-col class="about-card-title">Art</v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-row no-gutters>
                                    <v-col class="about-card-subtitle about-card-text">
                                        I also draw fantasy maps for games and friends.
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="about-card-text">
                                        Check out my work:
                                        <ul class="art-unordered-list">
                                            <li>Dungeons & Dragons Encounter Maps</li>
                                            <li>GTKRadient Multiplayer Maps</li>
                                            <li>Set Design</li>
                                        </ul>
                                    </v-col>
                                </v-row>
                                <v-row class="about-card-footer" no-gutters>
                                    <v-col class="about-card-subtitle">
                                        Commissions open depending on availability.
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col v-if="!isMobile" cols="6">
                        <v-carousel
                            class="art-preview"
                            :class="{ 'art-preview-hover': hover }"
                            hide-delimiters
                            cycle
                            continuous
                            :show-arrows="false"
                            interval="5000"
                        >
                            <v-carousel-item
                                v-for="item in artItems"
                                :key="item.filename"
                                :src="artClipPath + item.filename"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-hover>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Art from '@/common/constants/art';
import { ArtPortfolioItem } from '@/common/types/art';

export default Vue.extend({
    data() {
        return {
            artItems: Art.ART_FILENAMES as ArtPortfolioItem[],
            artClipPath: Art.ART_CLIP_PATH as string,
        };
    },
    methods: {
        navigateToArt() {
            this.$router.push('Art');
        },
    },
    computed: {
        isMobile(): boolean {
            return this.$store.getters.isMobile;
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/components/AboutCard.scss';

.art-preview {
    max-height: 42vh;
    box-shadow: 2px 2px 5px $background;
    border-radius: 5px;
}

.art-preview-hover {
    max-height: 44vh;
}

.art-unordered-list {
    padding-left: 2vw;
}

.about-card-footer {
    bottom: 3.5vh;
}

@media only screen and (max-width: 768px) {
    .art-unordered-list {
        padding-left: 10vw;
    }
}
</style>
