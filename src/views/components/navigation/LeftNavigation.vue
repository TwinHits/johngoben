<template>
    <v-navigation-drawer permanent>
        <v-list dense nav>
            <NavigationItem v-for="(item, index) of navigationItems" :key="index" :item="item" :active="activeItem === item"/>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';

import { NavItem } from '@/common/types/navigation';
import NavigationItem from '@/views/components/navigation/NavigationItem.vue';

export default Vue.extend({
    components: {
        NavigationItem,
    },
    data() {
        return {
            navigationItems: [
                {
                    title: 'Me',
                },
                {
                    title: 'Code',
                },
                {
                    title: 'Art',
                },
                {
                    title: 'Writing',
                },
            ] as NavItem[],
            activeItem: undefined as NavItem | undefined,
        };
    }
});
</script>

<style scoped></style>
