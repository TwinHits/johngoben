<template>
    <v-list-item class="nav-item" @click="goToRoute(item.route)">
        <v-list-item-content class="text-left">
            <v-list-item-title>
                <Transition mode="out-in" name="fade-in">
                    <span class="nav-item-title" :class="{ 'nav-item-active': active }">{{ item.title }}</span>
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
    font-size: 5vh;
    padding-left: 1vw;
    transition: font-size 0.7s, padding-left 0.7s;
    color: $text-light;
    text-shadow: 2px 2px 8px $text-dark;
}

.nav-item-active {
    font-size: 6.5vh;
    font-weight: bold;
    padding-left: 3.5vw;
    transition: font-size 0.7s, padding-left 0.7s;
}
</style>
