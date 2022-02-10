<template>
    <v-card elevation="5" class="about-card-content full-height">
        <v-row v-if="!isMobile" no-gutters>
            <v-col class="about-card-title"> About </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img class="logo-img" :src="aboutPicture" contain aspect-ratio="1" />
            </v-col>
        </v-row>
        <v-card-subtitle class="about-card-subtitle text-center">John Goben</v-card-subtitle>
        <v-row class="bio-row about-card-text text-center">
            <v-col> Named after this website, John is a Software Engineer and a huge nerd. </v-col>
        </v-row>
        <v-row class="about-card-footer">
            <v-col>
                <EducationCard class="education-card" />
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import * as About from '@/common/constants/about';

import EducationCard from '@/views/components/about/EducationCard.vue';

export default Vue.extend({
    components: {
        EducationCard,
    },
    data() {
        return {
            aboutPicture: About.ABOUT_PATH + About.ABOUT_PICTURE,
        };
    },
    computed: {
        isMobile(): boolean {
            return this.$store.getters.isMobile;
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/components/AboutCard.scss';

.about-card-title {
    padding-left: 16px;
}

.logo-img {
    border-radius: 50%;
    margin: 0 6vw;
    box-shadow: 2px 2px 5px $background;
}

.bio-row {
    padding: 1vh 1vw;
}
</style>
