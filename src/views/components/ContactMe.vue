<template>
    <v-card @click="setShow(!showFull)" class="contact-me" :class="{ 'contact-me-full': showFull }" elevation="10">
        <v-card-title class="contact-me-title">Contact Me</v-card-title>
        <v-card-text v-show="showText">
            <v-fade-transition>
                <v-row align="center" justify="start">
                    <v-col class="contact-me-icon-col text-center" :cols="2">
                        <v-icon size="35" color="#263238">mdi-at</v-icon>
                    </v-col>
                    <v-col class="contact-me-text" :cols="10">
                        <a @click.stop="">john.goben@gmail.com</a>
                    </v-col>
                </v-row>
            </v-fade-transition>
            <v-fade-transition>
                <v-row align="center" justify="start">
                    <v-col class="contact-me-icon-col text-center" :cols="2">
                        <v-icon size="35" color="#263238">mdi-linkedin</v-icon>
                    </v-col>
                    <v-col class="contact-me-text" :cols="10">
                        <a href="https://www.linkedin.com/in/johngoben/" target="_blank" @click.stop="">
                            linkedin.com/in/johngoben/
                        </a>
                    </v-col>
                </v-row>
            </v-fade-transition>
        </v-card-text>
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
            this.showFull = show;
            this.showText = show;
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
    bottom: 1vh;
    right: 1vw;
}

.contact-me-full {
    width: 20vw;
}

.contact-me-title {
    font-weight: bold;
    font-size: 1.3em;
}

.contact-me-text {
    font-size: 1.2em;
}

.contact-me-icon-col {
}

@media only screen and (max-width: 768px) {
    .contact-me {
        right: 5vw;
    }
}
</style>
