<template>
<v-row no-gutters>
    <v-col>
        <v-row class="header-row" no-gutters>
            <v-col class="header-col">
                <v-card class="full-height">
                    <v-content>
                        Header
                    </v-content>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="row in rows" :key="row" class="art-row" no-gutters>
            <v-col v-for="col in cols" :key="col" :class="getClassFromCol(((row-1) * cols) + col)">
                <ArtDisplayCard :content="((row -1) * cols) + col" />
            </v-col>
        </v-row>
</v-col>
</v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import ArtDisplayCard from '@/views/components/art/ArtDisplayCard.vue';

export default Vue.extend({
    components: {
        ArtDisplayCard,
    },
    data() {
        return {
            totalItems: 15 as number,
        }
    },
    computed: {
        cols(): number {
            return 5;
        },
        rows(): number {
            return this.totalItems / this.cols;
        },
        leftEdgeCols(): number[] {
            let leftEdgeCols = [] as number[];
            for (let i = 1; i < this.totalItems;) {
                leftEdgeCols.push(i);
                i += this.cols;
            }
            return leftEdgeCols;
        },
        rightEdgeCols(): number[] {
            let rightEdgeCols = [] as number[];
            for (let i = this.totalItems; i > 0 ;) {
                rightEdgeCols.push(i);
                i -= this.cols;
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

console.log(col, classes);
            return classes;
        }
    }
});
</script>

<style scoped lang="scss">
@import "@/style/Utils.scss";

.header-row {
    height: 10vh;
}

.header-col {
    padding: 0.5vh 0.5vw
}

.art-row {
    height: 20vh;
}

.art-card-col-left {
    padding-left: 0.5vw;
    padding-right: 0.25vw;
}

.art-card-col-mid {
    padding: 0.25vh 0.25vw
}

.art-card-col-right {
    padding-left: 0.25vw;
    padding-right: 0.5vw;
}

.art-card-col-top {
    padding-top: .5vh;
    padding-bottom: 0.25vh;
}

.art-card-col-bottom {
    padding-top: 0.25vh;
    padding-bottom: 0.5vh;
}

</style>