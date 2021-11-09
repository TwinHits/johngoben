<template>
        <v-list dense nav>
            <NavigationItem v-for="(item, index) of navItems" :key="index" :item="item" :active="activeItem === item" @click="setActiveItem($event)" />
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
            navItems: NAVIGATION_ITEMS as NavItem[],
            activeItem: NAVIGATION_ITEMS[0] as NavItem,
        };
    },
    watch: {
        activeItem(newValue, oldValue) {
            this.navItems = this.resortNavItems(newValue, oldValue, this.navItems);
        }
    },
    mounted() {
        this.navItems = this.resortNavItems(this.activeItem, NAVIGATION_ITEMS[Math.floor(NAVIGATION_ITEMS.length / 2)], this.navItems);
    },
    methods: {
        setActiveItem(item: NavItem) {
            this.activeItem = item;
        },
        resortNavItems(newActiveItem: NavItem, oldActiveItem: NavItem, navItems: NavItem[]): NavItem[] {
            if (navItems && navItems.length > 0) {
                const newActiveIndex = navItems.indexOf(newActiveItem)
                const oldActiveIndex = navItems.indexOf(oldActiveItem);

                const moves = newActiveIndex - oldActiveIndex;
                for (let i = 0; i !== moves; ) {
                    if (i < moves) {
                        const item = navItems.shift() as NavItem;
                        navItems.push(item);
                        i++;
                    } else if (i > moves) {
                        const item = navItems.pop() as NavItem;
                        navItems.unshift(item);
                        i--;
                    } else {
                        break;
                    }
                }
            }

            return navItems;
        }
    }
});
</script>

<style scoped></style>
