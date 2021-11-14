<template>
    <v-app app>
        <v-navigation-drawer permanent app>
            <LeftNavigation />
        </v-navigation-drawer>
        <v-content app>
            <v-container fill-height class="">
                <NextViewIcon class="up-next-view-icon" direction="up" />
                    <router-view />
                <NextViewIcon class="down-next-view-icon" direction="down" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import LeftNavigation from '@/views/components/navigation/LeftNavigation.vue';
import NextViewIcon from '@/views/components/navigation/NextViewIcon.vue';

export default Vue.extend({
    components: {
        LeftNavigation,
        NextViewIcon,
    },
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

.container {
    padding: 0;
    background-color: $background-dark;
}
</style>
