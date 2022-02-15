<template>
    <v-app app>
        <v-navigation-drawer v-if="!isMobile" permanent app class="nav-drawer font-family">
            <LeftNavigation />
        </v-navigation-drawer>
        <v-navigation-drawer v-if="isMobile" permanent app class="nav-drawer font-family">
            <TopNavigation />
        </v-navigation-drawer>
        <v-content class="content" app style="padding: 0 0 0 15vw">
            <v-container :fill-height="!isMobile" class="container font-family">
                <NextViewIcon class="up-next-view-icon" v-if="!isMobile" direction="up" />
                <router-view />
                <NextViewIcon class="down-next-view-icon" v-if="!isMobile" direction="down" />
                <ContactMe class="contact-me" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import ContactMe from '@/views/components/ContactMe.vue';
import LeftNavigation from '@/views/components/navigation/LeftNavigation.vue';
import NextViewIcon from '@/views/components/navigation/NextViewIcon.vue';
import TopNavigation from '@/views/components/navigation/TopNavigation.vue';

export default Vue.extend({
    components: {
        ContactMe,
        LeftNavigation,
        NextViewIcon,
        TopNavigation,
    },
    created() {
        window.addEventListener('resize', this.setMobile);
        this.setMobile();
    },
    destroyed() {
        window.removeEventListener('resize', this.setMobile);
    },
    methods: {
        setMobile() {
            this.$store.commit('setMobile', this.$vuetify.breakpoint.smAndDown);
        },
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
@import '@/style/components/NextViewIcon.scss';
@import url('https://fonts.googleapis.com/css2?family=Anaheim&display=swap');
@import '@/style/Print.scss';

.font-family {
    font-family: 'Anaheim', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-dark !important;
}

.nav-drawer {
    width: 15vw !important;
    background: $background !important;
    z-index: 2;
}

.container {
    background-color: $background;
    padding: 0;
}

@media only screen and (max-width: 768px) {
    .content {
        padding: 7.9vh 0 0 0 !important;
        height: 70px !important;
    }

    .nav-drawer {
        height: 8vh !important;
        width: 100% !important;
    }
}
</style>
