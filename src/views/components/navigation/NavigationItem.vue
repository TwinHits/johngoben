<template>
    <v-list-item class="nav-item" @click="goToRoute(item.route)">
        <v-list-item-content>
            <v-list-item-title class="text-center">
                <Transition mode="out-in" name="fade-in">
                    <span class="nav-item-title" :class="{ 'nav-item-title-active': active }">{{ item.title }}</span>
                </Transition>
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { NavItem } from '@/common/types/navigation';
import { RawLocation } from 'vue-router';

export default Vue.extend({
    props: {
        item: {
            type: Object as PropType<NavItem>,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        goToRoute(route: RawLocation) {
            if (!this.active) {
                this.$router.push(route);
                this.$emit('click', this.item);
            }
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';

.nav-item {
    height: 23vh;
}

.nav-item-title {
    font-size: 2.5vw;
    transition: font-size 0.7s, padding-left 0.7s;
    color: $text-light;
    text-shadow: 2px 2px 8px $text-dark;
}

.nav-item-title-active {
    font-size: 3.8vw;
    font-weight: bold;
    transition: font-size 0.7s, padding-left 0.7s;
}

@media only screen and (max-width: 768px) {
    .nav-item {
        height: 5vh;
    }

    .nav-item-title {
        font-size: 2.8vh;
        padding-left: 0;
        transition: font-size 0.7s;
        color: $text-light;
        text-shadow: 2px 2px 8px $text-dark;
    }

    .nav-item-title-active {
        font-size: 3.5vh;
        font-weight: bold;
        padding-left: 0;
        transition: font-size 0.7s;
    }
}
</style>
