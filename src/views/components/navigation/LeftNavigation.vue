<template>
        <v-list dense nav class="elevation-0">
             <transition-group name="nav-list" tag="p">
                <NavigationItem v-for="item of navItems" :key="item.title" :item="item" :active="activeItem === item" @click="resortNavItems($event)" />
            </transition-group>
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
            activeItem: NAVIGATION_ITEMS[Math.floor(NAVIGATION_ITEMS.length / 2)] as NavItem,
        };
    },
    mounted() {
        const currentRoute = this.$route.name;
        const newActiveItem = NAVIGATION_ITEMS.find((item) => item.route.name === currentRoute);
        if (newActiveItem && this.activeItem !== newActiveItem) {
            this.resortNavItems(newActiveItem);
        }
    },
    methods: {
        resortNavItems(newActiveItem: NavItem) {
            const newActiveIndex = this.navItems.indexOf(newActiveItem);
            const oldActiveIndex = this.navItems.indexOf(this.activeItem);

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

            this.activeItem = newActiveItem;
        },
    },
});
</script>

<style scoped>
.nav-list-move {
  transition: all 1s;
}
</style>
