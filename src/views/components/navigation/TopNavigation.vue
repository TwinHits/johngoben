<template>
    <v-row class="nav-item-list" align="center" justify="space-around">
        <v-col v-for="item of navItems" :key="item.title" cols="4">
            <NavigationItem :item="item" :active="activeItem === item" />
        </v-col>
    </v-row>
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
            this.activeItem = newActiveItem;
        },
    },
    mounted() {
        const newActiveItem = NavigationUtils.findCurrentNavigationItem(this.$router.currentRoute);
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

.nav-item-list {
    margin-top: 10vh;
}

@media only screen and (max-width: 768px) {
    .nav-item-list {
        margin-top: 0;
    }
}
</style>