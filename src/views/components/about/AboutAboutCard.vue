<template>
    <v-card elevation="5" class="about-card-content full-height">
        <v-card-title class="about-card-title"> Hello! </v-card-title>
        <v-card-subtitle class="about-card-subtitle"> My name's John </v-card-subtitle>
        <v-card-text class="about-card-text">
            Named after this website, John is a Software Engineer with a possibly unhealthy number of interests mostly
            revolving around various different types of media. Here you can find:
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {};
    },
    methods: {},
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/components/AboutCard.scss';
</style>
