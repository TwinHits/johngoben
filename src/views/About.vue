<template>
    <v-row class="full-height" no-gutters>
        <v-col cols="4" class="info-col-left info-col">
            <Transition name="slide-right" mode="out-in">
                <AboutAboutCard v-show="show" class="info-card full-height" />
            </Transition>
        </v-col>
        <v-col cols="8">
            <v-row no-gutters class="half-height">
                <v-hover v-slot="{ hover }">
                    <v-col
                        class="info-col info-col-right info-col-top"
                        :class="{ 'info-col-hover info-col-right-hover info-col-top-hover': hover }"
                    >
                        <Transition name="slide-left" mode="out-in">
                            <AboutCodeCard v-show="show" class="info-card full-height" />
                        </Transition>
                    </v-col>
                </v-hover>
            </v-row>
            <v-row no-gutters class="half-height">
                <v-hover v-slot="{ hover }">
                    <v-col
                        class="info-col info-col-right info-col-bottom"
                        :class="{ 'info-col-hover info-col-right-hover info-col-bottom-hover': hover }"
                    >
                        <Transition name="slide-up" mode="out-in">
                            <AboutArtCard v-show="show" class="info-card full-height" />
                        </Transition>
                    </v-col>
                </v-hover>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import AboutAboutCard from '@/views/components/about/AboutAboutCard.vue';
import AboutArtCard from '@/views/components/about/AboutArtCard.vue';
import AboutCodeCard from '@/views/components/about/AboutCodeCard.vue';

export default Vue.extend({
    components: {
        AboutAboutCard,
        AboutArtCard,
        AboutCodeCard,
    },
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = true;
    },
    methods: {
        startTransitions() {
            let delay = 0;
            let step = 300;
            setTimeout(() => (this.show = true), (delay += step));
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Utils.scss';
@import '@/style/Transitions.scss';

.info-card {
    background: $foreground;
    padding: 0.5vw 0.5vh;
}

.info-col {
    padding-left: 2vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-right: 2vw;
    transition: padding-right 0.2s, padding-left 0.2s, padding-top 0.2s, padding-bottom 0.2s;
}

.info-col-left {
    padding-right: 1vw;
}

.info-col-right {
    padding-left: 1vw;
}

.info-col-top {
    padding-bottom: 1vh;
}

.info-col-bottom {
    padding-top: 1vh;
}

.info-col-hover {
    padding-left: 1vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-right: 1vw;
    border-radius: 200px;
}

.info-col-left-hover {
    padding-right: 0vw;
}

.info-col-right-hover {
    padding-left: 0vw;
}

.info-col-top-hover {
    padding-bottom: 0vh;
}

.info-col-bottom-hover {
    padding-top: 0vh;
}
</style>
