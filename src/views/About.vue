<template>
<v-row class="full-height" no-gutters>
    <v-col cols="3">
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
            <v-col>
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
            <v-col>
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
</v-row>
</template>

<script lang="ts">
import Vue from 'vue';export default Vue.extend({
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
.container-row {
    height: 100%;
}

.full-height {
    height: 100%;
}

.half-height {
    height: 50%;
}

.info-card {
    background-color: $background-dark;
}

/* Slide Right */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 1.2s;
}

.slide-right-enter, .slide-right-right-leave-to {
  opacity: 0;
  transform: translate(-80%, 0);
}

.slide-right-leave {
  opacity: 1;
  transform: translate(100%, 0);
}

.slide-right-enter-to {
  opacity: 1;
}

/* Slide Left */
.slide-left-enter-active, .slide-left-leave-active {
  transition: all 1.4s;
}

.slide-left-enter, .slide-left-right-leave-to {
  opacity: 0;
  transform: translate(50%, 0);
}

.slide-left-leave {
  opacity: 1;
  transform: translate(-100%, 0);
}

.slide-left-enter-to {
  opacity: 1;
}

/* Slide Left */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 1.4s;
}

.slide-up-enter, .slide-up-right-leave-to {
  opacity: 0;
  transform: translate(0, 100%);
}

.slide-up-leave {
  opacity: 1;
  transform: translate(0, -100%);
}

.slide-up-enter-to {
  opacity: 1;
}


</style>
