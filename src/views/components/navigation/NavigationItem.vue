<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="nav-item-title" :class="{'nav-item-active': active}">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { NavItem } from '@/common/types/navigation';

export default Vue.extend({
    props: {
        item: {
            type: Object as PropType<NavItem>,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        }
    }
});
</script>

<style scoped>
.nav-item-title {
    font-size: 1.1em;
}

.nav-item-active {
    font-size: 1.2em;
}
</style>
