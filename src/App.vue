<template>
    <v-app app>
        <v-navigation-drawer permanent app>
            <LeftNavigation />
        </v-navigation-drawer>
        <v-content app>
            <v-container id="app">
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

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
