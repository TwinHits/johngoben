<template>
    <v-card @click="setShow(!showFull)" class="contact-me" :class="{ 'contact-me-full': showFull }" elevation="10">
        <v-card-title class="contact-me-title">Contact Me</v-card-title>
        <v-fade-transition>
            <v-row v-show="showText" align="center" justify="center">
                <v-col class="contact-me-icon-col text-center" :cols="1">
                    <v-icon size="35" color="#263238">mdi-at</v-icon>
                </v-col>
                <v-col class="contact-me-text" :cols="8">
                    <a @click.stop="">john.goben@gmail.com</a>
                </v-col>
            </v-row>
        </v-fade-transition>
        <v-fade-transition>
            <v-row v-show="showText" align="center" justify="center">
                <v-col class="contact-me-icon-col text-center" :cols="1">
                    <v-icon size="35" color="#263238">mdi-linkedin</v-icon>
                </v-col>
                <v-col class="contact-me-text" :cols="8">
                    <a href="https://www.linkedin.com/in/johngoben/" target="_blank" @click.stop="">
                        linkedin.com/in/johngoben/
                    </a>
                </v-col>
            </v-row>
        </v-fade-transition>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            showFull: false,
            showText: false,
        };
    },
    methods: {
        setShow(show: boolean) {
            if (show) {
                this.showFull = show;
                setTimeout(() => (this.showText = show), 1000);
            } else {
                setTimeout(() => (this.showFull = show), 100);
                this.showText = show;
            }
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Links.scss';

.contact-me {
    background: $super-foreground;
    position: fixed;
    bottom: 2vh;
    right: 1vw;
    min-width: 6.9vw;
    min-height: 6.5vh;
    transition: min-width 1s, min-height 1s;
}

.contact-me-full {
    min-width: 24vw;
    min-height: 24vh;
}

.contact-me-title {
    font-weight: bold;
    font-size: 1.3em;
}

.contact-me-text {
    font-size: 1.2em;
}

.contact-me-icon-col {
    padding-right: 2vw;
}
</style>
