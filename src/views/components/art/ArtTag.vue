<template>
    <v-chip class="art-tag" color="#607D8B" label text-color="#ECEFF1" @click="$emit('click')">
        <span class="art-tag-label">
            {{ content }}
        </span>
    </v-chip>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        content: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
.art-tag-label {
    padding: 0vh .25vw;
}
</style>
