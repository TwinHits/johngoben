<template>
    <v-card class="full-height">
        <v-content>
            {{ content.name }}
        </v-content>
    </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { ArtPortfolioItem } from '@/common/types/art';

export default Vue.extend({
    props: {
        content: {
            type: Object as PropType<ArtPortfolioItem>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/utils.scss';
</style>
