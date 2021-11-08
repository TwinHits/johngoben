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
                    title: 'About',
                    route: {
                        name: "About"
                    }
                },
                {
                    title: 'Code',
                    route: {
                        name: "Code"
                    }
                },
                {
                    title: 'Art',
                    route: {
                        name: "Art"
                    }
                },
                {
                    title: 'Words',
                    route: {
                        name: "Words"
                    }
                },
            ] as NavItem[],
            activeItem: undefined as NavItem | undefined,
        };
    }
});
</script>

<style scoped></style>
