<template>
    <v-container fill-height>
        <v-row no-gutters class="third-height">
            <v-col cols="7" class="info-col-left info-col-top">
                <Transition name="slide-right" mode="out-in">
                    <v-card v-show="showLeftTop" elevation="3" class="info-card full-height">
                        <v-card-title> BackEnd! </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="5" class="info-col-right info-col-top">
                <Transition name="slide-left" mode="out-in">
                    <v-card v-show="showRight" elevation="3" class="info-card full-height">
                        <v-card-title> BackEnd! </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
        <v-row no-gutters class="third-height">
            <v-col cols="6" class="info-col-left info-col-mid">
                <Transition name="slide-right" mode="out-in">
                    <v-card v-show="showLeftMid" elevation="3" class="info-card full-height">
                        <v-card-title> Front End! </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="6" class="info-col-right info-col-mid">
                <Transition name="slide-left" mode="out-in">
                    <v-card v-show="showRight" elevation="3" class="info-card full-height">
                        <v-card-title> Front End </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
        <v-row no-gutters class="third-height">
            <v-col cols="5" class="info-col-left info-col-bot">
                <Transition name="slide-right" mode="out-in">
                    <v-card v-show="showLeftBot" elevation="3" class="info-card full-height">
                        <v-card-title> Dev Ops! </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
            <v-col cols="7" class="info-col-right info-col-bot">
                <Transition name="slide-left" mode="out-in">
                    <v-card v-show="showRight" elevation="3" class="info-card full-height">
                        <v-card-title> Front End </v-card-title>
                        <v-card-subtitle> Subtitle </v-card-subtitle>
                        <v-card-text> Content </v-card-text>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            showLeftTop: false,
            showLeftMid: false,
            showLeftBot: false,
            showRight: false,
        };
    },
    mounted() {
        this.startTransitions();
    },
    methods: {
        startTransitions() {
            let delay = 0;
            let step = 300;
            setTimeout(() => (this.showLeftTop = true), (delay += step));
            setTimeout(() => (this.showLeftMid = true), (delay += step));
            setTimeout(() => (this.showLeftBot = true), (delay += step));
            setTimeout(() => (this.showRight = true), (delay += step));
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Transitions.scss';
@import '@/style/Utils.scss';

.info-card {
    background: $foreground;
}

.info-col-left {
    padding-left: 0.5vw;
    padding-right: 0.25vw;
}

.info-col-right {
    padding-left: 0.25vw;
    padding-right: 0.5vw;
}

.info-col-top {
    padding-top: 0.5vh;
    padding-bottom: 0.25vh;
}

.info-col-mid {
    padding-top: 0.25vh;
    padding-bottom: 0.25vh;
}

.info-col-bot {
    padding-top: 0.25vh;
    padding-bottom: 0.5vh;
}
</style>
