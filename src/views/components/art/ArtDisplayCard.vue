<template>
     <v-card class="full-height">
        <v-content>
            This is the picture. {{ content }}
        </v-content>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        content: {
            type: String
        }
    },
})
</script>

<style lang="scss" scoped>
@import '@/style/utils.scss';

</style>