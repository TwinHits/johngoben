<template>
    <Transition name="slide-left" mode="out-in">
        <v-row v-show="show" class="placeholder-text"> This is the Code section. </v-row>
    </Transition>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = true;
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Transitions.scss';

.placeholder-text {
    color: aliceblue;
}
</style>
