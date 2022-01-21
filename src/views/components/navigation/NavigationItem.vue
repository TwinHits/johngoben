<template>
    <v-list-item @click="goToRoute(item.route)">
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

<style scoped>
.nav-item-title {
    font-size: 0.9em;
    padding-left: 4vw;
    transition: font-size 0.7s, padding-left 0.7s;
}

.nav-item-active {
    font-size: 1.4em;
    font-weight: bold;
    padding-left: 6vw;
    transition: font-size 0.7s, padding-left 0.7s;
}
</style>
