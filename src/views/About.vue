<template>
    <v-row class="full-height" no-gutters>
        <v-col cols="3" class="info-col-left info-col">
            <Transition name="slide-right" mode="out-in">
                <v-card v-show="show" elevation="3" class="info-card full-height">
                    <v-card-title> Hello! </v-card-title>
                    <v-card-subtitle> My name's John </v-card-subtitle>
                    <v-card-text> And I'm a huge nerd, big picture </v-card-text>
                </v-card>
            </Transition>
        </v-col>
        <v-col cols="9">
            <v-row no-gutters class="half-height">
                <v-hover v-slot="{ hover }">
                    <v-col class="info-col-right info-col-top" :class="{ 'info-col-hover': hover }">
                        <Transition name="slide-left" mode="out-in">
                            <v-card v-show="show" elevation="0" class="info-card full-height" @click="navigateToCode()">
                                <v-card-title> Code </v-card-title>
                                <v-card-subtitle> I am this person generally </v-card-subtitle>
                                <v-card-text> I do these specific things </v-card-text> </v-card
                            >/
                        </Transition>
                    </v-col>
                </v-hover>
            </v-row>
            <v-row no-gutters class="half-height">
                <v-hover v-slot="{ hover }">
                    <v-col class="info-col-right info-col-bottom" :class="{ 'info-col-hover': hover }">
                        <Transition name="slide-up" mode="out-in">
                            <v-card v-show="show" elevation="0" class="info-card full-height" @click="navigateToArt()">
                                <v-card-title> Art </v-card-title>
                                <v-card-subtitle> My Work </v-card-subtitle>
                                <v-card-text>
                                    Check out my work this way by scrolling or clicking this mildly bouncing arrow
                                </v-card-text>
                            </v-card>
                        </Transition>
                    </v-col>
                </v-hover>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: {},
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
        navigateToCode() {
            this.$router.push("Code");
        },
        navigateToArt() {
            this.$router.push("Art");
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
}

.info-col {
    padding-left: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    padding-right: 2vw;
    transition: padding-right 1.2s, padding-left 1.2s, padding-top 1.2s, padding-bottom 1.2s;
}

.info-col-left {
    padding-left: 2vw;
    padding-right: 1vw;
}

.info-col-right {
    padding-left: 1vw;
    padding-right: 2vw;
}

.info-col-top {
    padding-top: 2vw;
    padding-bottom: 1vw;
}

.info-col-bottom {
    padding-top: 1vw;
    padding-bottom: 2vw;
}

.info-col-hover {
    padding-left: 1vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-right: 1vw;
}
</style>
