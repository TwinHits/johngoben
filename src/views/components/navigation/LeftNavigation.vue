<template>
    <v-list dense nav class="elevation-0 max-height">
        <transition-group name="list-move">
            <NavigationItem v-for="item of navItems" :key="item.title" :item="item" :active="activeItem === item" />
        </transition-group>
    </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

import { NavItem } from '@/common/types/navigation';

import { NAVIGATION_ITEMS } from '@/common/constants/navigation';
import NavigationItem from '@/views/components/navigation/NavigationItem.vue';
import * as NavigationUtils from '@/common/utils/navigation';

export default Vue.extend({
    components: {
        NavigationItem,
    },
    data() {
        return {
            navItems: NAVIGATION_ITEMS as NavItem[],
            activeItem: NAVIGATION_ITEMS[Math.floor(NAVIGATION_ITEMS.length / 2)] as NavItem,
        };
    },
    watch: {
        $route(newValue) {
            const newActiveItem = NavigationUtils.findCurrentNavigationItem(newValue);
            this.resortNavItems(newActiveItem, this.activeItem);
            this.activeItem = newActiveItem;
        },
    },
    mounted() {
        const newActiveItem = NavigationUtils.findCurrentNavigationItem(this.$router.currentRoute);
        this.resortNavItems(newActiveItem, this.activeItem);
        this.activeItem = newActiveItem;
    },
    methods: {
        resortNavItems(newActiveItem: NavItem, oldActiveItem: NavItem) {
            const newActiveIndex = this.navItems.indexOf(newActiveItem);
            const oldActiveIndex = this.navItems.indexOf(oldActiveItem);

            const moves = newActiveIndex - oldActiveIndex;
            for (let i = 0; i !== moves; ) {
                if (i < moves) {
                    const item = this.navItems.shift() as NavItem;
                    this.navItems.push(item);
                    i++;
                } else if (i > moves) {
                    const item = this.navItems.pop() as NavItem;
                    this.navItems.unshift(item);
                    i--;
                } else {
                    break;
                }
            }
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/Transitions.scss';
</style>
