<template>
        <v-list dense nav>
            <NavigationItem v-for="(item, index) of items" :key="index" :item="item" :active="activeItem === item" @click="setActiveItem($event)" />
        </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

import { NavItem } from '@/common/types/navigation';
import { NAVIGATION_ITEMS } from '@/common/constants/navigation';
import NavigationItem from '@/views/components/navigation/NavigationItem.vue';

export default Vue.extend({
    components: {
        NavigationItem,
    },
    data() {
        return {
            activeItem: undefined as NavItem | undefined,
        };
    },
    computed: {
        items(): NavItem[] {
            if (this.activeItem) {
                const size = NAVIGATION_ITEMS.length;
                const half = Math.floor(size / 2);
                const activeItemIndex = NAVIGATION_ITEMS.indexOf(this.activeItem);
                const start = activeItemIndex - half;
                const end = activeItemIndex + half;

                const firstHalf = NAVIGATION_ITEMS.slice(activeItemIndex);
                const secondHalf = NAVIGATION_ITEMS.slice(0, activeItemIndex);
                return NAVIGATION_ITEMS;
            } else {
                return NAVIGATION_ITEMS;
            }
        }
    },
    methods: {
        setActiveItem(item: NavItem) {
            this.activeItem = item;
        }
    }
});
</script>

<style scoped></style>
