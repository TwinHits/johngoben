<template>
    <v-row class="full-height" no-gutters>
        <v-col cols="4" class="info-col-left info-col">
            <Transition name="slide-right" mode="out-in">
                <v-card v-show="show" elevation="5" class="info-card full-height">
                    <v-card-title class="about-title"> Hello! </v-card-title>
                    <v-card-subtitle class="about-subtitle"> My name's John </v-card-subtitle>
                    <v-card-text class="about-text">
                        Named after this website, John is a Software Engineer with a possibly unhealthy number of
                        interests mostly revolving around various different types of media. Here you can find:
                        <br />
                        Posts mostly about video games and Star Wars
                        <br />
                        Shameless showing off of things I made out of C++
                        <br />
                        Production, level, and world design art portfolio
                        <br />
                        Stories not actually about Star Wars
                    </v-card-text>
                </v-card>
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

import AboutArtCard from '@/views/components/about/AboutArtCard.vue';
import AboutCodeCard from '@/views/components/about/AboutCodeCard.vue';

export default Vue.extend({
    components: {
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
