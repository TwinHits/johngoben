<template>
    <v-app app>
        <v-navigation-drawer permanent app class="nav-drawer">
            <LeftNavigation />
        </v-navigation-drawer>
        <v-content app>
            <v-container fill-height class="container">
                <NextViewIcon class="up-next-view-icon" direction="up" />
                <router-view />
                <NextViewIcon class="down-next-view-icon" direction="down" />
                <ContactMe class="contact-me" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import * as NavigationUtils from '@/common/utils/navigation';

import ContactMe from '@/views/components/ContactMe.vue';
import LeftNavigation from '@/views/components/navigation/LeftNavigation.vue';
import NextViewIcon from '@/views/components/navigation/NextViewIcon.vue';

export default Vue.extend({
    components: {
        ContactMe,
        LeftNavigation,
        NextViewIcon,
    },
    created () {
        window.addEventListener('wheel', this.handleWheelScroll);
    },
    destroyed () {
        window.removeEventListener('wheel', this.handleWheelScroll);
    },
    methods: {
        handleWheelScroll(event: WheelEvent) {
            let nextRoute;
            console.log(event.deltaY);
            console.log(window.scrollY);
            if (event.deltaY < 0 && window.scrollY === 0) {
                nextRoute = NavigationUtils.findNextRoute(this.$router.currentRoute, -1)
            } else if (event.deltaY > 0) {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    nextRoute = NavigationUtils.findNextRoute(this.$router.currentRoute, 1)
                }
            }

            if (nextRoute) {
                this.$router.push(nextRoute.route);
            }
        },
    }
});
</script>

<style scoped lang="scss">
@import "@/style/Colors.scss";
@import "@/style/components/NextViewIcon.scss";

.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.nav-drawer {
    background: $silver !important;
    z-index: 5;
    box-shadow: -4px 0px 10px $background-dark;
}

.container {
    font-family: "Anaheim", sans-serif;
    padding: 0;
    background-color: lightblue;
}

</style>
