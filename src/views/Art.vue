<template>
    <v-row no-gutters>
        <v-col>
            <v-row v-for="row in rows" :key="row" class="art-row" no-gutters>
                <v-col v-for="col in cols" :key="col" :class="getClassFromCol((row - 1) * cols + col)">
                    <Transition :name="getTransitionFromColAndRow(col, row)" mode="out-in" appear>
                        <ArtDisplayCard :content="art[(row - 1) * cols + col]" @imgClick="showArtModal($event)" />
                    </Transition>
                </v-col>
            </v-row>
        </v-col>
        <ArtDisplayModal :content="showArtModalContent" @close="hideArtModal" />
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import ArtDisplayCard from '@/views/components/art/ArtDisplayCard.vue';
import ArtDisplayModal from '@/views/components/art/ArtDisplayModal.vue';

import * as Art from '@/common/constants/art';
import { ArtPortfolioItem } from '@/common/types/art';

export default Vue.extend({
    components: {
        ArtDisplayCard,
        ArtDisplayModal,
    },
    data() {
        return {
            totalItems: Art.ART_FILENAMES.length as number,
            art: Art.ART_FILENAMES as ArtPortfolioItem[],
            transitions: ["slide-right", "slide-down", "slide-left", "slide-right", "slide-up", "slide-left"] as string[],
            showArtModalContent: undefined as ArtPortfolioItem | undefined,
        };
    },
    computed: {
        cols(): number {
            return 3;
        },
        rows(): number {
            return Math.floor(this.totalItems / this.cols);
        },
        leftEdgeCols(): number[] {
            let leftEdgeCols = [] as number[];
            for (let i = 1; i < this.totalItems; ) {
                leftEdgeCols.push(i);
                i += this.cols;
            }
            return leftEdgeCols;
        },
        rightEdgeCols(): number[] {
            let rightEdgeCols = [] as number[];
            for (let i = 0; i < this.totalItems; ) {
                i += this.cols;
                rightEdgeCols.push(i);
            }
            return rightEdgeCols;
        },
    },
    methods: {
        getClassFromCol(col: number) {
            let classes = ['art-card-col-mid'];

            if (col <= this.cols) {
                classes.push('art-card-col-top');
            } else if (col > this.cols * (this.rows - 1)) {
                classes.push('art-card-col-bot');
            }

            if (this.leftEdgeCols.includes(col)) {
                classes.push('art-card-col-left');
            } else if (this.rightEdgeCols.includes(col)) {
                classes.push('art-card-col-right');
            }

            return classes;
        },
        getTransitionFromColAndRow(col: number, row: number): string {
            console.log(col, row);
            let colAndRow = (col - 1) + ((row - 1) * this.cols);
            if (colAndRow > this.transitions.length) {
                return this.transitions[colAndRow % this.transitions.length];
            }
            return this.transitions[colAndRow];
        },
        showArtModal(content: ArtPortfolioItem) {
            this.$store.commit('setScrollNavigationEnabled', false);
            this.showArtModalContent = content;
        },
        hideArtModal() {
            this.$store.commit('setScrollNavigationEnabled', true);
        }
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Utils.scss';
@import '@/style/Transitions.scss';

.header-row {
    height: 10vh;
}

.header-col {
    padding: 0.5vh 1vw;
}

.art-row {
    
}

.art-card-col-left {
    padding-left: 2vw !important;
    padding-right: 1vw;
}

.art-card-col-mid {
    padding: 1vh 1vw;
}

.art-card-col-right {
    padding-left: 1vw;
    padding-right: 2vw;
}

.art-card-col-top {
    padding-top: 2vh;
    padding-bottom: 1vh;
}

.art-card-col-bottom {
    padding-top: 1vh;
    padding-bottom: 2vh;
}

.art-display-modal {
    height: 66%;
}
</style>
