<template>
    <v-app app>
        <v-navigation-drawer permanent app>
            <LeftNavigation />
        </v-navigation-drawer>
        <v-content app>
            <v-container fill-height class="">
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LeftNavigation from '@/views/components/navigation/LeftNavigation.vue';

export default Vue.extend({
    components: {
        LeftNavigation,
    },
});
</script>

<style scoped lang="scss">
@import "@/style/Colors.scss";
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
