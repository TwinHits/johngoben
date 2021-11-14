<template>
<v-row class="full-height" no-gutters>
    <NextViewIcon class="up-next-view-icon" direction="up" />
    <v-col cols="3" class='info-col'>
        <Transition name="slide-right" mode="out-in">
        <v-card v-show="show" elevation="3" class="info-card full-height">
            <v-card-title>
                Hello!
            </v-card-title>
            <v-card-subtitle>
                My name's John
            </v-card-subtitle>
            <v-card-text>
                And I'm a huge nerd, big picture
            </v-card-text>
        </v-card>
        </Transition>
    </v-col>
    <v-col cols="9">
        <v-row no-gutters class="half-height">
            <v-col class='info-col'>
            <Transition name="slide-left" mode="out-in" >
                <v-card v-show="show" elevation="0" class="info-card full-height">
                    <v-card-title>
                        Summary 
                    </v-card-title>
                    <v-card-subtitle>
                        I am this person generally
                    </v-card-subtitle>
                    <v-card-text>
                        I do these specific things
                    </v-card-text>
                </v-card>/
            </Transition>
            </v-col>
        </v-row>
        <v-row no-gutters class="half-height">
            <v-col class='info-col'>
            <Transition name="slide-up" mode="out-in" >
                <v-card v-show="show" elevation="0" class="info-card full-height">
                    <v-card-title>
                        Sign post
                    </v-card-title>
                    <v-card-subtitle>
                        My Work
                    </v-card-subtitle>
                    <v-card-text>
                        Check out my work this way by scrolling or clicking this mildly bouncing arrow
                    </v-card-text>
                </v-card>
            </Transition>
            </v-col>
        </v-row>
    </v-col>
    <NextViewIcon class="down-next-view-icon" direction="down" />
</v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import NextViewIcon from './components/navigation/NextViewIcon.vue';

export default Vue.extend({
    components: {
        NextViewIcon,
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.show = true;
    },
});
</script>

<style scoped lang="scss">
@import "@/style/Colors.scss";
@import "@/style/Utils.scss";
@import "@/style/NextViewIcon.scss";
@import "@/style/Transitions.scss";

.info-col {
    padding: 1vh 0.5vw;
}

.info-card {
}
</style>
