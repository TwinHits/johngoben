<template>
    <v-app app>
        <LeftNavigation />
        <v-main>
            <v-container id="app" fluid>
                <router-view />
            </v-container>
        </v-main>
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
